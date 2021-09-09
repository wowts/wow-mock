import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export const enum ConquestProgressBarDisplayType {
    FirstChest = 0,
    AdditionalChest = 1,
    Seasonal = 2,
}
export interface ConquestWeeklyProgress {
    progress: number;
    maxProgress: number;
    displayType: ConquestProgressBarDisplayType;
    unlocksCompleted: number;
    maxUnlocks: number;
    sampleItemHyperlink: string;
}
export interface WeeklyRewardActivityEncounterInfo {
    encounterID: number;
    bestDifficulty: number;
    uiOrder: number;
    instanceID: number;
}
export interface WeeklyRewardActivityInfo {
    type: number; // Enum.WeeklyRewardChestThresholdType
    index: number;
    threshold: number;
    progress: number;
    id: number;
    level: number;
    claimID: number | undefined;
    rewards: LuaArray<WeeklyRewardActivityRewardInfo>;
}
export interface WeeklyRewardActivityRewardInfo {
    type: number; // Enum.CachedRewardType
    id: number;
    quantity: number;
    itemDBID: string | undefined;
}
export const C_WeeklyRewards = {
    AreRewardsForCurrentRewardPeriod: (): boolean => {
        return false;
    },
    CanClaimRewards: (): boolean => {
        return false;
    },
    ClaimReward: (id: number): void => {},
    CloseInteraction: (): void => {},
    GetActivities: (
        type: number | undefined // Enum.WeeklyRewardChestThresholdType | undefined
    ): LuaArray<WeeklyRewardActivityInfo> => {
        return {} as any;
    },
    GetActivityEncounterInfo: (
        type: number, // Enum.WeeklyRewardChestThresholdType
        index: number
    ): LuaArray<WeeklyRewardActivityEncounterInfo> => {
        return {} as any;
    },
    GetConquestWeeklyProgress: (): ConquestWeeklyProgress => {
        return {
            progress: 0,
            maxProgress: 0,
            displayType: ConquestProgressBarDisplayType.FirstChest,
            unlocksCompleted: 0,
            maxUnlocks: 0,
            sampleItemHyperlink: "",
        };
    },
    GetExampleRewardItemHyperlinks: (
        id: number
    ): [hyperlink: string, upgradeHyperlink: string] => {
        return ["", ""];
    },
    GetItemHyperlink: (itemDBID: string): string => {
        return "";
    },
    GetNextMythicPlusIncrease: (
        mythicPlusLevel: number
    ): [
        hasSeasonData: boolean,
        nextMythicPlusLevel: number | undefined,
        itemLevel: number | undefined
    ] => {
        return [false, 0, 0];
    },
    HasAvailableRewards: (): boolean => {
        return false;
    },
    HasGeneratedRewards: (): boolean => {
        return false;
    },
    HasInteraction: (): boolean => {
        return false;
    },
};
export type WeeklyRewardsHideEvent = (
    frame: UIFrame,
    e: "WEEKLY_REWARDS_HIDE"
) => void;
export type WeeklyRewardsItemChangedEvent = (
    frame: UIFrame,
    e: "WEEKLY_REWARDS_ITEM_CHANGED"
) => void;
export type WeeklyRewardsShowEvent = (
    frame: UIFrame,
    e: "WEEKLY_REWARDS_SHOW"
) => void;
export type WeeklyRewardsUpdateEvent = (
    frame: UIFrame,
    e: "WEEKLY_REWARDS_UPDATE"
) => void;
