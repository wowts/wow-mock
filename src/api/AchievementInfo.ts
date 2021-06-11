import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";

export const C_AchievementInfo = {
    GetRewardItemID: (achievementID: number): number | undefined => {
        return 0;
    },
    GetSupercedingAchievements: (achievementID: number): LuaArray<number> => {
        return {} as any;
    },
    IsValidAchievement: (achievementId: number): boolean => {
        return false;
    },
    SetPortraitTexture: (textureObject: any): void => {},
};
export type AchievementEarnedEvent = (
    frame: UIFrame,
    e: "ACHIEVEMENT_EARNED",
    achievementID: number,
    alreadyEarned: boolean | undefined
) => void;
export type AchievementPlayerNameEvent = (
    frame: UIFrame,
    e: "ACHIEVEMENT_PLAYER_NAME",
    achievementID: number
) => void;
export type AchievementSearchUpdatedEvent = (
    frame: UIFrame,
    e: "ACHIEVEMENT_SEARCH_UPDATED"
) => void;
export type CriteriaCompleteEvent = (
    frame: UIFrame,
    e: "CRITERIA_COMPLETE",
    criteriaID: number
) => void;
export type CriteriaEarnedEvent = (
    frame: UIFrame,
    e: "CRITERIA_EARNED",
    achievementID: number,
    description: string
) => void;
export type CriteriaUpdateEvent = (
    frame: UIFrame,
    e: "CRITERIA_UPDATE"
) => void;
export type InspectAchievementReadyEvent = (
    frame: UIFrame,
    e: "INSPECT_ACHIEVEMENT_READY",
    guid: string
) => void;
export type ReceivedAchievementListEvent = (
    frame: UIFrame,
    e: "RECEIVED_ACHIEVEMENT_LIST"
) => void;
export type ReceivedAchievementMemberListEvent = (
    frame: UIFrame,
    e: "RECEIVED_ACHIEVEMENT_MEMBER_LIST",
    achievementID: number
) => void;
export type TrackedAchievementListChangedEvent = (
    frame: UIFrame,
    e: "TRACKED_ACHIEVEMENT_LIST_CHANGED",
    achievementID: number | undefined,
    added: boolean | undefined
) => void;
export type TrackedAchievementUpdateEvent = (
    frame: UIFrame,
    e: "TRACKED_ACHIEVEMENT_UPDATE",
    achievementID: number,
    criteriaID: number | undefined,
    elapsed: number | undefined,
    duration: number | undefined
) => void;
