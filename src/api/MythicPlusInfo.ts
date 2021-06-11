import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export interface MapSeasonBestInfo {
    durationSec: number;
    level: number;
    completionDate: MythicPlusDate;
    affixIDs: LuaArray<number>;
    members: LuaArray<MythicPlusMember>;
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
        members: LuaArray<MythicPlusMember>
    ] => {
        return [
            0,
            0,
            { year: 0, month: 0, day: 0, hour: 0, minute: 0 },
            {} as any,
            {} as any,
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
export type MythicPlusNewSeasonRecordEvent = (
    frame: UIFrame,
    e: "MYTHIC_PLUS_NEW_SEASON_RECORD",
    mapChallengeModeID: number,
    completionMilliseconds: number,
    level: number
) => void;
export type MythicPlusNewWeeklyRecordEvent = (
    frame: UIFrame,
    e: "MYTHIC_PLUS_NEW_WEEKLY_RECORD",
    mapChallengeModeID: number,
    completionMilliseconds: number,
    level: number
) => void;
