import { WeeklyRewardChestThresholdType, CachedRewardType } from '../mixins';
import { UIFrame } from "../ui";
export const enum ConquestProgressBarDisplayType {
    FirstChest = 0,
    AdditionalChest = 1,
    Seasonal = 2
}
export interface ConquestWeeklyProgress {
    progress: number;
    maxProgress: number;
    displayType: ConquestProgressBarDisplayType;
    unlocksCompleted: number;
    maxUnlocks: number;
    sampleItemHyperlink: string
}
export interface WeeklyRewardActivityInfo {
    type: WeeklyRewardChestThresholdType;
    index: number;
    threshold: number;
    progress: number;
    id: number;
    level: number;
    rewards: any
}
export interface WeeklyRewardActivityRewardInfo {
    type: CachedRewardType;
    id: number;
    quantity: number;
    itemDBID: string | undefined
}
export const C_WeeklyRewards = {
    CanClaimRewards: (): boolean => {return false},
    ClaimReward: (id: number): void => {},
    CloseInteraction: (): void => {},
    GetActivities: (type: WeeklyRewardChestThresholdType | undefined): any => {return {} as any},
    GetConquestWeeklyProgress: (): ConquestWeeklyProgress => {return {progress: 0, maxProgress: 0, displayType: ConquestProgressBarDisplayType.FirstChest, unlocksCompleted: 0, maxUnlocks: 0, sampleItemHyperlink: ''}},
    GetExampleRewardItemHyperlinks: (id: number): [hyperlink: string, upgradeHyperlink: string] => {return ['', '']},
    GetItemHyperlink: (itemDBID: string): string => {return ''},
    HasAvailableRewards: (): boolean => {return false},
    HasGeneratedRewards: (): boolean => {return false},
};
export type WeeklyRewardsHideEvent = (frame: UIFrame, e: "WEEKLY_REWARDS_HIDE") => void
export type WeeklyRewardsItemChangedEvent = (frame: UIFrame, e: "WEEKLY_REWARDS_ITEM_CHANGED") => void
export type WeeklyRewardsShowEvent = (frame: UIFrame, e: "WEEKLY_REWARDS_SHOW") => void
export type WeeklyRewardsUpdateEvent = (frame: UIFrame, e: "WEEKLY_REWARDS_UPDATE") => void