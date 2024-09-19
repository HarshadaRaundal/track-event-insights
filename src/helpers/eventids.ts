import { IAnalyticsEventIds } from "../types/eventAttributes";

export const PRODUCTION_EVENTS_NAME: IAnalyticsEventIds = {
  // 'Event Name' : 'Event Id'
  analytic_SessionStart: "a12a8b6d-636e-4d78-b78c-087f8cfc7256",
  login_session_end: "4fb0e1e3-8f70-4061-a9bf-fd044192a616",
  analytic_SessionEnd: "3c5f2dab-cd69-4838-967d-a63afc8a6298",
  Login_session_start: "1ae53340-3abf-457f-b447-d8d85627feee",
  first_page_load: "1dfd8868-0321-420d-af5d-24a1ea686b9a",
  Scroll_Airdrop_campaign_listing_page: "Add Prod event id",
  Click_Campaign_Card_on_Airdrop: "ec5fc8b8-3289-4f9e-9baa-2da8d809b9ff",
  Click_Complete_Task_CTA_on_Airdrop: "f6f78617-0adf-4eb3-8225-572ad9fcbb7c",
  View_Task_Preview_Overlay: "726c6ad7-efac-4954-92e0-52c54b1aea17",
  Click_CTA_On_Task_Preview_Overlay: "853a5e60-28ab-45b3-96bd-1b75e2f3578f",
  Close_Task_Validate_Overlay: "c451d540-5f10-4f89-87d5-f2402b650bfb",
  Click_CTA_On_Task_Validate_Overlay: "c05a503e-aa24-421d-97bc-e6e5807941d5",
  View_Task_Validating_Overlay: "92887f34-c821-4c2c-8bb6-6261d860700c",
  View_Task_Completion_Overlay: "ed67e135-d599-4ebe-8f73-f58c285f731a",
  Click_CTA_on_Task_Completion_Overlay: "61af4477-d648-4f91-9c69-df274542b737",
  Close_Task_Completion_Overlay: "34b23d2b-fa05-4bf7-b5af-a9b0c6e29431",
  Click_CTA_on_Connect_Social_Overlay: "c0e0e51d-6bb5-4161-95ec-a59d4f2fe278",
  Click_Copy_Ref_Code_on_Airdrop: "4cc69a78-3174-44d3-a417-af57f498d79e",
  Click_Claim_CTA_On_Airdrop: "168338e9-7f80-4a63-b73b-a0a8e07eb1d0",
  Close_Successful_Reward_Claim_Overlay: "1fa02f78-eb2d-4dc1-b6e8-29b20931bd2a",
  Clicks_CTA_on_Success_Reward_Claim_Over:
    "88cfc5b9-d45c-41b6-a136-2c3c21c3ac14",
  Click_Reval_CTA_On_Val_Failed_Overlay: "81c0bead-f9cc-4b36-8d11-3aa3f249827c",
  Click_Recom_CTA_On_Val_Failed_Overlay: "af7d037c-8234-480c-9d04-b2a1b4618652",
  View_Validation_Failed_Overlay: "30dbf196-a23c-4387-85d6-ab9c52654096",
  Click_Reconnect_CTA_On_Error_Connecting_Overlay:
    "2366671b-685a-43c4-8678-1ec84e7895b4",
  Close_social_already_linked_overlay: "5633fcd0-6618-49c4-975e-7a4d275c385b",
  Click_CTA_on_social_already_linked_overl:
    "e0553a2b-4ac6-435a-b0cc-c1b78e24f6d4",
  Click_Connect_CTA_On_Airdrop_Profile: "32971a4d-8cfb-4e04-bbef-66a695223cb9",
  Click_Share_Campaign_CTA_on_Airdrop: "8ae9ffae-1f2b-47ed-90ef-4f15b15b37b8",
  Click_Get_Started_CTA_on_Airdrop: "2644e745-fea6-40a9-bda9-c444458782bd",
  Click_Profile_Icon_On_Airdrop: "48b306e3-37aa-4cf7-9bbe-b313aaef1464",
  Click_Profile_CTA_On_Airdrop: "a41bc522-804f-423e-932c-8b69f6862623",
  Click_Logout_CTA_On_Airdrop: "c5bc65f6-8c64-4faf-a3eb-22fc4879598d",
  View_Error_Connecting_Overlay_On_Airdrop_Profile:
    "94371725-d928-4171-bd0c-886f8ada5c83",
  Click_Airdrop_Login_CTA: "6caa3f71-04b7-47ec-8409-e9a0cb407650",
  Click_Login_CTA_on_Aidrop_Login_Page: "e6709ace-e345-4979-b6e1-5ed76c634a61",
  Click_Verify_CTA_on_Aidrop_Login_Page: "8996d820-6c57-4902-9bc6-01d108d86bfb",
  Click_Resend_CTA_on_Aidrop_Login_Page: "079ad089-d1aa-4927-a7ec-a99d7a4d2ed0",
  Click_Login_Medium_on_Airdrop_Login_Page:
    "252b3f41-8203-4f04-a29f-f9a4167fff73",
  Click_Airdrop_CTA_On_KGeN_Navbar: "37380e7c-f792-48a4-ba3b-d2a07c562c32",
  Click_FAB_CTA_on_Airdrop: "5d9c0510-5549-4079-833b-597f901bd061",
  View_Onboarding_Story_on_Airdrop: "d64c4092-29a4-46a1-a8c7-f11ab7ae6c31",
  Click_Next_onboarding_story_on_airdrop:
    "511d1651-c38c-4842-af7b-67ad71d7c4b9",
  Click_General_redirection_CTA_on_Airdrop:
    "affce196-90d7-4bd1-90f4-5f2b8803fbd6",
};

