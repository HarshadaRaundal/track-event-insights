import { CountryCode, CountryNames } from "../lib";

export const ANALYTICS_EVENTS = {
  FIRST_PAGE_LOAD: "first_page_load",
  HOME: { HOME_PAGE_SHOWN: "Homepage_shown" },

  SESSION_EVENTS: {
    ANALYTIC_SESSION_START: "analytic_SessionStart",
    ANALYTIC_SESSION_END: "analytic_SessionEnd",
    LOGIN_SESSION_START: "Login_session_start",
    LOGIN_SESSION_END: "login_session_end",
  },

  LOGIN_EVENTS: {
    OTP_VERIFICATION_OVERLAY_SHOWN: "OTP verification overlay shown",
    SENDOTP_CLICK: "SendOTP_click",
    PHONENUMBERDETAILS_OVERLAY_SHOWN: "Phonenumberdetail-overlay_shown",
    OTPSCREEN_SUBMIT_CLICK: "OTPscreen_Submit_click",
    OTPSCREEN_OTPVERIFICATIONFAILED: "Otpscreen_OTPverificationfailed",
    OTP_VERIFICATION_FAILED: "OTP Verification failed",
    OTPSCREEN_RESEND_CLICK: "OTPscreen _Resend_Click",
    OTP_RETRIGGERED: "OTP retriggered",
    CLICK_DISCORD: "click_Discord",
    CLICK_AIRDROP_LOGIN_CTA: "Click_Airdrop_Login_CTA",
    CLICK_LOGIN_CTA_ON_AIRDROP_LOGIN_PAGE:
      "Click_Login_CTA_on_Aidrop_Login_Page",
    CLICK_VERIFY_CTA_ON_AIRDROP_LOGIN_PAGE:
      "Click_Verify_CTA_on_Aidrop_Login_Page",
    CLICK_RESEND_CTA_ON_AIRDROP_LOGIN_PAGE:
      "Click_Resend_CTA_on_Aidrop_Login_Page",
    CLICK_LOGIN_MEDIUM_ON_AIRDROP_LOGIN_PAGE:
      "Click_Login_Medium_on_Airdrop_Login_Page",
  },

  CAMPAIGN_EVENTS: {
    Scroll_Airdrop_campaign_listing_page:
      "Scroll_Airdrop_campaign_listing_page",
    CLICK_COMPLETED_TASK_CTA_ON_AIRDROP: "Click_Complete_Task_CTA_on_Airdrop",
    VIEW_TASK_PREVIEW_OVERLAY: "View_Task_Preview_Overlay",
    CLICK_CTA_ON_TASK_PREVIEW_OVERLAY: "Click_CTA_On_Task_Preview_Overlay",
    CLOSE_TASK_VALIDATE_OVERLAY: "Close_Task_Validate_Overlay",
    CLICK_CTA_ON_TASK_VALIDATE_OVERLAY: "Click_CTA_On_Task_Validate_Overlay",
    VIEW_TASK_VALIDATING_OVERLAY: "View_Task_Validating_Overlay",
    VIEW_TASK_COMPLETION_OVERLAY: "View_Task_Completion_Overlay",
    CLICK_CTA_ON_TASK_COMPLETION_OVERLAY:
      "Click_CTA_on_Task_Completion_Overlay",
    CLOSE_TASK_COMPLETION_OVERLAY: "Close_Task_Completion_Overlay",
    CLICK_CTA_ON_CONNECT_SOCIAL_OVERLAY: "Click_CTA_on_Connect_Social_Overlay",
    CLICK_COPY_REF_CODE_ON_AIRDROP: "Click_Copy_Ref_Code_on_Airdrop",
    CLICK_CLAIM_CTA_ON_AIRDROP: "Click_Claim_CTA_On_Airdrop",
    CLOSE_SUCCESSFUL_REWARD_CLAIM_OVERLAY:
      "Close_Successful_Reward_Claim_Overlay",
    CLICKS_CTA_ON_SUCCESS_REWARD_CLAIM_OVER:
      "Clicks_CTA_on_Success_Reward_Claim_Over",
    CLICK_REVAL_CTA_ON_VAL_FAILED_OVERLAY:
      "Click_Reval_CTA_On_Val_Failed_Overlay",
    CLICK_RECOM_CTA_ON_VAL_FAILED_OVERLAY:
      "Click_Recom_CTA_On_Val_Failed_Overlay",
    VIEW_VALIDATION_FAILED_OVERLAY: "View_Validation_Failed_Overlay",
    CLICK_RECONNECT_CTA_ON_ERROR_CONNECTING_OVERLAY:
      "Click_Reconnect_CTA_On_Error_Connecting_Overlay",
    CLOSE_SOCIAL_ALREADY_LINKED_OVERLAY: "Close_social_already_linked_overlay",
    CLICK_CTA_ON_SOCIAL_ALREADY_LINKED_OVERL:
      "Click_CTA_on_social_already_linked_overl",
    CLICK_CONNECT_CTA_ON_AIRDROP_PROFILE:
      "Click_Connect_CTA_On_Airdrop_Profile",
    CLICK_SHARE_CAMPAIGN_CTA_ON_AIRDROP: "Click_Share_Campaign_CTA_on_Airdrop",
    CLICK_GET_STARTED_CTA_ON_AIRDROP: "Click_Get_Started_CTA_on_Airdrop",
    Click_Campaign_Card_on_Airdrop: "Click_Campaign_Card_on_Airdrop",
    CLICK_AIRDROP_CTA_ON_KGEN_NAVBAR: "Click_Airdrop_CTA_On_KGeN_Navbar",
    CLICK_GENERAL_REDIRECTION_CTA_ON_AIRDROP:
      "Click_General_redirection_CTA_on_Airdrop",
  },

  PROFILE_EVENTS: {
    CLICK_PROFILE_ICON_ON_AIRDROP: "Click_Profile_Icon_On_Airdrop",
    CLICK_PROFILE_CTA_ON_AIRDROP: "Click_Profile_CTA_On_Airdrop",
    CLICK_LOGOUT_CTA_ON_AIRDROP: "Click_Logout_CTA_On_Airdrop",
    CLICK_CONNECT_CTA_ON_AIRDROP_PROFILE:
      "Click_Connect_CTA_On_Airdrop_Profile",
    VIEW_ERROR_CONNECTING_OVERLAY_ON_AIRDROP_PROFILE:
      "View_Error_Connecting_Overlay_On_Airdrop_Profile",
    CLICK_RECONNECT_CTA_ON_ERROR_CONNECTING_OVERLAY:
      "Click_Reconnect_CTA_On_Error_Connecting_Overlay",
    CLOSE_SOCIAL_ALREADY_LINKED_OVERLAY: "Close_social_already_linked_overlay",
    CLICK_CTA_ON_SOCIAL_ALREADY_LINKED_OVERL:
      "Click_CTA_on_social_already_linked_overl",
  },

  STORY_EVENT: {
    CLICK_FAB_CTA_ON_AIRDROP: "Click_FAB_CTA_on_Airdrop",
    VIEW_ONBOARDING_STORY_ON_AIRDROP: "View_Onboarding_Story_on_Airdrop",
    CLICK_NEXT_ONBOARDING_STORY_ON_AIRDROP:
      "Click_Next_onboarding_story_on_airdrop",
  },
};

