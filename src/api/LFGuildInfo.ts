import { GuildTabardInfo } from "../mixins";
import { UIFrame } from "../ui";

export const C_LFGuildInfo = {
    GetRecruitingGuildTabardInfo: (
        index: number
    ): GuildTabardInfo | undefined => {
        return {} as any;
    },
};
export type LfGuildBrowseUpdatedEvent = (
    frame: UIFrame,
    e: "LF_GUILD_BROWSE_UPDATED"
) => void;
export type LfGuildMembershipListChangedEvent = (
    frame: UIFrame,
    e: "LF_GUILD_MEMBERSHIP_LIST_CHANGED"
) => void;
export type LfGuildMembershipListUpdatedEvent = (
    frame: UIFrame,
    e: "LF_GUILD_MEMBERSHIP_LIST_UPDATED",
    numApplicationsRemaining: number
) => void;
export type LfGuildPostUpdatedEvent = (
    frame: UIFrame,
    e: "LF_GUILD_POST_UPDATED"
) => void;
export type LfGuildRecruitListChangedEvent = (
    frame: UIFrame,
    e: "LF_GUILD_RECRUIT_LIST_CHANGED"
) => void;
export type LfGuildRecruitsUpdatedEvent = (
    frame: UIFrame,
    e: "LF_GUILD_RECRUITS_UPDATED"
) => void;
