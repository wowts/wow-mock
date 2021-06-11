import { UIFrame } from "../ui";

export const C_SecureTransfer = {};
export type SecureTransferCancelEvent = (
    frame: UIFrame,
    e: "SECURE_TRANSFER_CANCEL"
) => void;
export type SecureTransferConfirmSendMailEvent = (
    frame: UIFrame,
    e: "SECURE_TRANSFER_CONFIRM_SEND_MAIL"
) => void;
export type SecureTransferConfirmTradeAcceptEvent = (
    frame: UIFrame,
    e: "SECURE_TRANSFER_CONFIRM_TRADE_ACCEPT"
) => void;
