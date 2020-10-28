import { UIFrame } from "../ui";

export const C_BlackMarketInfo = {

};
export type BlackMarketBidResultEvent = (frame: UIFrame, e: "BLACK_MARKET_BID_RESULT", marketID: number, resultCode: number) => void
export type BlackMarketCloseEvent = (frame: UIFrame, e: "BLACK_MARKET_CLOSE") => void
export type BlackMarketItemUpdateEvent = (frame: UIFrame, e: "BLACK_MARKET_ITEM_UPDATE") => void
export type BlackMarketOpenEvent = (frame: UIFrame, e: "BLACK_MARKET_OPEN") => void
export type BlackMarketOutbidEvent = (frame: UIFrame, e: "BLACK_MARKET_OUTBID", marketID: number, itemID: number) => void
export type BlackMarketUnavailableEvent = (frame: UIFrame, e: "BLACK_MARKET_UNAVAILABLE") => void
export type BlackMarketWonEvent = (frame: UIFrame, e: "BLACK_MARKET_WON", marketID: number, itemID: number) => void