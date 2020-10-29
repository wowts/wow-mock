import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export const enum AzeriteEssence {
    MainSlot = 0,
    PassiveOneSlot = 1,
    PassiveTwoSlot = 2,
    PassiveThreeSlot = 3
}
export interface AzeriteEssenceInfo {
    ID: number;
    name: string;
    rank: number;
    unlocked: boolean;
    valid: boolean;
    icon: number
}
export interface AzeriteMilestoneInfo {
    ID: number;
    requiredLevel: number;
    canUnlock: boolean;
    unlocked: boolean;
    rank: number | undefined;
    slot: AzeriteEssence | undefined
}
export const C_AzeriteEssence = {
    ActivateEssence: (essenceID: number, milestoneID: number): void => {},
    CanActivateEssence: (essenceID: number, milestoneID: number): boolean => {return false},
    CanDeactivateEssence: (milestoneID: number): boolean => {return false},
    CanOpenUI: (): boolean => {return false},
    ClearPendingActivationEssence: (): void => {},
    CloseForge: (): void => {},
    GetEssenceHyperlink: (essenceID: number, rank: number): string => {return ''},
    GetEssenceInfo: (essenceID: number): AzeriteEssenceInfo => {return {ID: 0, name: '', rank: 0, unlocked: false, valid: false, icon: 0}},
    GetEssences: (): LuaArray<AzeriteEssenceInfo> => {return {} as any},
    GetMilestoneEssence: (milestoneID: number): number => {return 0},
    GetMilestoneInfo: (milestoneID: number): AzeriteMilestoneInfo => {return {ID: 0, requiredLevel: 0, canUnlock: false, unlocked: false, rank: 0, slot: AzeriteEssence.MainSlot}},
    GetMilestoneSpell: (milestoneID: number): number => {return 0},
    GetMilestones: (): LuaArray<AzeriteMilestoneInfo> => {return {} as any},
    GetNumUnlockedEssences: (): number => {return 0},
    GetNumUsableEssences: (): number => {return 0},
    GetPendingActivationEssence: (): number => {return 0},
    HasNeverActivatedAnyEssences: (): boolean => {return false},
    HasPendingActivationEssence: (): boolean => {return false},
    IsAtForge: (): boolean => {return false},
    SetPendingActivationEssence: (essenceID: number): void => {},
    UnlockMilestone: (milestoneID: number): void => {},
};
export type AzeriteEssenceActivatedEvent = (frame: UIFrame, e: "AZERITE_ESSENCE_ACTIVATED", slot: AzeriteEssence, essenceID: number) => void
export type AzeriteEssenceActivationFailedEvent = (frame: UIFrame, e: "AZERITE_ESSENCE_ACTIVATION_FAILED", slot: AzeriteEssence, essenceID: number) => void
export type AzeriteEssenceChangedEvent = (frame: UIFrame, e: "AZERITE_ESSENCE_CHANGED", essenceID: number, newRank: number) => void
export type AzeriteEssenceForgeCloseEvent = (frame: UIFrame, e: "AZERITE_ESSENCE_FORGE_CLOSE") => void
export type AzeriteEssenceForgeOpenEvent = (frame: UIFrame, e: "AZERITE_ESSENCE_FORGE_OPEN") => void
export type AzeriteEssenceMilestoneUnlockedEvent = (frame: UIFrame, e: "AZERITE_ESSENCE_MILESTONE_UNLOCKED", milestoneID: number) => void
export type AzeriteEssenceUpdateEvent = (frame: UIFrame, e: "AZERITE_ESSENCE_UPDATE") => void
export type PendingAzeriteEssenceChangedEvent = (frame: UIFrame, e: "PENDING_AZERITE_ESSENCE_CHANGED", essenceID: number | undefined) => void