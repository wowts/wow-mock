import { UIFrame } from "../ui";

export const C_SpellBook = {
    ContainsAnyDisenchantSpell: (): boolean => {return false},
    GetSkillLineIndexByID: (skillLineID: number): number | undefined => {return 0},
    IsSpellDisabled: (spellID: number): boolean => {return false},
};
export type CurrentSpellCastChangedEvent = (frame: UIFrame, e: "CURRENT_SPELL_CAST_CHANGED", cancelledCast: boolean) => void
export type LearnedSpellInTabEvent = (frame: UIFrame, e: "LEARNED_SPELL_IN_TAB", spellID: number, skillInfoIndex: number, isGuildPerkSpell: boolean) => void
export type MaxSpellStartRecoveryOffsetChangedEvent = (frame: UIFrame, e: "MAX_SPELL_START_RECOVERY_OFFSET_CHANGED", clampedNewQueueWindowMs: number) => void
export type PlayerTotemUpdateEvent = (frame: UIFrame, e: "PLAYER_TOTEM_UPDATE", totemSlot: number) => void
export type SpellFlyoutUpdateEvent = (frame: UIFrame, e: "SPELL_FLYOUT_UPDATE", flyoutID: number | undefined, spellID: number | undefined, isLearned: boolean | undefined) => void
export type SpellPushedToActionbarEvent = (frame: UIFrame, e: "SPELL_PUSHED_TO_ACTIONBAR", spellID: number, slot: number, page: number) => void
export type SpellTextUpdateEvent = (frame: UIFrame, e: "SPELL_TEXT_UPDATE", spellID: number) => void
export type SpellUpdateChargesEvent = (frame: UIFrame, e: "SPELL_UPDATE_CHARGES") => void
export type SpellUpdateCooldownEvent = (frame: UIFrame, e: "SPELL_UPDATE_COOLDOWN") => void
export type SpellUpdateIconEvent = (frame: UIFrame, e: "SPELL_UPDATE_ICON") => void
export type SpellUpdateUsableEvent = (frame: UIFrame, e: "SPELL_UPDATE_USABLE") => void
export type SpellsChangedEvent = (frame: UIFrame, e: "SPELLS_CHANGED") => void
export type StartAutorepeatSpellEvent = (frame: UIFrame, e: "START_AUTOREPEAT_SPELL") => void
export type StopAutorepeatSpellEvent = (frame: UIFrame, e: "STOP_AUTOREPEAT_SPELL") => void
export type UnitSpellcastSentEvent = (frame: UIFrame, e: "UNIT_SPELLCAST_SENT", unit: string, target: string, castGUID: string, spellID: number) => void
export type UpdateShapeshiftCooldownEvent = (frame: UIFrame, e: "UPDATE_SHAPESHIFT_COOLDOWN") => void
export type UpdateShapeshiftFormEvent = (frame: UIFrame, e: "UPDATE_SHAPESHIFT_FORM") => void
export type UpdateShapeshiftFormsEvent = (frame: UIFrame, e: "UPDATE_SHAPESHIFT_FORMS") => void
export type UpdateShapeshiftUsableEvent = (frame: UIFrame, e: "UPDATE_SHAPESHIFT_USABLE") => void