import { UIFrame } from "../ui";

export const C_Container = {};
export type BagClosedEvent = (
    frame: UIFrame,
    e: "BAG_CLOSED",
    bagID: number
) => void;
export type BagNewItemsUpdatedEvent = (
    frame: UIFrame,
    e: "BAG_NEW_ITEMS_UPDATED"
) => void;
export type BagOpenEvent = (
    frame: UIFrame,
    e: "BAG_OPEN",
    bagID: number
) => void;
export type BagOverflowWithFullInventoryEvent = (
    frame: UIFrame,
    e: "BAG_OVERFLOW_WITH_FULL_INVENTORY"
) => void;
export type BagSlotFlagsUpdatedEvent = (
    frame: UIFrame,
    e: "BAG_SLOT_FLAGS_UPDATED",
    slot: number
) => void;
export type BagUpdateEvent = (
    frame: UIFrame,
    e: "BAG_UPDATE",
    bagID: number
) => void;
export type BagUpdateCooldownEvent = (
    frame: UIFrame,
    e: "BAG_UPDATE_COOLDOWN"
) => void;
export type BagUpdateDelayedEvent = (
    frame: UIFrame,
    e: "BAG_UPDATE_DELAYED"
) => void;
export type EquipBindRefundableConfirmEvent = (
    frame: UIFrame,
    e: "EQUIP_BIND_REFUNDABLE_CONFIRM",
    slot: number
) => void;
export type EquipBindTradeableConfirmEvent = (
    frame: UIFrame,
    e: "EQUIP_BIND_TRADEABLE_CONFIRM",
    slot: number
) => void;
export type InventorySearchUpdateEvent = (
    frame: UIFrame,
    e: "INVENTORY_SEARCH_UPDATE"
) => void;
export type ItemLockChangedEvent = (
    frame: UIFrame,
    e: "ITEM_LOCK_CHANGED",
    bagOrSlotIndex: number,
    slotIndex: number | undefined
) => void;
export type ItemLockedEvent = (
    frame: UIFrame,
    e: "ITEM_LOCKED",
    bagOrSlotIndex: number,
    slotIndex: number | undefined
) => void;
export type ItemUnlockedEvent = (
    frame: UIFrame,
    e: "ITEM_UNLOCKED",
    bagOrSlotIndex: number,
    slotIndex: number | undefined
) => void;
