import { UIFrame } from "../ui";

export const C_TradeInfo = {

};
export type PlayerTradeCurrencyEvent = (frame: UIFrame, e: "PLAYER_TRADE_CURRENCY") => void
export type PlayerTradeMoneyEvent = (frame: UIFrame, e: "PLAYER_TRADE_MONEY") => void
export type TradeAcceptUpdateEvent = (frame: UIFrame, e: "TRADE_ACCEPT_UPDATE", playerAccepted: number, targetAccepted: number) => void
export type TradeClosedEvent = (frame: UIFrame, e: "TRADE_CLOSED") => void
export type TradeCurrencyChangedEvent = (frame: UIFrame, e: "TRADE_CURRENCY_CHANGED") => void
export type TradeMoneyChangedEvent = (frame: UIFrame, e: "TRADE_MONEY_CHANGED") => void
export type TradePlayerItemChangedEvent = (frame: UIFrame, e: "TRADE_PLAYER_ITEM_CHANGED", tradeSlotIndex: number) => void
export type TradePotentialBindEnchantEvent = (frame: UIFrame, e: "TRADE_POTENTIAL_BIND_ENCHANT", canBecomeBoundForTrade: boolean) => void
export type TradePotentialRemoveTransmogEvent = (frame: UIFrame, e: "TRADE_POTENTIAL_REMOVE_TRANSMOG", itemLink: string, tradeSlotIndex: number) => void
export type TradeRequestEvent = (frame: UIFrame, e: "TRADE_REQUEST", name: string) => void
export type TradeRequestCancelEvent = (frame: UIFrame, e: "TRADE_REQUEST_CANCEL") => void
export type TradeShowEvent = (frame: UIFrame, e: "TRADE_SHOW") => void
export type TradeTargetItemChangedEvent = (frame: UIFrame, e: "TRADE_TARGET_ITEM_CHANGED", tradeSlotIndex: number) => void
export type TradeUpdateEvent = (frame: UIFrame, e: "TRADE_UPDATE") => void