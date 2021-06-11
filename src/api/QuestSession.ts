import { QuestSessionCommand, QuestSessionResult } from "./common";
import { UIFrame } from "../ui";
export interface QuestSessionPlayerDetails {
    name: string;
    guid: string;
}
export const C_QuestSession = {
    CanStart: (): boolean => {
        return false;
    },
    CanStop: (): boolean => {
        return false;
    },
    Exists: (): boolean => {
        return false;
    },
    GetAvailableSessionCommand: (): QuestSessionCommand => {
        return QuestSessionCommand.None;
    },
    GetPendingCommand: (): QuestSessionCommand => {
        return QuestSessionCommand.None;
    },
    GetProposedMaxLevelForSession: (): number => {
        return 0;
    },
    GetSessionBeginDetails: (): QuestSessionPlayerDetails | undefined => {
        return { name: "", guid: "" };
    },
    GetSuperTrackedQuest: (): number | undefined => {
        return 0;
    },
    HasJoined: (): boolean => {
        return false;
    },
    HasPendingCommand: (): boolean => {
        return false;
    },
    RequestSessionStart: (): void => {},
    RequestSessionStop: (): void => {},
    SendSessionBeginResponse: (beginSession: boolean): void => {},
    SetQuestIsSuperTracked: (questID: number, superTrack: boolean): void => {},
};
export type QuestSessionCreatedEvent = (
    frame: UIFrame,
    e: "QUEST_SESSION_CREATED"
) => void;
export type QuestSessionDestroyedEvent = (
    frame: UIFrame,
    e: "QUEST_SESSION_DESTROYED"
) => void;
export type QuestSessionEnabledStateChangedEvent = (
    frame: UIFrame,
    e: "QUEST_SESSION_ENABLED_STATE_CHANGED",
    enabled: boolean
) => void;
export type QuestSessionJoinedEvent = (
    frame: UIFrame,
    e: "QUEST_SESSION_JOINED"
) => void;
export type QuestSessionLeftEvent = (
    frame: UIFrame,
    e: "QUEST_SESSION_LEFT"
) => void;
export type QuestSessionMemberConfirmEvent = (
    frame: UIFrame,
    e: "QUEST_SESSION_MEMBER_CONFIRM"
) => void;
export type QuestSessionMemberStartResponseEvent = (
    frame: UIFrame,
    e: "QUEST_SESSION_MEMBER_START_RESPONSE",
    guid: string,
    response: boolean
) => void;
export type QuestSessionNotificationEvent = (
    frame: UIFrame,
    e: "QUEST_SESSION_NOTIFICATION",
    result: QuestSessionResult,
    guid: string
) => void;
