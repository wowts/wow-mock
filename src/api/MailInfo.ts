import { UIFrame } from "../ui";

export const C_Mail = {
    CanCheckInbox: (): [canCheckInbox: boolean, secondsUntilAllowed: number] => {return [false, 0]},
    HasInboxMoney: (inboxIndex: number): boolean => {return false},
    IsCommandPending: (): boolean => {return false},
};
export type CloseInboxItemEvent = (frame: UIFrame, e: "CLOSE_INBOX_ITEM", mailIndex: number) => void
export type MailClosedEvent = (frame: UIFrame, e: "MAIL_CLOSED") => void
export type MailFailedEvent = (frame: UIFrame, e: "MAIL_FAILED", itemID: number | undefined) => void
export type MailInboxUpdateEvent = (frame: UIFrame, e: "MAIL_INBOX_UPDATE") => void
export type MailLockSendItemsEvent = (frame: UIFrame, e: "MAIL_LOCK_SEND_ITEMS", attachSlot: number, itemLink: string) => void
export type MailSendInfoUpdateEvent = (frame: UIFrame, e: "MAIL_SEND_INFO_UPDATE") => void
export type MailSendSuccessEvent = (frame: UIFrame, e: "MAIL_SEND_SUCCESS") => void
export type MailShowEvent = (frame: UIFrame, e: "MAIL_SHOW") => void
export type MailSuccessEvent = (frame: UIFrame, e: "MAIL_SUCCESS", itemID: number | undefined) => void
export type MailUnlockSendItemsEvent = (frame: UIFrame, e: "MAIL_UNLOCK_SEND_ITEMS") => void
export type SendMailCodChangedEvent = (frame: UIFrame, e: "SEND_MAIL_COD_CHANGED") => void
export type SendMailMoneyChangedEvent = (frame: UIFrame, e: "SEND_MAIL_MONEY_CHANGED") => void
export type UpdatePendingMailEvent = (frame: UIFrame, e: "UPDATE_PENDING_MAIL") => void