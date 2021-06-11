import { InventoryType, ItemQuality } from "./common";
import { ItemLocationMixin } from "../mixins";
import { UIFrame } from "../ui";

export const C_Item = {
    CanScrapItem: (itemLoc: ItemLocationMixin): boolean => {
        return false;
    },
    CanViewItemPowers: (itemLoc: ItemLocationMixin): boolean => {
        return false;
    },
    DoesItemExist: (emptiableItemLocation: ItemLocationMixin): boolean => {
        return false;
    },
    DoesItemExistByID: (itemInfo: string): boolean => {
        return false;
    },
    DoesItemMatchBonusTreeReplacement: (
        itemLoc: ItemLocationMixin
    ): boolean => {
        return false;
    },
    GetCurrentItemLevel: (
        itemLocation: ItemLocationMixin
    ): number | undefined => {
        return 0;
    },
    GetItemGUID: (itemLocation: ItemLocationMixin): string => {
        return "";
    },
    GetItemID: (itemLocation: ItemLocationMixin): number => {
        return 0;
    },
    GetItemIcon: (itemLocation: ItemLocationMixin): number | undefined => {
        return 0;
    },
    GetItemIconByID: (itemInfo: string): number | undefined => {
        return 0;
    },
    GetItemInventoryType: (
        itemLocation: ItemLocationMixin
    ): InventoryType | undefined => {
        return InventoryType.IndexNonEquipType;
    },
    GetItemInventoryTypeByID: (itemInfo: string): InventoryType | undefined => {
        return InventoryType.IndexNonEquipType;
    },
    GetItemLink: (itemLocation: ItemLocationMixin): string | undefined => {
        return "";
    },
    GetItemName: (itemLocation: ItemLocationMixin): string | undefined => {
        return "";
    },
    GetItemNameByID: (itemInfo: string): string | undefined => {
        return "";
    },
    GetItemQuality: (
        itemLocation: ItemLocationMixin
    ): ItemQuality | undefined => {
        return ItemQuality.Poor;
    },
    GetItemQualityByID: (itemInfo: string): ItemQuality | undefined => {
        return ItemQuality.Poor;
    },
    GetStackCount: (itemLocation: ItemLocationMixin): number => {
        return 0;
    },
    IsBound: (itemLocation: ItemLocationMixin): boolean => {
        return false;
    },
    IsItemConduit: (itemLoc: ItemLocationMixin): boolean => {
        return false;
    },
    IsItemCorrupted: (itemLoc: ItemLocationMixin): boolean => {
        return false;
    },
    IsItemCorruptionRelated: (itemLoc: ItemLocationMixin): boolean => {
        return false;
    },
    IsItemCorruptionResistant: (itemLoc: ItemLocationMixin): boolean => {
        return false;
    },
    IsItemDataCached: (itemLocation: ItemLocationMixin): boolean => {
        return false;
    },
    IsItemDataCachedByID: (itemInfo: string): boolean => {
        return false;
    },
    IsItemKeystoneByID: (itemInfo: string): boolean => {
        return false;
    },
    IsLocked: (itemLocation: ItemLocationMixin): boolean => {
        return false;
    },
    LockItem: (itemLocation: ItemLocationMixin): void => {},
    LockItemByGUID: (itemGUID: string): void => {},
    RequestLoadItemData: (itemLocation: ItemLocationMixin): void => {},
    RequestLoadItemDataByID: (itemInfo: string): void => {},
    UnlockItem: (itemLocation: ItemLocationMixin): void => {},
    UnlockItemByGUID: (itemGUID: string): void => {},
};
export type ActionWillBindItemEvent = (
    frame: UIFrame,
    e: "ACTION_WILL_BIND_ITEM"
) => void;
export type BindEnchantEvent = (frame: UIFrame, e: "BIND_ENCHANT") => void;
export type CharacterItemFixupNotificationEvent = (
    frame: UIFrame,
    e: "CHARACTER_ITEM_FIXUP_NOTIFICATION",
    fixupVersion: number
) => void;
export type ConfirmBeforeUseEvent = (
    frame: UIFrame,
    e: "CONFIRM_BEFORE_USE"
) => void;
export type DeleteItemConfirmEvent = (
    frame: UIFrame,
    e: "DELETE_ITEM_CONFIRM",
    itemName: string,
    qualityID: number,
    bonding: number,
    questWarn: number
) => void;
export type EndBoundTradeableEvent = (
    frame: UIFrame,
    e: "END_BOUND_TRADEABLE",
    reason: string
) => void;
export type GetItemInfoReceivedEvent = (
    frame: UIFrame,
    e: "GET_ITEM_INFO_RECEIVED",
    itemID: number,
    success: boolean
) => void;
export type ItemChangedEvent = (
    frame: UIFrame,
    e: "ITEM_CHANGED",
    previousHyperlink: string,
    newHyperlink: string
) => void;
export type ItemDataLoadResultEvent = (
    frame: UIFrame,
    e: "ITEM_DATA_LOAD_RESULT",
    itemID: number,
    success: boolean
) => void;
export type MerchantConfirmTradeTimerRemovalEvent = (
    frame: UIFrame,
    e: "MERCHANT_CONFIRM_TRADE_TIMER_REMOVAL",
    itemLink: string
) => void;
export type ReplaceEnchantEvent = (
    frame: UIFrame,
    e: "REPLACE_ENCHANT",
    existingStr: string,
    replacementStr: string
) => void;
export type TradeReplaceEnchantEvent = (
    frame: UIFrame,
    e: "TRADE_REPLACE_ENCHANT",
    existing: string,
    replacement: string
) => void;
export type UseBindConfirmEvent = (
    frame: UIFrame,
    e: "USE_BIND_CONFIRM"
) => void;
export type UseNoRefundConfirmEvent = (
    frame: UIFrame,
    e: "USE_NO_REFUND_CONFIRM"
) => void;
