import { BountyInfo } from '../mixins';
import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export const enum MapOverlayDisplayLocation {
    Default = 0,
    BottomLeft = 1,
    TopLeft = 2,
    BottomRight = 3,
    TopRight = 4,
    Hidden = 5
}
export const enum QuestFrequency {
    Default = 0,
    Daily = 1,
    Weekly = 2
}
export const enum QuestTag {
    Group = 1,
    PvP = 41,
    Raid = 62,
    Dungeon = 81,
    Legendary = 83,
    Heroic = 85,
    Raid10 = 88,
    Raid25 = 89,
    Scenario = 98,
    Account = 102,
    CombatAlly = 266
}
export const enum QuestWatchType {
    Automatic = 0,
    Manual = 1
}
export const enum WorldQuestQuality {
    Common = 0,
    Rare = 1,
    Epic = 2
}
export interface QuestInfo {
    title: string;
    questLogIndex: number;
    questID: number;
    campaignID: number | undefined;
    level: number;
    difficultyLevel: number;
    suggestedGroup: number;
    frequency: QuestFrequency | undefined;
    isHeader: boolean;
    isCollapsed: boolean;
    startEvent: boolean;
    isTask: boolean;
    isBounty: boolean;
    isStory: boolean;
    isScaling: boolean;
    isOnMap: boolean;
    hasLocalPOI: boolean;
    isHidden: boolean;
    isAutoComplete: boolean;
    overridesSortOrder: boolean;
    readyForTranslation: boolean
}
export interface QuestObjectiveInfo {
    text: string;
    type: string;
    finished: boolean;
    numFulfilled: number;
    numRequired: number
}
export interface QuestOnMapInfo {
    questID: number;
    x: number;
    y: number;
    type: number;
    isMapIndicatorQuest: boolean
}
export interface QuestTagInfo {
    tagName: string;
    tagID: number;
    worldQuestType: number | undefined;
    quality: WorldQuestQuality | undefined;
    tradeskillLineID: number | undefined;
    isElite: boolean | undefined;
    displayExpiration: boolean | undefined
}
export interface QuestTheme {
    background: string;
    seal: string;
    signature: string
}
export const C_QuestLog = {
    AbandonQuest: (): void => {},
    AddQuestWatch: (questID: number, watchType: QuestWatchType | undefined): boolean => {return false},
    AddWorldQuestWatch: (questID: number, watchType: QuestWatchType | undefined): boolean => {return false},
    CanAbandonQuest: (questID: number): boolean => {return false},
    GetAbandonQuest: (): number => {return 0},
    GetAbandonQuestItems: (): LuaArray<number> => {return {} as any},
    GetActiveThreatMaps: (): LuaArray<number> => {return {} as any},
    GetAllCompletedQuestIDs: (): LuaArray<number> => {return {} as any},
    GetBountiesForMapID: (uiMapID: number): LuaArray<BountyInfo> | undefined => {return {} as any},
    GetBountySetInfoForMapID: (uiMapID: number): [displayLocation: MapOverlayDisplayLocation, lockQuestID: number, bountySetID: number] => {return [MapOverlayDisplayLocation.Default, 0, 0]},
    GetDistanceSqToQuest: (questID: number): [distanceSq: number, onContinent: boolean] => {return [0, false]},
    GetInfo: (questLogIndex: number): QuestInfo | undefined => {return {title: '', questLogIndex: 0, questID: 0, campaignID: 0, level: 0, difficultyLevel: 0, suggestedGroup: 0, frequency: QuestFrequency.Default, isHeader: false, isCollapsed: false, startEvent: false, isTask: false, isBounty: false, isStory: false, isScaling: false, isOnMap: false, hasLocalPOI: false, isHidden: false, isAutoComplete: false, overridesSortOrder: false, readyForTranslation: false}},
    GetLogIndexForQuestID: (questID: number): number | undefined => {return 0},
    GetMapForQuestPOIs: (): number => {return 0},
    GetMaxNumQuests: (): number => {return 0},
    GetMaxNumQuestsCanAccept: (): number => {return 0},
    GetNextWaypoint: (questID: number): [mapID: number, x: number, y: number] => {return [0, 0, 0]},
    GetNextWaypointForMap: (questID: number, uiMapID: number): [x: number, y: number] => {return [0, 0]},
    GetNextWaypointText: (questID: number): string => {return ''},
    GetNumQuestLogEntries: (): [numShownEntries: number, numQuests: number] => {return [0, 0]},
    GetNumQuestObjectives: (questID: number): number => {return 0},
    GetNumQuestWatches: (): number => {return 0},
    GetNumWorldQuestWatches: (): number => {return 0},
    GetQuestAdditionalHighlights: (questID: number): [uiMapID: number, worldQuests: boolean, worldQuestsElite: boolean, dungeons: boolean, treasures: boolean] => {return [0, false, false, false, false]},
    GetQuestDetailsTheme: (questID: number): QuestTheme | undefined => {return {background: '', seal: '', signature: ''}},
    GetQuestDifficultyLevel: (questID: number): number => {return 0},
    GetQuestIDForLogIndex: (questLogIndex: number): number | undefined => {return 0},
    GetQuestIDForQuestWatchIndex: (questWatchIndex: number): number | undefined => {return 0},
    GetQuestIDForWorldQuestWatchIndex: (questWatchIndex: number): number | undefined => {return 0},
    GetQuestObjectives: (questID: number): LuaArray<QuestObjectiveInfo> => {return {} as any},
    GetQuestTagInfo: (questID: number): QuestTagInfo | undefined => {return {tagName: '', tagID: 0, worldQuestType: 0, quality: WorldQuestQuality.Common, tradeskillLineID: 0, isElite: false, displayExpiration: false}},
    GetQuestWatchType: (questID: number): QuestWatchType | undefined => {return QuestWatchType.Automatic},
    GetQuestsOnMap: (uiMapID: number): LuaArray<QuestOnMapInfo> => {return {} as any},
    GetRequiredMoney: (questID: number | undefined): number => {return 0},
    GetSelectedQuest: (): number => {return 0},
    GetSuggestedGroupSize: (questID: number): number => {return 0},
    GetTimeAllowed: (questID: number): [totalTime: number, elapsedTime: number] => {return [0, 0]},
    GetTitleForLogIndex: (questLogIndex: number): string | undefined => {return ''},
    GetTitleForQuestID: (questID: number): string | undefined => {return ''},
    GetZoneStoryInfo: (uiMapID: number): [achievementID: number, storyMapID: number] => {return [0, 0]},
    HasActiveThreats: (): boolean => {return false},
    IsAccountQuest: (questID: number): boolean => {return false},
    IsComplete: (questID: number): boolean => {return false},
    IsFailed: (questID: number): boolean => {return false},
    IsLegendaryQuest: (questID: number): boolean => {return false},
    IsOnMap: (questID: number): [onMap: boolean, hasLocalPOI: boolean] => {return [false, false]},
    IsOnQuest: (questID: number): boolean => {return false},
    IsPushableQuest: (questID: number): boolean => {return false},
    IsQuestBounty: (questID: number): boolean => {return false},
    IsQuestCalling: (questID: number): boolean => {return false},
    IsQuestCriteriaForBounty: (questID: number, bountyQuestID: number): boolean => {return false},
    IsQuestDisabledForSession: (questID: number): boolean => {return false},
    IsQuestFlaggedCompleted: (questID: number): boolean => {return false},
    IsQuestInvasion: (questID: number): boolean => {return false},
    IsQuestReplayable: (questID: number): boolean => {return false},
    IsQuestReplayedRecently: (questID: number): boolean => {return false},
    IsQuestTask: (questID: number): boolean => {return false},
    IsQuestTrivial: (questID: number): boolean => {return false},
    IsRepeatableQuest: (questID: number): boolean => {return false},
    IsThreatQuest: (questID: number): boolean => {return false},
    IsUnitOnQuest: (unit: string, questID: number): boolean => {return false},
    IsWorldQuest: (questID: number): boolean => {return false},
    QuestCanHaveWarModeBonus: (questID: number): boolean => {return false},
    QuestHasQuestSessionBonus: (questID: number): boolean => {return false},
    QuestHasWarModeBonus: (questID: number): boolean => {return false},
    ReadyForTurnIn: (questID: number): boolean | undefined => {return false},
    RemoveQuestWatch: (questID: number): boolean => {return false},
    RemoveWorldQuestWatch: (questID: number): boolean => {return false},
    RequestLoadQuestByID: (questID: number): void => {},
    SetAbandonQuest: (): void => {},
    SetMapForQuestPOIs: (uiMapID: number): void => {},
    SetSelectedQuest: (questID: number): void => {},
    ShouldShowQuestRewards: (questID: number): boolean => {return false},
    SortQuestWatches: (): void => {},
};
export type QuestAcceptedEvent = (frame: UIFrame, e: "QUEST_ACCEPTED", questId: number) => void
export type QuestAutocompleteEvent = (frame: UIFrame, e: "QUEST_AUTOCOMPLETE", questId: number) => void
export type QuestCompleteEvent = (frame: UIFrame, e: "QUEST_COMPLETE") => void
export type QuestDataLoadResultEvent = (frame: UIFrame, e: "QUEST_DATA_LOAD_RESULT", questID: number, success: boolean) => void
export type QuestDetailEvent = (frame: UIFrame, e: "QUEST_DETAIL", questStartItemID: number | undefined) => void
export type QuestLogCriteriaUpdateEvent = (frame: UIFrame, e: "QUEST_LOG_CRITERIA_UPDATE", questID: number, specificTreeID: number, description: string, numFulfilled: number, numRequired: number) => void
export type QuestLogUpdateEvent = (frame: UIFrame, e: "QUEST_LOG_UPDATE") => void
export type QuestPoiUpdateEvent = (frame: UIFrame, e: "QUEST_POI_UPDATE") => void
export type QuestRemovedEvent = (frame: UIFrame, e: "QUEST_REMOVED", questID: number, wasReplayQuest: boolean) => void
export type QuestTurnedInEvent = (frame: UIFrame, e: "QUEST_TURNED_IN", questID: number, xpReward: number, moneyReward: number) => void
export type QuestWatchListChangedEvent = (frame: UIFrame, e: "QUEST_WATCH_LIST_CHANGED", questID: number | undefined, added: boolean | undefined) => void
export type QuestWatchUpdateEvent = (frame: UIFrame, e: "QUEST_WATCH_UPDATE", questID: number) => void
export type QuestlineUpdateEvent = (frame: UIFrame, e: "QUESTLINE_UPDATE", requestRequired: boolean) => void
export type TaskProgressUpdateEvent = (frame: UIFrame, e: "TASK_PROGRESS_UPDATE") => void
export type TreasurePickerCacheFlushEvent = (frame: UIFrame, e: "TREASURE_PICKER_CACHE_FLUSH") => void
export type WaypointUpdateEvent = (frame: UIFrame, e: "WAYPOINT_UPDATE") => void
export type WorldQuestCompletedBySpellEvent = (frame: UIFrame, e: "WORLD_QUEST_COMPLETED_BY_SPELL", questID: number) => void