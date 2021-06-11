import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export interface PvpTalentSlotInfo {
    enabled: boolean;
    level: number;
    selectedTalentID: number | undefined;
    availableTalentIDs: LuaArray<number>;
}
export const C_SpecializationInfo = {
    CanPlayerUsePVPTalentUI: (): [canUse: boolean, failureReason: string] => {
        return [false, ""];
    },
    CanPlayerUseTalentSpecUI: (): [canUse: boolean, failureReason: string] => {
        return [false, ""];
    },
    CanPlayerUseTalentUI: (): [canUse: boolean, failureReason: string] => {
        return [false, ""];
    },
    GetAllSelectedPvpTalentIDs: (): LuaArray<number> => {
        return {} as any;
    },
    GetInspectSelectedPvpTalent: (
        inspectedUnit: string,
        talentIndex: number
    ): number | undefined => {
        return 0;
    },
    GetPvpTalentAlertStatus: (): [
        hasUnspentSlot: boolean,
        hasNewTalent: boolean
    ] => {
        return [false, false];
    },
    GetPvpTalentSlotInfo: (
        talentIndex: number
    ): PvpTalentSlotInfo | undefined => {
        return {
            enabled: false,
            level: 0,
            selectedTalentID: 0,
            availableTalentIDs: {} as any,
        };
    },
    GetPvpTalentSlotUnlockLevel: (talentIndex: number): number | undefined => {
        return 0;
    },
    GetPvpTalentUnlockLevel: (talentID: number): number | undefined => {
        return 0;
    },
    GetSpecIDs: (specSetID: number): LuaArray<number> => {
        return {} as any;
    },
    GetSpellsDisplay: (specializationID: number): LuaArray<number> => {
        return {} as any;
    },
    IsInitialized: (): boolean => {
        return false;
    },
    IsPvpTalentLocked: (talentID: number): boolean => {
        return false;
    },
    MatchesCurrentSpecSet: (specSetID: number): boolean => {
        return false;
    },
    SetPvpTalentLocked: (talentID: number, locked: boolean): void => {},
};
export type ActiveTalentGroupChangedEvent = (
    frame: UIFrame,
    e: "ACTIVE_TALENT_GROUP_CHANGED",
    curr: number,
    prev: number
) => void;
export type ConfirmTalentWipeEvent = (
    frame: UIFrame,
    e: "CONFIRM_TALENT_WIPE",
    cost: number,
    respecType: number
) => void;
export type PetSpecializationChangedEvent = (
    frame: UIFrame,
    e: "PET_SPECIALIZATION_CHANGED"
) => void;
export type PlayerLearnPvpTalentFailedEvent = (
    frame: UIFrame,
    e: "PLAYER_LEARN_PVP_TALENT_FAILED"
) => void;
export type PlayerLearnTalentFailedEvent = (
    frame: UIFrame,
    e: "PLAYER_LEARN_TALENT_FAILED"
) => void;
export type PlayerPvpTalentUpdateEvent = (
    frame: UIFrame,
    e: "PLAYER_PVP_TALENT_UPDATE"
) => void;
export type PlayerTalentUpdateEvent = (
    frame: UIFrame,
    e: "PLAYER_TALENT_UPDATE"
) => void;
export type SpecInvoluntarilyChangedEvent = (
    frame: UIFrame,
    e: "SPEC_INVOLUNTARILY_CHANGED",
    isPet: boolean
) => void;
export type TalentsInvoluntarilyResetEvent = (
    frame: UIFrame,
    e: "TALENTS_INVOLUNTARILY_RESET",
    isPetTalents: boolean
) => void;
