import {RelativeContentDifficulty} from "./common";
import { UIFrame } from "../ui";

export const C_PlayerInfo = {
    CanPlayerEnterChromieTime: (): boolean => {return false},
    CanPlayerUseAreaLoot: (): boolean => {return false},
    CanPlayerUseMountEquipment: (): [canUseMountEquipment: boolean, failureReason: string] => {return [false, '']},
    GetContentDifficultyCreatureForPlayer: (unitToken: string): RelativeContentDifficulty => {return RelativeContentDifficulty.Trivial},
    GetContentDifficultyQuestForPlayer: (questID: number): RelativeContentDifficulty => {return RelativeContentDifficulty.Trivial},
    IsPlayerEligibleForNPE: (): [isEligible: boolean, failureReason: string] => {return [false, '']},
    IsPlayerEligibleForNPEv2: (): [isEligible: boolean, failureReason: string] => {return [false, '']},
    IsPlayerInChromieTime: (): boolean => {return false},
    IsPlayerNPERestricted: (): boolean => {return false},
};
