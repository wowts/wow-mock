import { UIFrame } from "../ui";

export const C_MerchantFrame = {
    GetBuybackItemID: (buybackSlotIndex: number): number => {
        return 0;
    },
    IsMerchantItemRefundable: (index: number): boolean => {
        return false;
    },
};
export type MerchantClosedEvent = (
    frame: UIFrame,
    e: "MERCHANT_CLOSED"
) => void;
export type MerchantFilterItemUpdateEvent = (
    frame: UIFrame,
    e: "MERCHANT_FILTER_ITEM_UPDATE",
    itemID: number
) => void;
export type MerchantShowEvent = (frame: UIFrame, e: "MERCHANT_SHOW") => void;
export type MerchantUpdateEvent = (
    frame: UIFrame,
    e: "MERCHANT_UPDATE"
) => void;
