import { SuperTrackingType } from "./common";
import { UIFrame } from "../ui";

export const C_SuperTrack = {
    GetHighestPrioritySuperTrackingType: (): SuperTrackingType | undefined => {
        return SuperTrackingType.Quest;
    },
    GetSuperTrackedQuestID: (): number | undefined => {
        return 0;
    },
    IsSuperTrackingAnything: (): boolean => {
        return false;
    },
    IsSuperTrackingCorpse: (): boolean => {
        return false;
    },
    IsSuperTrackingQuest: (): boolean => {
        return false;
    },
    IsSuperTrackingUserWaypoint: (): boolean => {
        return false;
    },
    SetSuperTrackedQuestID: (questID: number): void => {},
    SetSuperTrackedUserWaypoint: (superTracked: boolean): void => {},
};
export type SuperTrackingChangedEvent = (
    frame: UIFrame,
    e: "SUPER_TRACKING_CHANGED"
) => void;
