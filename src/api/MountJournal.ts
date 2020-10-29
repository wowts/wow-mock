import { ItemLocationMixin } from '../mixins';
import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export interface MountCreatureDisplayInfo {
    creatureDisplayID: number;
    isVisible: boolean
}
export const C_MountJournal = {
    ApplyMountEquipment: (itemLocation: ItemLocationMixin): boolean => {return false},
    AreMountEquipmentEffectsSuppressed: (): boolean => {return false},
    ClearFanfare: (mountID: number): void => {},
    ClearRecentFanfares: (): void => {},
    Dismiss: (): void => {},
    GetAppliedMountEquipmentID: (): number | undefined => {return 0},
    GetCollectedFilterSetting: (filterIndex: number): boolean => {return false},
    GetDisplayedMountAllCreatureDisplayInfo: (mountIndex: number): LuaArray<MountCreatureDisplayInfo> => {return {} as any},
    GetDisplayedMountInfo: (displayIndex: number): [name: string, spellID: number, icon: number, isActive: boolean, isUsable: boolean, sourceType: number, isFavorite: boolean, isFactionSpecific: boolean, faction: number | undefined, shouldHideOnChar: boolean, isCollected: boolean, mountID: number] => {return ['', 0, 0, false, false, 0, false, false, 0, false, false, 0]},
    GetDisplayedMountInfoExtra: (mountIndex: number): [creatureDisplayInfoID: number | undefined, description: string, source: string, isSelfMount: boolean, mountTypeID: number, uiModelSceneID: number, animID: number, spellVisualKitID: number, disablePlayerMountPreview: boolean] => {return [0, '', '', false, 0, 0, 0, 0, false]},
    GetIsFavorite: (mountIndex: number): [isFavorite: boolean, canSetFavorite: boolean] => {return [false, false]},
    GetMountAllCreatureDisplayInfoByID: (mountID: number): LuaArray<MountCreatureDisplayInfo> => {return {} as any},
    GetMountEquipmentUnlockLevel: (): number => {return 0},
    GetMountFromItem: (itemID: number): number | undefined => {return 0},
    GetMountFromSpell: (spellID: number): number | undefined => {return 0},
    GetMountIDs: (): LuaArray<number> => {return {} as any},
    GetMountInfoByID: (mountID: number): [name: string, spellID: number, icon: number, isActive: boolean, isUsable: boolean, sourceType: number, isFavorite: boolean, isFactionSpecific: boolean, faction: number | undefined, shouldHideOnChar: boolean, isCollected: boolean, mountID: number] => {return ['', 0, 0, false, false, 0, false, false, 0, false, false, 0]},
    GetMountInfoExtraByID: (mountID: number): [creatureDisplayInfoID: number | undefined, description: string, source: string, isSelfMount: boolean, mountTypeID: number, uiModelSceneID: number, animID: number, spellVisualKitID: number, disablePlayerMountPreview: boolean] => {return [0, '', '', false, 0, 0, 0, 0, false]},
    GetMountUsabilityByID: (mountID: number, checkIndoors: boolean): [isUsable: boolean, useError: string | undefined] => {return [false, '']},
    GetNumDisplayedMounts: (): number => {return 0},
    GetNumMounts: (): number => {return 0},
    GetNumMountsNeedingFanfare: (): number => {return 0},
    IsItemMountEquipment: (itemLocation: ItemLocationMixin): boolean => {return false},
    IsMountEquipmentApplied: (): boolean => {return false},
    IsSourceChecked: (filterIndex: number): boolean => {return false},
    IsValidSourceFilter: (filterIndex: number): boolean => {return false},
    NeedsFanfare: (mountID: number): boolean => {return false},
    Pickup: (displayIndex: number): void => {},
    SetAllSourceFilters: (isChecked: boolean): void => {},
    SetCollectedFilterSetting: (filterIndex: number, isChecked: boolean): void => {},
    SetIsFavorite: (mountIndex: number, isFavorite: boolean): void => {},
    SetSearch: (searchValue: string): void => {},
    SetSourceFilter: (filterIndex: number, isChecked: boolean): void => {},
    SummonByID: (mountID: number): void => {},
};
export type MountEquipmentApplyResultEvent = (frame: UIFrame, e: "MOUNT_EQUIPMENT_APPLY_RESULT", success: boolean) => void
export type MountJournalSearchUpdatedEvent = (frame: UIFrame, e: "MOUNT_JOURNAL_SEARCH_UPDATED") => void
export type MountJournalUsabilityChangedEvent = (frame: UIFrame, e: "MOUNT_JOURNAL_USABILITY_CHANGED") => void
export type NewMountAddedEvent = (frame: UIFrame, e: "NEW_MOUNT_ADDED", mountID: number) => void