import { UIFrame } from "../ui";

export const C_VoidStorageInfo = {

};
export type VoidDepositWarningEvent = (frame: UIFrame, e: "VOID_DEPOSIT_WARNING", slot: number, link: string) => void
export type VoidStorageCloseEvent = (frame: UIFrame, e: "VOID_STORAGE_CLOSE") => void
export type VoidStorageContentsUpdateEvent = (frame: UIFrame, e: "VOID_STORAGE_CONTENTS_UPDATE") => void
export type VoidStorageDepositUpdateEvent = (frame: UIFrame, e: "VOID_STORAGE_DEPOSIT_UPDATE", slot: number) => void
export type VoidStorageOpenEvent = (frame: UIFrame, e: "VOID_STORAGE_OPEN") => void
export type VoidStorageUpdateEvent = (frame: UIFrame, e: "VOID_STORAGE_UPDATE") => void
export type VoidTransferDoneEvent = (frame: UIFrame, e: "VOID_TRANSFER_DONE") => void
export type VoidTransferSuccessEvent = (frame: UIFrame, e: "VOID_TRANSFER_SUCCESS") => void