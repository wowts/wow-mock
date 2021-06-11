import { UIFrame } from "../ui";

export const C_GMTicketInfo = {};
export type GmPlayerInfoEvent = (
    frame: UIFrame,
    e: "GM_PLAYER_INFO",
    name: string,
    info: string
) => void;
export type ItemRestorationButtonStatusEvent = (
    frame: UIFrame,
    e: "ITEM_RESTORATION_BUTTON_STATUS"
) => void;
export type PetitionClosedEvent = (
    frame: UIFrame,
    e: "PETITION_CLOSED"
) => void;
export type PetitionShowEvent = (frame: UIFrame, e: "PETITION_SHOW") => void;
export type PlayerReportSubmittedEvent = (
    frame: UIFrame,
    e: "PLAYER_REPORT_SUBMITTED",
    invitedByGUID: string
) => void;
export type QuickTicketSystemStatusEvent = (
    frame: UIFrame,
    e: "QUICK_TICKET_SYSTEM_STATUS"
) => void;
export type QuickTicketThrottleChangedEvent = (
    frame: UIFrame,
    e: "QUICK_TICKET_THROTTLE_CHANGED"
) => void;
export type UpdateWebTicketEvent = (
    frame: UIFrame,
    e: "UPDATE_WEB_TICKET",
    hasTicket: boolean,
    numTickets: number | undefined,
    ticketStatus: number | undefined,
    caseIndex: number | undefined,
    waitTimeMinutes: number | undefined,
    waitMessage: string | undefined
) => void;