export const STAGING_EVENTS_NAME: IAnalyticsEventIds = {
  // 'Event Name' : 'Event Id'
  analytic_SessionStart: "85396224-0af2-4145-bf59-da0f369c6565",
  login_session_end: "19d959a2-3788-487a-b2ca-0a41d8a14a2d",
  analytic_SessionEnd: "ac6fcd48-c5cb-4bce-9c7a-1ff39fe64dc3",
  Login_session_start: "15831a09-4928-4d19-b711-1668137e4a37",
  first_page_load: "d89a9bc1-f29c-438a-9c5b-bdde1ef8aec3",
  Scroll_Airdrop_campaign_listing_page: "Add stage event id",
  Click_Campaign_Card_on_Airdrop: "a386d0ef-3605-4e18-9d52-8ed4829a7f47",
  Click_Complete_Task_CTA_on_Airdrop: "bd583ce6-36cd-4db8-8969-ffa71b3e77d0",
  View_Task_Preview_Overlay: "9bc75e09-e0b6-4089-879a-8be1a9f7b419",
  Click_CTA_On_Task_Preview_Overlay: "7beb0010-9b5b-43e1-a9c9-33fb30e55f2c",
  Close_Task_Validate_Overlay: "8fc13ec2-2a60-42d5-a61e-0c5e9d7c9664",
  Click_CTA_On_Task_Validate_Overlay: "f7cd9943-4231-4214-8107-aa253f61ae3b",
  View_Task_Validating_Overlay: "c2380be6-abe6-4a89-9cd6-8d2fb1830015",
  View_Task_Completion_Overlay: "17c99d5f-df2e-4dcf-a0d1-aa3437eca218",
  Click_CTA_on_Task_Completion_Overlay: "f142a6b5-338d-4549-b4e7-b5b4b7ac037c",
  Close_Task_Completion_Overlay: "55014a52-6b0f-4add-bf6b-72e62a286f99",
  Click_CTA_on_Connect_Social_Overlay: "1c785377-7064-41dc-acc3-110d55b8fbb4",
  Click_Copy_Ref_Code_on_Airdrop: "56337aba-b750-4269-8a96-728d0167acad",
  Click_Claim_CTA_On_Airdrop: "f1c80fce-d470-4a82-904a-195fb5ddde1f",
  Close_Successful_Reward_Claim_Overlay: "f41f2ee4-fb7f-46af-a7db-453972ec3a8a",
  Clicks_CTA_on_Success_Reward_Claim_Over:
    "9fae556d-6357-4e8c-b521-0e59271691d3",
  Click_Reval_CTA_On_Val_Failed_Overlay: "08bbc51b-242e-4f80-86a0-01cb2af5ac17",
  Click_Recom_CTA_On_Val_Failed_Overlay: "184797a3-965f-497f-930f-8ea666afd6a7",
  View_Validation_Failed_Overlay: "66025810-6bf8-467d-933d-0ffe6cee2bb5",
  Click_Reconnect_CTA_On_Error_Connecting_Overlay:
    "57c8745e-e7a0-44cd-9193-8fb5a300ee9c",
  Close_social_already_linked_overlay: "ad0405a7-a970-43fd-be0b-830e25524a99",
  Click_CTA_on_social_already_linked_overl:
    "486d573c-7675-4c3c-9209-d4f3f8c348bc",
  Click_Connect_CTA_On_Airdrop_Profile: "4caf1ed9-513a-49a7-b213-cba078b2348a",
  Click_Share_Campaign_CTA_on_Airdrop: "afb0bc0a-7a8c-4d1c-97bf-f42881501a37",
  Click_Get_Started_CTA_on_Airdrop: "e804e6a7-35ce-4c56-ab84-37690d25b499",
  Click_Profile_Icon_On_Airdrop: "99019c2b-145c-4429-bf93-94605c48dcc6",
  Click_Profile_CTA_On_Airdrop: "f56ad96e-25e9-479f-bd6c-070070cd3010",
  Click_Logout_CTA_On_Airdrop: "1490ab2e-5891-4da0-aad5-d6f8f17d40ba",
  View_Error_Connecting_Overlay_On_Airdrop_Profile:
    "98630f84-f195-4a1a-9d52-75197c26ed79",
  Click_Airdrop_Login_CTA: "2af62ab0-bac1-4bf9-ab46-6ae460ff2724",
  Click_Login_CTA_on_Aidrop_Login_Page: "1f035278-6f0c-462f-9ee9-e47ea73afd9f",
  Click_Verify_CTA_on_Aidrop_Login_Page: "19c5c7ec-37e5-4eb2-8a78-a8d6dea88ece",
  Click_Resend_CTA_on_Aidrop_Login_Page: "291269d8-c1a2-4311-9cb1-dd107c4c7af3",
  Click_Login_Medium_on_Airdrop_Login_Page:
    "257c83fd-7f04-41c2-91ff-32a90cb77b22",
  Click_Airdrop_CTA_On_KGeN_Navbar: "690e57cf-2031-49e8-8c9b-b9b557432f7e",
  Click_FAB_CTA_on_Airdrop: "db4443a4-4b87-4f89-a3f8-08df9a4a1cdf",
  View_Onboarding_Story_on_Airdrop: "149ee634-6498-48ba-b347-2a06e4598acd",
  Click_Next_onboarding_story_on_airdrop:
    "6f8e88fd-1534-4751-9324-3a9089ca88db",
  Click_General_redirection_CTA_on_Airdrop:
    "d87b569f-02b3-4a18-b393-127ff2ea4dbb",
};