export const STORAGE_KEYS = {
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  CAMPAIGN_TASK: "campaignTask",
  CURRENT_CAMPAIGN_TASK_TYPE: "currentCampaignTaskType",
  SOCIAL_CONNECT_TASK_MODAL: "isConnectTaskInitiated",
  SOCIAL_FLOW: "socialFlow",
  SOCIAL_CONNECT_FROM: "socialConnectFrom",
  ANALYTIC_SESSION_ID: "airdrop_analyticSessionId",
  DEVICE_INFO: "deviceInfo",
  EVENT_TIMESTAMP: "airdrop_eventTimestamp",
  IS_SESSION_END_TRIGGERED: "airdrop_isSessionEndTriggered",
  LOGIN_SESSION_ID: "loginSessionId",
  USER_ID: "userId",
  IP_ADDRESS: "ipAddress",
  USER_LOCATION_DATA: "userLocationData",
  AIRDROP_SESSION_TABS: "airdrop_sessionTabs",
  AIRDROP_SESSION_TAB_IDENTIFIER: "airdrop_sessionTabIdentifier",
  IS_TWITTER_CONNECT_FROM_DETAIL_PAGE: "isTwitterConnectFromDetailPage",
  IS_LISTING_GET_STARTED_CTA_CLICKED: "isListingGetStartedCtaClicked",
  IS_HEADER_TOTAL_KPOINTS_CLICKED: "isHeaderTotalKpointsClicked",
};
export const LOGIN_SOURCE = {
  SOURCE: "airdrop-website",
};

export const COUNTRY_NAMES: CountryNames = {
  "+91": "India",
  "+55": "Brazil",
  Others: "Others",
};

export const COUNTRY_CODE: CountryCode = {
  India: "+91",
  Brazil: "+55",
};

export const DEVICE_TYPE = {
  Mobile: "Mobile",
  DeskTop: "DeskTop",
  Others: "Others",
};
