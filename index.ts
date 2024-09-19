import { v4 as uuidv4 } from "uuid";

import {
  ANALYTICS_EVENTS,
  COUNTRY_CODE,
  COUNTRY_NAMES,
  DEVICE_TYPE,
  LOGIN_SOURCE,
  STORAGE_KEYS,
} from "./src/constants/const";
import { getLocalStorageItem } from "./src/helpers/helper";
import { LABEL_EN } from "./src/translation/en";

import { isMobile, isDesktop } from "react-device-detect";
import {
  IAnalyticEventAttributes,
  IDeviceInfo,
  IuserLocationData,
} from "./src/types/eventAttributes";

const {
  ANALYTIC_SESSION_START,
  ANALYTIC_SESSION_END,
  LOGIN_SESSION_START,
  LOGIN_SESSION_END,
} = ANALYTICS_EVENTS.SESSION_EVENTS;

const { KGEN, K_DROP } = LABEL_EN;

const {
  USER_ID,
  EVENT_TIMESTAMP,
  LOGIN_SESSION_ID,
  USER_LOCATION_DATA,
  ANALYTIC_SESSION_ID,
  IS_SESSION_END_TRIGGERED,
} = STORAGE_KEYS;

const { SOURCE } = LOGIN_SOURCE;

const generateAnalyticsObject = (): IAnalyticEventAttributes => {
  // Get userId and ipAddress from localStorage
  const userId = getLocalStorageItem(USER_ID);
  const loginSessionId = getLocalStorageItem(LOGIN_SESSION_ID);
  const airdrop_analyticSessionId = getLocalStorageItem(ANALYTIC_SESSION_ID);
  const analyticObject: IAnalyticEventAttributes = {
    userId,
    loginSessionId,
    airdrop_analyticSessionId,
    timestamp: new Date().getTime().toString(),
  };

  return analyticObject;
};

// Function to track analytics events
const sessionTimeout = 30 * 60 * 1000; // 30 minutes in milliseconds
export let inactivityTimer: NodeJS.Timeout | undefined;
export let isSessionEndTrigger: boolean = false; //  Data for reference

export const isSessionEnd = () => {
  const eventTimestamp = getLocalStorageItem(EVENT_TIMESTAMP);
  if (eventTimestamp !== null) {
    const lastEventTimestamp = parseInt(eventTimestamp, 10);
    const timeDifference = Date.now() - lastEventTimestamp;
    const isSessionEnded = timeDifference > sessionTimeout;
    return isSessionEnded;
  } else {
    return false;
  }
};

const startInactivityTimer = (time?: number) => {
  inactivityTimer = setTimeout(() => {
    triggerSessionEndEvent();
  }, time || 30 * 60 * 1000); // 30 minutes in milliseconds
};

export const triggerSessionEndEvent = () => {
  const analyticSessionId = getLocalStorageItem(ANALYTIC_SESSION_ID);
  const sessionAttributes = filteredAttributes(generateAnalyticsObject());
  const storedValue = localStorage?.getItem(IS_SESSION_END_TRIGGERED);
  const isSessionEndTriggered =
    storedValue !== null ? JSON.parse(storedValue) : null;
  if (!isSessionEndTriggered && analyticSessionId) {
    firebaseAnalytics(ANALYTIC_SESSION_END, sessionAttributes);
    plateformAnalytics(ANALYTIC_SESSION_END, sessionAttributes);
    setLocalStorage(IS_SESSION_END_TRIGGERED, "true");
    isSessionEndTrigger = true;
    localStorage.removeItem(ANALYTIC_SESSION_ID);
  }
  // Cancel the timer to prevent further execution
  clearTimeout(inactivityTimer);
};

export const resetInactivityTimer = (time?: number) => {
  clearTimeout(inactivityTimer);
  startInactivityTimer(time);
};

