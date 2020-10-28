import { UIFrame } from "../ui";

export const C_ItemUpgrade = {
    GetItemHyperlink: (): string => {return ''},
};
export type ItemUpgradeMasterClosedEvent = (frame: UIFrame, e: "ITEM_UPGRADE_MASTER_CLOSED") => void
export type ItemUpgradeMasterOpenedEvent = (frame: UIFrame, e: "ITEM_UPGRADE_MASTER_OPENED") => void
export type ItemUpgradeMasterSetItemEvent = (frame: UIFrame, e: "ITEM_UPGRADE_MASTER_SET_ITEM") => void
export type ItemUpgradeMasterUpdateEvent = (frame: UIFrame, e: "ITEM_UPGRADE_MASTER_UPDATE") => void