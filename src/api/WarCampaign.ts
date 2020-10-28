import { UIFrame } from "../ui";
export const enum CampaignState {
    Invalid = 0,
    Complete = 1,
    InProgress = 2,
    Stalled = 3
}
export interface CampaignChapterInfo {
    name: string;
    description: string;
    rewardQuestID: number;
    orderIndex: number
}
export interface CampaignFailureReason {
    text: string;
    questID: number | undefined;
    mapID: number | undefined
}
export interface CampaignInfo {
    name: string;
    description: string;
    uiTextureKit: string;
    isWarCampaign: boolean
}
export const C_CampaignInfo = {
    GetAvailableCampaigns: (): any => {return {} as any},
    GetCampaignChapterInfo: (campaignChapterID: number): CampaignChapterInfo | undefined => {return {name: '', description: '', rewardQuestID: 0, orderIndex: 0}},
    GetCampaignID: (questID: number): number => {return 0},
    GetCampaignInfo: (campaignID: number): CampaignInfo | undefined => {return {name: '', description: '', uiTextureKit: '', isWarCampaign: false}},
    GetChapterIDs: (campaignID: number): any | undefined => {return {} as any},
    GetCurrentChapterID: (campaignID: number): number | undefined => {return 0},
    GetFailureReason: (campaignID: number): CampaignFailureReason | undefined => {return {text: '', questID: 0, mapID: 0}},
    GetState: (campaignID: number): CampaignState => {return CampaignState.Invalid},
    IsCampaignQuest: (questID: number): boolean => {return false},
    UsesNormalQuestIcons: (campaignID: number): boolean => {return false},
};
