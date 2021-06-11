import { ItemLocationMixin } from "../mixins";
import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export interface UnlockedAzeriteEmpoweredItems {
    unlockedItem: ItemLocationMixin;
    tierIndex: number;
}
export const C_AzeriteItem = {
    FindActiveAzeriteItem: (): ItemLocationMixin => {
        return {} as any;
    },
    GetAzeriteItemXPInfo: (
        azeriteItemLocation: ItemLocationMixin
    ): [xp: number, totalLevelXP: number] => {
        return [0, 0];
    },
    GetPowerLevel: (azeriteItemLocation: ItemLocationMixin): number => {
        return 0;
    },
    GetUnlimitedPowerLevel: (
        azeriteItemLocation: ItemLocationMixin
    ): number => {
        return 0;
    },
    HasActiveAzeriteItem: (): boolean => {
        return false;
    },
    IsAzeriteItem: (itemLocation: ItemLocationMixin): boolean => {
        return false;
    },
    IsAzeriteItemAtMaxLevel: (): boolean => {
        return false;
    },
    IsAzeriteItemByID: (itemInfo: string): boolean => {
        return false;
    },
    IsAzeriteItemEnabled: (azeriteItemLocation: ItemLocationMixin): boolean => {
        return false;
    },
};
export type AzeriteItemEnabledStateChangedEvent = (
    frame: UIFrame,
    e: "AZERITE_ITEM_ENABLED_STATE_CHANGED",
    enabled: boolean
) => void;
export type AzeriteItemExperienceChangedEvent = (
    frame: UIFrame,
    e: "AZERITE_ITEM_EXPERIENCE_CHANGED",
    azeriteItemLocation: ItemLocationMixin,
    oldExperienceAmount: number,
    newExperienceAmount: number
) => void;
export type AzeriteItemPowerLevelChangedEvent = (
    frame: UIFrame,
    e: "AZERITE_ITEM_POWER_LEVEL_CHANGED",
    azeriteItemLocation: ItemLocationMixin,
    oldPowerLevel: number,
    newPowerLevel: number,
    unlockedEmpoweredItemsInfo: LuaArray<UnlockedAzeriteEmpoweredItems>
) => void;
