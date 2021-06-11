import { UIFrame } from "../ui";

export const C_AccountInfo = {
    GetIDFromBattleNetAccountGUID: (battleNetAccountGUID: string): number => {
        return 0;
    },
    IsGUIDBattleNetAccountType: (guid: string): boolean => {
        return false;
    },
    IsGUIDRelatedToLocalAccount: (guid: string): boolean => {
        return false;
    },
};
