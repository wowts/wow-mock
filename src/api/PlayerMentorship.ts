import {PlayerMentorshipStatus} from "./common";
import { PlayerLocationMixin } from '../mixins';
import { UIFrame } from "../ui";

export const C_PlayerMentorship = {
    GetMentorLevelRequirement: (): number | undefined => {return 0},
    GetMentorOptionalAchievementIDs: (): any => {return {} as any},
    GetMentorshipStatus: (playerLocation: PlayerLocationMixin): PlayerMentorshipStatus => {return PlayerMentorshipStatus.None},
    IsActivePlayerConsideredNewcomer: (): boolean => {return false},
    IsMentorRestricted: (): boolean => {return false},
};
export type NewcomerGraduationEvent = (frame: UIFrame, e: "NEWCOMER_GRADUATION") => void