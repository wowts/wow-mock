import { UIFrame } from "../ui";

export const C_Bank = {

};
export type BankBagSlotFlagsUpdatedEvent = (frame: UIFrame, e: "BANK_BAG_SLOT_FLAGS_UPDATED", slot: number) => void
export type BankframeClosedEvent = (frame: UIFrame, e: "BANKFRAME_CLOSED") => void
export type BankframeOpenedEvent = (frame: UIFrame, e: "BANKFRAME_OPENED") => void
export type PlayerbankbagslotsChangedEvent = (frame: UIFrame, e: "PLAYERBANKBAGSLOTS_CHANGED") => void
export type PlayerbankslotsChangedEvent = (frame: UIFrame, e: "PLAYERBANKSLOTS_CHANGED", slot: number) => void
export type PlayerreagentbankslotsChangedEvent = (frame: UIFrame, e: "PLAYERREAGENTBANKSLOTS_CHANGED", slot: number) => void
export type ReagentbankPurchasedEvent = (frame: UIFrame, e: "REAGENTBANK_PURCHASED") => void
export type ReagentbankUpdateEvent = (frame: UIFrame, e: "REAGENTBANK_UPDATE") => void