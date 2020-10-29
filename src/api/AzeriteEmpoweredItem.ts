import { ItemLocationMixin } from '../mixins';
import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export const enum AzeritePowerLevel {
    Base = 0,
    Upgraded = 1,
    Downgraded = 2
}
export interface AzeriteEmpoweredItemPowerInfo {
    azeritePowerID: number;
    spellID: number
}
export interface AzeriteEmpoweredItemPowerText {
    name: string;
    description: string
}
export interface AzeriteEmpoweredItemTierInfo {
    azeritePowerIDs: LuaArray<number>;
    unlockLevel: number
}
export interface AzeriteSpecInfo {
    classID: number;
    specID: number
}
export const C_AzeriteEmpoweredItem = {
    CanSelectPower: (azeriteEmpoweredItemLocation: ItemLocationMixin, powerID: number): boolean => {return false},
    CloseAzeriteEmpoweredItemRespec: (): void => {},
    ConfirmAzeriteEmpoweredItemRespec: (azeriteEmpoweredItemLocation: ItemLocationMixin): void => {},
    GetAllTierInfo: (azeriteEmpoweredItemLocation: ItemLocationMixin): LuaArray<AzeriteEmpoweredItemTierInfo> => {return {} as any},
    GetAllTierInfoByItemID: (itemInfo: string, classID: number | undefined): LuaArray<AzeriteEmpoweredItemTierInfo> => {return {} as any},
    GetAzeriteEmpoweredItemRespecCost: (): number => {return 0},
    GetPowerInfo: (powerID: number): AzeriteEmpoweredItemPowerInfo => {return {azeritePowerID: 0, spellID: 0}},
    GetPowerText: (azeriteEmpoweredItemLocation: ItemLocationMixin, powerID: number, level: AzeritePowerLevel): AzeriteEmpoweredItemPowerText => {return {name: '', description: ''}},
    GetSpecsForPower: (powerID: number): LuaArray<AzeriteSpecInfo> => {return {} as any},
    HasAnyUnselectedPowers: (azeriteEmpoweredItemLocation: ItemLocationMixin): boolean => {return false},
    HasBeenViewed: (azeriteEmpoweredItemLocation: ItemLocationMixin): boolean => {return false},
    IsAzeriteEmpoweredItem: (itemLocation: ItemLocationMixin): boolean => {return false},
    IsAzeriteEmpoweredItemByID: (itemInfo: string): boolean => {return false},
    IsAzeritePreviewSourceDisplayable: (itemInfo: string, classID: number | undefined): boolean => {return false},
    IsHeartOfAzerothEquipped: (): boolean => {return false},
    IsPowerAvailableForSpec: (powerID: number, specID: number): boolean => {return false},
    IsPowerSelected: (azeriteEmpoweredItemLocation: ItemLocationMixin, powerID: number): boolean => {return false},
    SelectPower: (azeriteEmpoweredItemLocation: ItemLocationMixin, powerID: number): boolean => {return false},
    SetHasBeenViewed: (azeriteEmpoweredItemLocation: ItemLocationMixin): void => {},
};
export type AzeriteEmpoweredItemEquippedStatusChangedEvent = (frame: UIFrame, e: "AZERITE_EMPOWERED_ITEM_EQUIPPED_STATUS_CHANGED", isHeartEquipped: boolean) => void
export type AzeriteEmpoweredItemSelectionUpdatedEvent = (frame: UIFrame, e: "AZERITE_EMPOWERED_ITEM_SELECTION_UPDATED", azeriteEmpoweredItemLocation: ItemLocationMixin) => void
export type RespecAzeriteEmpoweredItemClosedEvent = (frame: UIFrame, e: "RESPEC_AZERITE_EMPOWERED_ITEM_CLOSED") => void
export type RespecAzeriteEmpoweredItemOpenedEvent = (frame: UIFrame, e: "RESPEC_AZERITE_EMPOWERED_ITEM_OPENED") => void