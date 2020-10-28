import { UIFrame } from "../ui";

export const C_WowTokenUI = {
    StartTokenSell: (tokenGUID: string): void => {},
};
export type TokenAuctionSoldEvent = (frame: UIFrame, e: "TOKEN_AUCTION_SOLD") => void
export type TokenBuyConfirmRequiredEvent = (frame: UIFrame, e: "TOKEN_BUY_CONFIRM_REQUIRED") => void
export type TokenBuyResultEvent = (frame: UIFrame, e: "TOKEN_BUY_RESULT", result: number) => void
export type TokenCanVeteranBuyUpdateEvent = (frame: UIFrame, e: "TOKEN_CAN_VETERAN_BUY_UPDATE", result: number) => void
export type TokenDistributionsUpdatedEvent = (frame: UIFrame, e: "TOKEN_DISTRIBUTIONS_UPDATED", result: number) => void
export type TokenMarketPriceUpdatedEvent = (frame: UIFrame, e: "TOKEN_MARKET_PRICE_UPDATED", result: number) => void
export type TokenRedeemBalanceUpdatedEvent = (frame: UIFrame, e: "TOKEN_REDEEM_BALANCE_UPDATED") => void
export type TokenRedeemConfirmRequiredEvent = (frame: UIFrame, e: "TOKEN_REDEEM_CONFIRM_REQUIRED", choiceType: number) => void
export type TokenRedeemFrameShowEvent = (frame: UIFrame, e: "TOKEN_REDEEM_FRAME_SHOW") => void
export type TokenRedeemGameTimeUpdatedEvent = (frame: UIFrame, e: "TOKEN_REDEEM_GAME_TIME_UPDATED") => void
export type TokenRedeemResultEvent = (frame: UIFrame, e: "TOKEN_REDEEM_RESULT", result: number, choiceType: number) => void
export type TokenSellConfirmRequiredEvent = (frame: UIFrame, e: "TOKEN_SELL_CONFIRM_REQUIRED") => void
export type TokenSellConfirmedEvent = (frame: UIFrame, e: "TOKEN_SELL_CONFIRMED") => void
export type TokenSellResultEvent = (frame: UIFrame, e: "TOKEN_SELL_RESULT", result: number) => void
export type TokenStatusChangedEvent = (frame: UIFrame, e: "TOKEN_STATUS_CHANGED") => void