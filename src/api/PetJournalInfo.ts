import { UIFrame } from "../ui";
export const enum PetJournalError {
    None = 0,
    PetIsDead = 1,
    JournalIsLocked = 2,
    InvalidFaction = 3,
    NoFavoritesToSummon = 4,
    NoValidRandomSummon = 5,
    InvalidCovenant = 6
}
export const C_PetJournal = {
    GetDisplayIDByIndex: (speciesID: number, index: number): number | undefined => {return 0},
    GetDisplayProbabilityByIndex: (speciesID: number, index: number): number | undefined => {return 0},
    GetNumDisplays: (speciesID: number): number | undefined => {return 0},
    GetPetSummonInfo: (battlePetGUID: string): [isSummonable: boolean, error: PetJournalError, errorText: string] => {return [false, PetJournalError.None, '']},
    PetIsSummonable: (battlePetGUID: string): boolean => {return false},
    PetUsesRandomDisplay: (speciesID: number): boolean | undefined => {return false},
};
export type BattlepetForceNameDeclensionEvent = (frame: UIFrame, e: "BATTLEPET_FORCE_NAME_DECLENSION", name: string, battlePetGUID: string) => void
export type CompanionLearnedEvent = (frame: UIFrame, e: "COMPANION_LEARNED") => void
export type CompanionUnlearnedEvent = (frame: UIFrame, e: "COMPANION_UNLEARNED") => void
export type CompanionUpdateEvent = (frame: UIFrame, e: "COMPANION_UPDATE", companionType: string | undefined) => void
export type NewPetAddedEvent = (frame: UIFrame, e: "NEW_PET_ADDED", battlePetGUID: string) => void
export type PetJournalAutoSlottedPetEvent = (frame: UIFrame, e: "PET_JOURNAL_AUTO_SLOTTED_PET", slotIndex: number, battlePetGUID: string) => void
export type PetJournalCageFailedEvent = (frame: UIFrame, e: "PET_JOURNAL_CAGE_FAILED") => void
export type PetJournalListUpdateEvent = (frame: UIFrame, e: "PET_JOURNAL_LIST_UPDATE") => void
export type PetJournalNewBattleSlotEvent = (frame: UIFrame, e: "PET_JOURNAL_NEW_BATTLE_SLOT") => void
export type PetJournalPetDeletedEvent = (frame: UIFrame, e: "PET_JOURNAL_PET_DELETED", battlePetGUID: string) => void
export type PetJournalPetRestoredEvent = (frame: UIFrame, e: "PET_JOURNAL_PET_RESTORED", battlePetGUID: string) => void
export type PetJournalPetRevokedEvent = (frame: UIFrame, e: "PET_JOURNAL_PET_REVOKED", battlePetGUID: string) => void
export type PetJournalPetsHealedEvent = (frame: UIFrame, e: "PET_JOURNAL_PETS_HEALED") => void
export type PetJournalTrapLevelSetEvent = (frame: UIFrame, e: "PET_JOURNAL_TRAP_LEVEL_SET", trapLevel: number) => void
export type UpdateSummonpetsActionEvent = (frame: UIFrame, e: "UPDATE_SUMMONPETS_ACTION") => void