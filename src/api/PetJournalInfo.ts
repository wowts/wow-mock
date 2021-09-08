import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export const enum PetJournalError {
    None = 0,
    PetIsDead = 1,
    JournalIsLocked = 2,
    InvalidFaction = 3,
    NoFavoritesToSummon = 4,
    NoValidRandomSummon = 5,
    InvalidCovenant = 6,
}
export interface PetAbilityLevelInfo {
    abilityID: number;
    level: number;
}
export interface PetJournalPetInfo {
    speciesID: number;
    customName: string | undefined;
    petLevel: number;
    xp: number;
    maxXP: number;
    displayID: number;
    isFavorite: boolean;
    icon: number;
    petType: number;
    creatureID: number;
    name: string | undefined;
    sourceText: string;
    description: string;
    isWild: boolean;
    canBattle: boolean;
    tradable: boolean;
    unique: boolean;
    obtainable: boolean;
}
export const C_PetJournal = {
    GetDisplayIDByIndex: (
        speciesID: number,
        index: number
    ): number | undefined => {
        return 0;
    },
    GetDisplayProbabilityByIndex: (
        speciesID: number,
        index: number
    ): number | undefined => {
        return 0;
    },
    GetNumDisplays: (speciesID: number): number | undefined => {
        return 0;
    },
    GetPetAbilityInfo: (
        abilityID: number
    ): [name: string, icon: number, petType: number] => {
        return ["", 0, 0];
    },
    GetPetAbilityListTable: (
        speciesID: number
    ): LuaArray<PetAbilityLevelInfo> => {
        return {} as any;
    },
    GetPetInfoTableByPetID: (petID: string): PetJournalPetInfo => {
        return {
            speciesID: 0,
            customName: "",
            petLevel: 0,
            xp: 0,
            maxXP: 0,
            displayID: 0,
            isFavorite: false,
            icon: 0,
            petType: 0,
            creatureID: 0,
            name: "",
            sourceText: "",
            description: "",
            isWild: false,
            canBattle: false,
            tradable: false,
            unique: false,
            obtainable: false,
        };
    },
    GetPetLoadOutInfo: (
        slot: number
    ): [
        petID: string | undefined,
        ability1ID: number,
        ability2ID: number,
        ability3ID: number,
        locked: boolean
    ] => {
        return ["", 0, 0, 0, false];
    },
    GetPetSummonInfo: (
        battlePetGUID: string
    ): [isSummonable: boolean, error: PetJournalError, errorText: string] => {
        return [false, PetJournalError.None, ""];
    },
    PetIsSummonable: (battlePetGUID: string): boolean => {
        return false;
    },
    PetUsesRandomDisplay: (speciesID: number): boolean | undefined => {
        return false;
    },
};
export type BattlepetForceNameDeclensionEvent = (
    frame: UIFrame,
    e: "BATTLEPET_FORCE_NAME_DECLENSION",
    name: string,
    battlePetGUID: string
) => void;
export type CompanionLearnedEvent = (
    frame: UIFrame,
    e: "COMPANION_LEARNED"
) => void;
export type CompanionUnlearnedEvent = (
    frame: UIFrame,
    e: "COMPANION_UNLEARNED"
) => void;
export type CompanionUpdateEvent = (
    frame: UIFrame,
    e: "COMPANION_UPDATE",
    companionType: string | undefined
) => void;
export type NewPetAddedEvent = (
    frame: UIFrame,
    e: "NEW_PET_ADDED",
    battlePetGUID: string
) => void;
export type PetJournalAutoSlottedPetEvent = (
    frame: UIFrame,
    e: "PET_JOURNAL_AUTO_SLOTTED_PET",
    slotIndex: number,
    battlePetGUID: string
) => void;
export type PetJournalCageFailedEvent = (
    frame: UIFrame,
    e: "PET_JOURNAL_CAGE_FAILED"
) => void;
export type PetJournalListUpdateEvent = (
    frame: UIFrame,
    e: "PET_JOURNAL_LIST_UPDATE"
) => void;
export type PetJournalNewBattleSlotEvent = (
    frame: UIFrame,
    e: "PET_JOURNAL_NEW_BATTLE_SLOT"
) => void;
export type PetJournalPetDeletedEvent = (
    frame: UIFrame,
    e: "PET_JOURNAL_PET_DELETED",
    battlePetGUID: string
) => void;
export type PetJournalPetRestoredEvent = (
    frame: UIFrame,
    e: "PET_JOURNAL_PET_RESTORED",
    battlePetGUID: string
) => void;
export type PetJournalPetRevokedEvent = (
    frame: UIFrame,
    e: "PET_JOURNAL_PET_REVOKED",
    battlePetGUID: string
) => void;
export type PetJournalPetsHealedEvent = (
    frame: UIFrame,
    e: "PET_JOURNAL_PETS_HEALED"
) => void;
export type PetJournalTrapLevelSetEvent = (
    frame: UIFrame,
    e: "PET_JOURNAL_TRAP_LEVEL_SET",
    trapLevel: number
) => void;
export type UpdateSummonpetsActionEvent = (
    frame: UIFrame,
    e: "UPDATE_SUMMONPETS_ACTION"
) => void;
