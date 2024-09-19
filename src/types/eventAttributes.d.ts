// Update any new event attibute which is unique
export interface IAnalyticEventAttributes {
  eventName?: string;
  userId?: string | null;
  channel?: string;
  domainName?: string;
  timestamp?: string;
  ipAddress?: string | null;
  loginSessionId?: string | null;
  gameAccountId?: string;
  platformGameId?: string;
  email?: string;
  eventId?: string;
  campaignId?: string;
  taskId?: string | null;
  social?: string;
  campaignState?: string;
  failureReason?: string;
  screenHeight?: string;
  screenWidth?: string;
  browserName?: string;
  osName?: string;
  osVersion?: string;
  deviceModel?: string;
  timeSpent?: string;
  pageType?: string;
  walletId?: string;
  entryPoint?: string | null | undefined;
  deviceId?: string;
  socialPlatformId?: string;
  scrollDepth?: string;
  airdrop_analyticSessionId?: string | null;
  device?: string;
  location?: string;
  Proof?: string;
  source?: string; // only for session events
  medium?: string | null;
  errorMessage?: string;
  platform?: string;
  storyInfoModalCount?: string | number | null;
  overlayCount?: number | string;
  utmId?: string | null;
  utmSource?: string | null;
  utmMedium?: string | null;
  utmCampaign?: string | null;
  utmTerm?: string | null;
  utmContent?: string | null;
  bonusType?: string;
  bonusCurrency?: string;
  bonusAmount?: string;
}

export interface IAnalyticsEventIds {
  [key: string]: string;
}

export interface IDeviceInfo {
  screenHeight: string;
  screenWidth: string;
  browserName: string;
  osName: string;
  osVersion: string;
  deviceModel: string;
}

export interface IEventAttributesSliceProps {
  deviceInfo: IDeviceInfo;
  previousPage: string;
  ipAddress?: string;
}

export interface IuserLocationData {
  countryCode: string;
  countryName: string;
}
