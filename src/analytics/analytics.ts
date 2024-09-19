import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
// import { IAnalyticEventAttributes } from "@/lib/types/eventAttribute";
// import { PRODUCTION_EVENTS_NAME, STAGING_EVENTS_NAME } from "@/utils/eventIds";
import { isStaging, baseURL, firebaseConfig } from "../helpers/helper";
import {
  PRODUCTION_EVENTS_NAME,
  STAGING_EVENTS_NAME,
} from "../helpers/eventids";
import { IAnalyticEventAttributes } from "../types/eventAttributes";
// import { baseURL, firebaseConfig, isStaging } from "@/utils/helpers";

export const firebaseAnalytics = (
  eventName: string,
  analyticsObject: IAnalyticEventAttributes
) => {
  const eventId = isStaging
    ? STAGING_EVENTS_NAME[eventName]
    : PRODUCTION_EVENTS_NAME[eventName];
  if (!eventId) {
    console.error(
      `Error from FirebaseAnalytics : Event Id is missing for ${eventName}.`
    );
    return;
  }
  const analyticsData: IAnalyticEventAttributes = {
    ...analyticsObject,
    eventId,
  };
  console.log(eventName, { ...analyticsData, eventName, eventId });
  const analytics = getAnalytics(initializeApp(firebaseConfig));
  logEvent(analytics, eventName, analyticsData);
};

export const plateformAnalytics = async (
  eventName: string,
  analyticsObject: IAnalyticEventAttributes
) => {
  const eventId = isStaging
    ? STAGING_EVENTS_NAME[eventName]
    : PRODUCTION_EVENTS_NAME[eventName];

  if (!eventId) {
    console.error(
      `Error from PlateformAnalytics : Event Id is missing for ${eventName}.`
    );
    return;
  }

  const queryParams: IAnalyticEventAttributes = {
    eventName,
    eventId,
    ...analyticsObject,
  };

  const filteredParams = Object.entries(queryParams)
    .filter(([_key, value]) => value !== undefined && value !== null)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join("&");

  const url = `${baseURL}?${filteredParams}`;

  try {
    const response = await fetch(url, {
      mode: "no-cors",
    });
    const result = await response.json();
    console.log(result, "plateformAnalyticsSuccess");
  } catch (error) {
    console.error(error, "plateformAnalyticsError");
  }
};
