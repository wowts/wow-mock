import { UIFrame } from "../ui";
export interface TaskPOIData {
    questId: number;
    x: number;
    y: number;
    inProgress: boolean;
    numObjectives: number;
    mapID: number;
    isQuestStart: boolean;
    isDaily: boolean;
    isCombatAllyQuest: boolean;
    childDepth: number | undefined
}
export const C_TaskQuest = {
    DoesMapShowTaskQuestObjectives: (uiMapID: number): boolean => {return false},
    GetQuestInfoByQuestID: (questID: number): [questTitle: string, factionID: number | undefined, capped: boolean | undefined, displayAsObjective: boolean | undefined] => {return ['', 0, false, false]},
    GetQuestLocation: (questID: number, uiMapID: number): [locationX: number, locationY: number] => {return [0, 0]},
    GetQuestProgressBarInfo: (questID: number): number => {return 0},
    GetQuestTimeLeftMinutes: (questID: number): number => {return 0},
    GetQuestTimeLeftSeconds: (questID: number): number => {return 0},
    GetQuestZoneID: (questID: number): number => {return 0},
    GetQuestsForPlayerByMapID: (uiMapID: number): any => {return {} as any},
    GetThreatQuests: (): any => {return {} as any},
    IsActive: (questID: number): boolean => {return false},
    RequestPreloadRewardData: (questID: number): void => {},
};
