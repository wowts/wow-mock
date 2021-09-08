import { ItemLocationMixin } from "../mixins";
import { UIFrame } from "../ui";

export const C_ItemUpgrade = {
    CanUpgradeItem: (baseItem: ItemLocationMixin): boolean => {
        return false;
    },
    GetItemHyperlink: (): string => {
        return "";
    },
    GetItemLevelIncrement: (numUpgradeLevels: number): number => {
        return 0;
    },
    GetItemUpgradeEffect: (
        effectIndex: number,
        numUpgradeLevels: number | undefined
    ): [outBaseEffect: string, outUpgradedEffect: string] => {
        return ["", ""];
    },
    GetNumItemUpgradeEffects: (): number => {
        return 0;
    },
};
export type ItemUpgradeMasterClosedEvent = (
    frame: UIFrame,
    e: "ITEM_UPGRADE_MASTER_CLOSED"
) => void;
export type ItemUpgradeMasterOpenedEvent = (
    frame: UIFrame,
    e: "ITEM_UPGRADE_MASTER_OPENED"
) => void;
export type ItemUpgradeMasterSetItemEvent = (
    frame: UIFrame,
    e: "ITEM_UPGRADE_MASTER_SET_ITEM"
) => void;
export type ItemUpgradeMasterUpdateEvent = (
    frame: UIFrame,
    e: "ITEM_UPGRADE_MASTER_UPDATE"
) => void;
