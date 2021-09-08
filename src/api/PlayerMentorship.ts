import { PlayerMentorshipStatus } from "./common";
import { PlayerLocationMixin } from "../mixins";
import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";

export const C_PlayerMentorship = {
    GetMentorLevelRequirement: (): number | undefined => {
        return 0;
    },
    GetMentorOptionalAchievementIDs: (): LuaArray<number> => {
        return {} as any;
    },
    GetMentorshipStatus: (
        playerLocation: PlayerLocationMixin
    ): PlayerMentorshipStatus => {
        return PlayerMentorshipStatus.None;
    },
    IsActivePlayerConsideredNewcomer: (): boolean => {
        return false;
    },
    IsMentorRestricted: (): boolean => {
        return false;
    },
};
export type MentorshipStatusChangedEvent = (
    frame: UIFrame,
    e: "MENTORSHIP_STATUS_CHANGED"
) => void;
export type NewcomerGraduationEvent = (
    frame: UIFrame,
    e: "NEWCOMER_GRADUATION"
) => void;
