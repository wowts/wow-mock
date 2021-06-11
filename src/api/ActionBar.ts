import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";

export const C_ActionBar = {
    FindFlyoutActionButtons: (flyoutID: number): LuaArray<number> => {
        return {} as any;
    },
    FindPetActionButtons: (petActionID: number): LuaArray<number> => {
        return {} as any;
    },
    FindSpellActionButtons: (spellID: number): LuaArray<number> => {
        return {} as any;
    },
    GetBonusBarIndexForSlot: (slotID: number): number | undefined => {
        return 0;
    },
    GetPetActionPetBarIndices: (petActionID: number): LuaArray<number> => {
        return {} as any;
    },
    HasFlyoutActionButtons: (flyoutID: number): boolean => {
        return false;
    },
    HasPetActionButtons: (petActionID: number): boolean => {
        return false;
    },
    HasPetActionPetBarIndices: (petActionID: number): boolean => {
        return false;
    },
    HasSpellActionButtons: (spellID: number): boolean => {
        return false;
    },
    IsAutoCastPetAction: (slotID: number): boolean => {
        return false;
    },
    IsEnabledAutoCastPetAction: (slotID: number): boolean => {
        return false;
    },
    IsHarmfulAction: (actionID: number, useNeutral: boolean): boolean => {
        return false;
    },
    IsHelpfulAction: (actionID: number, useNeutral: boolean): boolean => {
        return false;
    },
    IsOnBarOrSpecialBar: (spellID: number): boolean => {
        return false;
    },
    PutActionInSlot: (slotID: number): void => {},
    ShouldOverrideBarShowHealthBar: (): boolean => {
        return false;
    },
    ShouldOverrideBarShowManaBar: (): boolean => {
        return false;
    },
    ToggleAutoCastPetAction: (slotID: number): void => {},
};
export type ActionbarHidegridEvent = (
    frame: UIFrame,
    e: "ACTIONBAR_HIDEGRID"
) => void;
export type ActionbarPageChangedEvent = (
    frame: UIFrame,
    e: "ACTIONBAR_PAGE_CHANGED"
) => void;
export type ActionbarShowBottomleftEvent = (
    frame: UIFrame,
    e: "ACTIONBAR_SHOW_BOTTOMLEFT"
) => void;
export type ActionbarShowgridEvent = (
    frame: UIFrame,
    e: "ACTIONBAR_SHOWGRID"
) => void;
export type ActionbarSlotChangedEvent = (
    frame: UIFrame,
    e: "ACTIONBAR_SLOT_CHANGED",
    slot: number
) => void;
export type ActionbarUpdateCooldownEvent = (
    frame: UIFrame,
    e: "ACTIONBAR_UPDATE_COOLDOWN"
) => void;
export type ActionbarUpdateStateEvent = (
    frame: UIFrame,
    e: "ACTIONBAR_UPDATE_STATE"
) => void;
export type ActionbarUpdateUsableEvent = (
    frame: UIFrame,
    e: "ACTIONBAR_UPDATE_USABLE"
) => void;
export type PetBarUpdateEvent = (frame: UIFrame, e: "PET_BAR_UPDATE") => void;
export type UpdateBonusActionbarEvent = (
    frame: UIFrame,
    e: "UPDATE_BONUS_ACTIONBAR"
) => void;
export type UpdateExtraActionbarEvent = (
    frame: UIFrame,
    e: "UPDATE_EXTRA_ACTIONBAR"
) => void;
export type UpdateMultiCastActionbarEvent = (
    frame: UIFrame,
    e: "UPDATE_MULTI_CAST_ACTIONBAR"
) => void;
export type UpdateOverrideActionbarEvent = (
    frame: UIFrame,
    e: "UPDATE_OVERRIDE_ACTIONBAR"
) => void;
