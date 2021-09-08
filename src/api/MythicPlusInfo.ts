import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export interface MapSeasonBestInfo {
    durationSec: number;
    level: number;
    completionDate: MythicPlusDate;
    affixIDs: LuaArray<number>;
    members: LuaArray<MythicPlusMember>;
    dungeonScore: number;
}
export interface MythicPlusAffixScoreInfo {
    name: string;
    score: number;
    level: number;
    durationSec: number;
    overTime: boolean;
}
export interface MythicPlusDate {
    year: number;
    month: number;
    day: number;
    hour: number;
    minute: number;
}
export interface MythicPlusKeystoneAffix {
    id: number;
    seasonID: number;
}
export interface MythicPlusMember {
    name: string | undefined;
    specID: number;
    classID: number;
}
export interface MythicPlusRunInfo {
    mapChallengeModeID: number;
    level: number;
    thisWeek: boolean;
    completed: boolean;
    runScore: number;
}
export const C_MythicPlus = {
    GetCurrentAffixes: (): LuaArray<MythicPlusKeystoneAffix> => {
        return {} as any;
    },
    GetCurrentSeason: (): number => {
        return 0;
    },
    GetLastWeeklyBestInformation: (): [
        challengeMapId: number,
        level: number
    ] => {
        return [0, 0];
    },
    GetOwnedKeystoneChallengeMapID: (): number => {
        return 0;
    },
    GetOwnedKeystoneLevel: (): number => {
        return 0;
    },
    GetRewardLevelForDifficultyLevel: (
        difficultyLevel: number
    ): [weeklyRewardLevel: number, endOfRunRewardLevel: number] => {
        return [0, 0];
    },
    GetRewardLevelFromKeystoneLevel: (
        keystoneLevel: number
    ): number | undefined => {
        return 0;
    },
    GetRunHistory: (
        includePreviousWeeks: boolean,
        includeIncompleteRuns: boolean
    ): LuaArray<MythicPlusRunInfo> => {
        return {} as any;
    },
    GetSeasonBestAffixScoreInfoForMap: (
        mapChallengeModeID: number
    ): [
        affixScores: LuaArray<MythicPlusAffixScoreInfo>,
        bestOverAllScore: number
    ] => {
        return [{} as any, 0];
    },
    GetSeasonBestForMap: (
        mapChallengeModeID: number
    ): [
        intimeInfo: MapSeasonBestInfo | undefined,
        overtimeInfo: MapSeasonBestInfo | undefined
    ] => {
        return [
            {
                durationSec: 0,
                level: 0,
                completionDate: {
                    year: 0,
                    month: 0,
                    day: 0,
                    hour: 0,
                    minute: 0,
                },
                affixIDs: {} as any,
                members: {} as any,
                dungeonScore: 0,
            },
            {
                durationSec: 0,
                level: 0,
                completionDate: {
                    year: 0,
                    month: 0,
                    day: 0,
                    hour: 0,
                    minute: 0,
                },
                affixIDs: {} as any,
                members: {} as any,
                dungeonScore: 0,
            },
        ];
    },
    GetWeeklyBestForMap: (
        mapChallengeModeID: number
    ): [
        durationSec: number,
        level: number,
        completionDate: MythicPlusDate,
        affixIDs: LuaArray<number>,
        members: LuaArray<MythicPlusMember>,
        dungeonScore: number
    ] => {
        return [
            0,
            0,
            { year: 0, month: 0, day: 0, hour: 0, minute: 0 },
            {} as any,
            {} as any,
            0,
        ];
    },
    GetWeeklyChestRewardLevel: (): [
        currentWeekBestLevel: number,
        weeklyRewardLevel: number,
        nextDifficultyWeeklyRewardLevel: number,
        nextBestLevel: number
    ] => {
        return [0, 0, 0, 0];
    },
    IsMythicPlusActive: (): boolean => {
        return false;
    },
    IsWeeklyRewardAvailable: (): boolean => {
        return false;
    },
    RequestCurrentAffixes: (): void => {},
    RequestMapInfo: (): void => {},
    RequestRewards: (): void => {},
};
export type MythicPlusCurrentAffixUpdateEvent = (
    frame: UIFrame,
    e: "MYTHIC_PLUS_CURRENT_AFFIX_UPDATE"
) => void;
export type MythicPlusNewWeeklyRecordEvent = (
    frame: UIFrame,
    e: "MYTHIC_PLUS_NEW_WEEKLY_RECORD",
    mapChallengeModeID: number,
    completionMilliseconds: number,
    level: number
) => void;
