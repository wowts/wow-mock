import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export const enum RafRecruitActivityState {
    Incomplete = 0,
    Complete = 1,
    RewardClaimed = 2,
}
export const enum RafRecruitSubStatus {
    Trial = 0,
    Active = 1,
    Inactive = 2,
}
export const enum RafRewardType {
    Pet = 0,
    Mount = 1,
    Appearance = 2,
    Title = 3,
    GameTime = 4,
    AppearanceSet = 5,
    Illusion = 6,
    Invalid = 7,
}
export interface RafAppearanceInfo {
    appearanceID: number;
}
export interface RafAppearanceSetInfo {
    setID: number;
    setName: string;
    appearanceIDs: LuaArray<number>;
}
export interface RafIllusionInfo {
    spellItemEnchantmentID: number;
}
export interface RafInfo {
    lifetimeMonths: number;
    spentMonths: number;
    availableMonths: number;
    claimInProgress: boolean;
    rewards: LuaArray<RafReward>;
    nextReward: RafReward | undefined;
    recruitmentInfo: RafRecruitmentinfo | undefined;
    recruits: LuaArray<RafRecruit>;
}
export interface RafMountInfo {
    spellID: number;
    mountID: number;
}
export interface RafPetInfo {
    creatureID: number;
    speciesID: number;
    displayID: number;
    speciesName: string;
    description: string;
}
export interface RafRecruit {
    bnetAccountID: number;
    wowAccountGUID: string;
    battleTag: string;
    monthsRemaining: number;
    subStatus: RafRecruitSubStatus;
    acceptanceID: string;
    activities: LuaArray<RafRecruitActivity>;
}
export interface RafRecruitActivity {
    activityID: number;
    rewardQuestID: number;
    state: RafRecruitActivityState;
}
export interface RafRecruitmentinfo {
    recruitmentCode: string;
    recruitmentURL: string;
    expireTime: number;
    remainingTimeSeconds: number;
    totalUses: number;
    remainingUses: number;
    sourceRealm: string;
    sourceFaction: string;
}
export interface RafReward {
    rewardID: number;
    itemID: number;
    rewardType: RafRewardType;
    petInfo: RafPetInfo | undefined;
    mountInfo: RafMountInfo | undefined;
    appearanceInfo: RafAppearanceInfo | undefined;
    titleInfo: RafTitleInfo | undefined;
    appearanceSetInfo: RafAppearanceSetInfo | undefined;
    illusionInfo: RafIllusionInfo | undefined;
    canClaim: boolean;
    claimed: boolean;
    repeatable: boolean;
    repeatableClaimCount: number;
    monthsRequired: number;
    monthCost: number;
    availableInMonths: number;
    iconID: number;
}
export interface RafSystemInfo {
    maxRecruits: number;
    maxRecruitMonths: number;
    maxRecruitmentUses: number;
    daysInCycle: number;
}
export interface RafTitleInfo {
    titleMaskID: number;
}
export const C_RecruitAFriend = {
    ClaimActivityReward: (
        activityID: number,
        acceptanceID: string
    ): boolean => {
        return false;
    },
    ClaimNextReward: (): boolean => {
        return false;
    },
    GenerateRecruitmentLink: (): boolean => {
        return false;
    },
    GetRAFInfo: (): RafInfo => {
        return {
            lifetimeMonths: 0,
            spentMonths: 0,
            availableMonths: 0,
            claimInProgress: false,
            rewards: {} as any,
            nextReward: {
                rewardID: 0,
                itemID: 0,
                rewardType: RafRewardType.Pet,
                petInfo: {
                    creatureID: 0,
                    speciesID: 0,
                    displayID: 0,
                    speciesName: "",
                    description: "",
                },
                mountInfo: { spellID: 0, mountID: 0 },
                appearanceInfo: { appearanceID: 0 },
                titleInfo: { titleMaskID: 0 },
                appearanceSetInfo: {
                    setID: 0,
                    setName: "",
                    appearanceIDs: {} as any,
                },
                illusionInfo: { spellItemEnchantmentID: 0 },
                canClaim: false,
                claimed: false,
                repeatable: false,
                repeatableClaimCount: 0,
                monthsRequired: 0,
                monthCost: 0,
                availableInMonths: 0,
                iconID: 0,
            },
            recruitmentInfo: {
                recruitmentCode: "",
                recruitmentURL: "",
                expireTime: 0,
                remainingTimeSeconds: 0,
                totalUses: 0,
                remainingUses: 0,
                sourceRealm: "",
                sourceFaction: "",
            },
            recruits: {} as any,
        };
    },
    GetRAFSystemInfo: (): RafSystemInfo => {
        return {
            maxRecruits: 0,
            maxRecruitMonths: 0,
            maxRecruitmentUses: 0,
            daysInCycle: 0,
        };
    },
    GetRecruitActivityRequirementsText: (
        activityID: number,
        acceptanceID: string
    ): LuaArray<string> => {
        return {} as any;
    },
    GetRecruitInfo: (): [active: boolean, faction: number] => {
        return [false, 0];
    },
    IsEnabled: (): boolean => {
        return false;
    },
    IsRecruitingEnabled: (): boolean => {
        return false;
    },
    RemoveRAFRecruit: (wowAccountGUID: string): boolean => {
        return false;
    },
    RequestUpdatedRecruitmentInfo: (): boolean => {
        return false;
    },
};
export type RafInfoUpdatedEvent = (
    frame: UIFrame,
    e: "RAF_INFO_UPDATED",
    info: RafInfo
) => void;
export type RafRecruitingEnabledStatusEvent = (
    frame: UIFrame,
    e: "RAF_RECRUITING_ENABLED_STATUS",
    enabled: boolean
) => void;
export type RafSystemEnabledStatusEvent = (
    frame: UIFrame,
    e: "RAF_SYSTEM_ENABLED_STATUS",
    enabled: boolean
) => void;
export type RafSystemInfoUpdatedEvent = (
    frame: UIFrame,
    e: "RAF_SYSTEM_INFO_UPDATED",
    systemInfo: RafSystemInfo
) => void;
