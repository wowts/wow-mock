import { RelativeContentDifficulty } from "./common";
import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export interface MythicPlusRatingMapSummary {
    challengeModeID: number;
    mapScore: number;
    bestRunLevel: number;
    bestRunDurationMS: number;
    finishedSuccess: boolean;
}
export interface MythicPlusRatingSummary {
    currentSeasonScore: number;
    runs: LuaArray<MythicPlusRatingMapSummary>;
}
export const C_PlayerInfo = {
    CanPlayerEnterChromieTime: (): boolean => {
        return false;
    },
    CanPlayerUseAreaLoot: (): boolean => {
        return false;
    },
    CanPlayerUseMountEquipment: (): [
        canUseMountEquipment: boolean,
        failureReason: string
    ] => {
        return [false, ""];
    },
    GetAlternateFormInfo: (): [
        hasAlternateForm: boolean,
        inAlternateForm: boolean
    ] => {
        return [false, false];
    },
    GetContentDifficultyCreatureForPlayer: (
        unitToken: string
    ): RelativeContentDifficulty => {
        return RelativeContentDifficulty.Trivial;
    },
    GetContentDifficultyQuestForPlayer: (
        questID: number
    ): RelativeContentDifficulty => {
        return RelativeContentDifficulty.Trivial;
    },
    GetInstancesUnlockedAtLevel: (
        level: number,
        isRaid: boolean
    ): LuaArray<number> => {
        return {} as any;
    },
    GetPlayerMythicPlusRatingSummary: (
        playerToken: string
    ): MythicPlusRatingSummary => {
        return { currentSeasonScore: 0, runs: {} as any };
    },
    IsPlayerEligibleForNPE: (): [
        isEligible: boolean,
        failureReason: string
    ] => {
        return [false, ""];
    },
    IsPlayerEligibleForNPEv2: (): [
        isEligible: boolean,
        failureReason: string
    ] => {
        return [false, ""];
    },
    IsPlayerInChromieTime: (): boolean => {
        return false;
    },
    IsPlayerNPERestricted: (): boolean => {
        return false;
    },
};