// Reactivate analyticSession()
const startNewAnalyticSession = (
  event: string,
  analyticsData: IAnalyticEventAttributes,
  isEndEventTrigger: string | null
) => {
  const airdrop_analyticSessionId = encodeURIComponent(uuidv4());
  setLocalStorage(ANALYTIC_SESSION_ID, airdrop_analyticSessionId);

  const userId = getLocalStorageItem(USER_ID);
  const loginSessionId = getLocalStorageItem(LOGIN_SESSION_ID);
  const getUserLocation = getLocalStorageItem(USER_LOCATION_DATA);
  const domainName = KGEN;
  const { deviceInfo, userLocationData, ipAddress } = getStoreValue();
  const { Mobile, DeskTop, Others } = DEVICE_TYPE;

  let userLocation = userLocationData;
  if (getUserLocation !== null) {
    userLocation = JSON.parse(getUserLocation);
  }

  console.log("getDeviceInfo >>>", deviceInfo); //For Reference
  console.log("getUserLocation >>>", getUserLocation); //For Reference

  const { countryCode } = userLocation || ({} as IuserLocationData);

  const location = COUNTRY_CODE[countryCode]
    ? COUNTRY_NAMES[countryCode]
    : COUNTRY_NAMES.Others;

  const {
    screenHeight,
    screenWidth,
    browserName,
    osName,
    osVersion,
    deviceModel,
  } = deviceInfo || ({} as IDeviceInfo);

  const device = isMobile ? Mobile : isDesktop ? DeskTop : Others;

  const sessionAttributes = {
    userId,
    location,
    ipAddress,
    domainName,
    loginSessionId,
    airdrop_analyticSessionId,
    channel: SOURCE,
    timestamp: Date.now().toString(),
    // Device Info
    device,
    osName,
    osVersion,
    deviceModel,
    browserName,
    screenHeight: screenHeight?.toString(),
    screenWidth: screenWidth?.toString(),
    source: SOURCE,
  };

  const filteredSessionAttribute = filteredAttributes(sessionAttributes);

  if (isEndEventTrigger === "true") {
    localStorage.removeItem(IS_SESSION_END_TRIGGERED);
  }

  firebaseAnalytics(ANALYTIC_SESSION_START, filteredSessionAttribute);

  plateformAnalytics(ANALYTIC_SESSION_START, filteredSessionAttribute);

  if (Object.keys(analyticsData).length > 0) {
    setLocalStorage(EVENT_TIMESTAMP, Date.now().toString());

    // Track the event using Firebase Analytics and platform-specific analytics
    firebaseAnalytics(event, { ...analyticsData, airdrop_analyticSessionId });

    plateformAnalytics(event, { ...analyticsData, airdrop_analyticSessionId });

    resetInactivityTimer();
  } else {
    console.error("Analytics data is empty.");
  }
};

const isNotNullOrUndefined = (value: string | null | undefined): boolean => {
  return (
    value !== "null" &&
    value !== "undefined" &&
    value !== null &&
    value !== undefined
  );
};

export const filteredAttributes = (
  commonAnalytics: IAnalyticEventAttributes
) => {
  const filteredAnalyticsData: IAnalyticEventAttributes = {};
  for (const [key, value] of Object.entries(commonAnalytics)) {
    // Convert to string if the value is not already a string
    const stringValue = typeof value === "string" ? value : String(value);

    // Exclude null or undefined values
    if (isNotNullOrUndefined(stringValue)) {
      filteredAnalyticsData[key as keyof IAnalyticEventAttributes] =
        stringValue;
    }
  }
  return filteredAnalyticsData;
};

export const trackAnalytics = (
  eventName: string,
  eventAttributes: IAnalyticEventAttributes
) => {
  const userId = getLocalStorageItem(USER_ID);
  const loginSessionId = getLocalStorageItem(LOGIN_SESSION_ID);
  const isEndEventTrigger = getLocalStorageItem(IS_SESSION_END_TRIGGERED);

  if (isSessionEnd() && isEndEventTrigger === null) {
    triggerSessionEndEvent();
  }

  const airdrop_analyticSessionId = getLocalStorageItem(ANALYTIC_SESSION_ID);
  const { entryPoint } = eventAttributes || ({} as IAnalyticEventAttributes);
  const updateEntryPoint = entryPoint === "/" ? "Home_Page" : entryPoint;
  const analyticsData = { ...eventAttributes, entryPoint: updateEntryPoint };

  const filteredAnalyticsData = filteredAttributes({
    userId,
    loginSessionId,
    ...analyticsData,
    channel: SOURCE,
    airdrop_analyticSessionId,
    timestamp: new Date().getTime().toString(),
  });

  if (
    eventName !== ANALYTIC_SESSION_START &&
    (isSessionEnd() || airdrop_analyticSessionId === null)
  ) {
    console.log("New Session Start with eventName >>>>", eventName);
    startNewAnalyticSession(
      eventName,
      filteredAnalyticsData,
      isEndEventTrigger
    );
  } else {
    if (Object.keys(filteredAnalyticsData).length > 0) {
      setLocalStorage(EVENT_TIMESTAMP, Date.now().toString());
      // Track the event using Firebase Analytics and platform-specific analytics
      firebaseAnalytics(eventName, filteredAnalyticsData);
      plateformAnalytics(eventName, filteredAnalyticsData);

      resetInactivityTimer();

      if (isEndEventTrigger === "true") {
        localStorage.removeItem(IS_SESSION_END_TRIGGERED);
      }
    } else {
      console.error("Analytics data is empty.");
    }
  }
};

