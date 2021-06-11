import { Vector2DMixin } from "../mixins";
import { UIFrame } from "../ui";
export interface InvasionMapInfo {
    invasionID: number;
    name: string;
    position: Vector2DMixin;
    atlasName: string;
    rewardQuestID: number | undefined;
}
export const C_InvasionInfo = {
    AreInvasionsAvailable: (): boolean => {
        return false;
    },
    GetInvasionForUiMapID: (uiMapID: number): number | undefined => {
        return 0;
    },
    GetInvasionInfo: (invasionID: number): InvasionMapInfo => {
        return {
            invasionID: 0,
            name: "",
            position: {} as any,
            atlasName: "",
            rewardQuestID: 0,
        };
    },
    GetInvasionTimeLeft: (invasionID: number): number | undefined => {
        return 0;
    },
};
