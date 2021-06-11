import { PlayerLocationMixin } from "../mixins";
import { UIFrame } from "../ui";

export const C_PlayerInfo = {
    GUIDIsPlayer: (guid: string): boolean => {
        return false;
    },
    GetClass: (
        playerLocation: PlayerLocationMixin
    ): [
        className: string | undefined,
        classFilename: string | undefined,
        classID: number | undefined
    ] => {
        return ["", "", 0];
    },
    GetName: (playerLocation: PlayerLocationMixin): string | undefined => {
        return "";
    },
    GetRace: (playerLocation: PlayerLocationMixin): number | undefined => {
        return 0;
    },
    GetSex: (playerLocation: PlayerLocationMixin): number | undefined => {
        return 0;
    },
    IsConnected: (
        playerLocation: PlayerLocationMixin | undefined
    ): boolean | undefined => {
        return false;
    },
    UnitIsSameServer: (playerLocation: PlayerLocationMixin): boolean => {
        return false;
    },
};
