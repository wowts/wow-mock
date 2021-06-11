import { UIFrame } from "../ui";

export const C_UserFeedback = {
    SubmitBug: (bugInfo: string, suppressNotification: boolean): boolean => {
        return false;
    },
    SubmitSuggestion: (suggestion: string): boolean => {
        return false;
    },
};