if (typeof window !== "undefined" && window?.BroadcastChannel) {
  const channel = new window.BroadcastChannel("tabCommunicationChannel");
  channel.addEventListener("message", (event: { data: string }) => {
    if (event.data === "tabClosed") {
      const localStorageData = localStorage.getItem("sessionTabs");
      const sessionUniqueId = sessionStorage.getItem("sessionTabIdentifier");

      if (localStorageData) {
        const sessionTabs = JSON.parse(localStorageData) || [];
        const isSessionActive =
          sessionUniqueId === sessionTabs[0] ||
          sessionUniqueId === sessionTabs[1];
        if (isSessionActive) {
          const eventTimestamp = getLocalStorageItem(EVENT_TIMESTAMP);
          if (isSessionEnd() && !isSessionEndTrigger) {
            triggerSessionEndEvent();
          } else if (eventTimestamp !== null) {
            const lastEventTimestamp = parseInt(eventTimestamp, 10);
            // ! changing session timeout to 4 mins for CCP testing
            const timeDifference =
              30 * 60 * 1000 - (Date.now() - lastEventTimestamp);
            resetInactivityTimer(timeDifference);
          }
        }
      }
    }
  });

  window?.addEventListener("beforeunload", function () {
    channel.postMessage("tabClosed");
    channel.close();
  });
}

export const triggerLoginSessionEvent = (
  idToken: string,
  entryPoint: string
) => {
  const { deviceInfo } = getStoreValue();
  const userId = parseJwt(idToken)?.["cognito:username"];
  const loginSessionId = encodeURIComponent(uuidv4());
  setLocalStorage(LOGIN_SESSION_ID, loginSessionId);
  const loginSessionAttributes: IAnalyticEventAttributes = {
    ...deviceInfo,
    userId,
    loginSessionId,
    source: K_DROP,
    entryPoint,
  };
  trackAnalytics(LOGIN_SESSION_START, loginSessionAttributes);
};

export const triggerLogoutSessionEvent = (pathName: string) => {
  trackAnalytics(LOGIN_SESSION_END, { source: K_DROP, entryPoint: pathName });
};

function firebaseAnalytics(
  ANALYTIC_SESSION_END: string,
  sessionAttributes: IAnalyticEventAttributes
) {
  throw new Error("Function not implemented.");
}

function plateformAnalytics(
  ANALYTIC_SESSION_END: string,
  sessionAttributes: IAnalyticEventAttributes
) {
  throw new Error("Function not implemented.");
}

function setLocalStorage(
  ANALYTIC_SESSION_ID: string,
  airdrop_analyticSessionId: string
) {
  throw new Error("Function not implemented.");
}

function getStoreValue(): {
  deviceInfo: any;
  userLocationData: any;
  ipAddress: any;
} {
  throw new Error("Function not implemented.");
}

function parseJwt(idToken: string) {
  throw new Error("Function not implemented.");
}
// function firebaseAnalytics(
//   ANALYTIC_SESSION_END: string,
//   sessionAttributes: IAnalyticEventAttributes
// ) {
//   throw new Error("Function not implemented.");
// }

// function plateformAnalytics(
//   ANALYTIC_SESSION_END: string,
//   sessionAttributes: IAnalyticEventAttributes
// ) {
//   throw new Error("Function not implemented.");
// }

// function setLocalStorage(
//   ANALYTIC_SESSION_ID: string,
//   airdrop_analyticSessionId: string
// ) {
//   throw new Error("Function not implemented.");
// }

// function getStoreValue(): {
//   deviceInfo: any;
//   userLocationData: any;
//   ipAddress: any;
// } {
//   throw new Error("Function not implemented.");
// }
