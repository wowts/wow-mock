import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export const enum QuestLineFloorLocation {
    Above = 0,
    Below = 1,
    Same = 2,
}
export interface QuestLineInfo {
    questLineName: string;
    questName: string;
    questLineID: number;
    questID: number;
    x: number;
    y: number;
    isHidden: boolean;
    isLegendary: boolean;
    isDaily: boolean;
    isCampaign: boolean;
    floorLocation: QuestLineFloorLocation;
}
export const C_QuestLine = {
    GetAvailableQuestLines: (uiMapID: number): LuaArray<QuestLineInfo> => {
        return {} as any;
    },
    GetQuestLineInfo: (
        questID: number,
        uiMapID: number
    ): QuestLineInfo | undefined => {
        return {
            questLineName: "",
            questName: "",
            questLineID: 0,
            questID: 0,
            x: 0,
            y: 0,
            isHidden: false,
            isLegendary: false,
            isDaily: false,
            isCampaign: false,
            floorLocation: QuestLineFloorLocation.Above,
        };
    },
    GetQuestLineQuests: (questLineID: number): LuaArray<number> => {
        return {} as any;
    },
    IsComplete: (questLineID: number): boolean => {
        return false;
    },
    RequestQuestLinesForMap: (uiMapID: number): void => {},
};
