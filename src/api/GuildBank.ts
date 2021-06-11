import { UIFrame } from "../ui";

export const C_GuildBank = {};
export type GuildbankItemLockChangedEvent = (
    frame: UIFrame,
    e: "GUILDBANK_ITEM_LOCK_CHANGED"
) => void;
export type GuildbankTextChangedEvent = (
    frame: UIFrame,
    e: "GUILDBANK_TEXT_CHANGED",
    guildBankTab: number
) => void;
export type GuildbankUpdateMoneyEvent = (
    frame: UIFrame,
    e: "GUILDBANK_UPDATE_MONEY"
) => void;
export type GuildbankUpdateTabsEvent = (
    frame: UIFrame,
    e: "GUILDBANK_UPDATE_TABS"
) => void;
export type GuildbankUpdateTextEvent = (
    frame: UIFrame,
    e: "GUILDBANK_UPDATE_TEXT",
    guildBankTab: number
) => void;
export type GuildbankUpdateWithdrawmoneyEvent = (
    frame: UIFrame,
    e: "GUILDBANK_UPDATE_WITHDRAWMONEY"
) => void;
export type GuildbankbagslotsChangedEvent = (
    frame: UIFrame,
    e: "GUILDBANKBAGSLOTS_CHANGED"
) => void;
export type GuildbankframeClosedEvent = (
    frame: UIFrame,
    e: "GUILDBANKFRAME_CLOSED"
) => void;
export type GuildbankframeOpenedEvent = (
    frame: UIFrame,
    e: "GUILDBANKFRAME_OPENED"
) => void;
export type GuildbanklogUpdateEvent = (
    frame: UIFrame,
    e: "GUILDBANKLOG_UPDATE"
) => void;
