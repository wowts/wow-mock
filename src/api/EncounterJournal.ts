import { Vector2DMixin } from '../mixins';
import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export const enum ItemSlotFilterType {
    Head = 0,
    Neck = 1,
    Shoulder = 2,
    Cloak = 3,
    Chest = 4,
    Wrist = 5,
    Hand = 6,
    Waist = 7,
    Legs = 8,
    Feet = 9,
    MainHand = 10,
    OffHand = 11,
    Finger = 12,
    Trinket = 13,
    Other = 14,
    NoFilter = 15
}
export interface DungeonEntranceMapInfo {
    areaPoiID: number;
    position: Vector2DMixin;
    name: string;
    description: string;
    atlasName: string;
    journalInstanceID: number
}
export interface EncounterJournalItemInfo {
    itemID: number;
    encounterID: number | undefined;
    name: string | undefined;
    itemQuality: string | undefined;
    filterType: ItemSlotFilterType | undefined;
    icon: number | undefined;
    slot: string | undefined;
    armorType: string | undefined;
    link: string | undefined;
    handError: boolean | undefined;
    weaponTypeError: boolean | undefined
}
export interface EncounterJournalMapEncounterInfo {
    encounterID: number;
    mapX: number;
    mapY: number
}
export interface EncounterJournalSectionInfo {
    spellID: number;
    title: string;
    description: string | undefined;
    headerType: number;
    abilityIcon: number;
    creatureDisplayID: number;
    uiModelSceneID: number;
    siblingSectionID: number | undefined;
    firstChildSectionID: number | undefined;
    filteredByDifficulty: boolean;
    link: string;
    startsOpen: boolean
}
export const C_EncounterJournal = {
    GetDungeonEntrancesForMap: (uiMapID: number): LuaArray<DungeonEntranceMapInfo> => {return {} as any},
    GetEncountersOnMap: (uiMapID: number): LuaArray<EncounterJournalMapEncounterInfo> => {return {} as any},
    GetLootInfo: (id: number): EncounterJournalItemInfo => {return {itemID: 0, encounterID: 0, name: '', itemQuality: '', filterType: ItemSlotFilterType.Head, icon: 0, slot: '', armorType: '', link: '', handError: false, weaponTypeError: false}},
    GetLootInfoByIndex: (index: number, encounterIndex: number | undefined): EncounterJournalItemInfo => {return {itemID: 0, encounterID: 0, name: '', itemQuality: '', filterType: ItemSlotFilterType.Head, icon: 0, slot: '', armorType: '', link: '', handError: false, weaponTypeError: false}},
    GetSectionIconFlags: (sectionID: number): LuaArray<number> | undefined => {return {} as any},
    GetSectionInfo: (sectionID: number): EncounterJournalSectionInfo => {return {spellID: 0, title: '', description: '', headerType: 0, abilityIcon: 0, creatureDisplayID: 0, uiModelSceneID: 0, siblingSectionID: 0, firstChildSectionID: 0, filteredByDifficulty: false, link: '', startsOpen: false}},
    GetSlotFilter: (): ItemSlotFilterType => {return ItemSlotFilterType.Head},
    InstanceHasLoot: (instanceID: number | undefined): boolean => {return false},
    IsEncounterComplete: (journalEncounterID: number): boolean => {return false},
    ResetSlotFilter: (): void => {},
    SetPreviewMythicPlusLevel: (level: number): void => {},
    SetPreviewPvpTier: (tier: number): void => {},
    SetSlotFilter: (filterSlot: ItemSlotFilterType): void => {},
};
export type EjDifficultyUpdateEvent = (frame: UIFrame, e: "EJ_DIFFICULTY_UPDATE", difficultyID: number) => void
export type EjLootDataRecievedEvent = (frame: UIFrame, e: "EJ_LOOT_DATA_RECIEVED", itemID: number | undefined) => void