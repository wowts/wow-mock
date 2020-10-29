import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export const enum PhaseReason {
    Phasing = 0,
    Sharding = 1,
    WarMode = 2,
    ChromieTime = 3
}
export const enum PowerType {
    HealthCost = -2,
    None = -1,
    Mana = 0,
    Rage = 1,
    Focus = 2,
    Energy = 3,
    ComboPoints = 4,
    Runes = 5,
    RunicPower = 6,
    SoulShards = 7,
    LunarPower = 8,
    HolyPower = 9,
    Alternate = 10,
    Maelstrom = 11,
    Chi = 12,
    Insanity = 13,
    Obsolete = 14,
    Obsolete2 = 15,
    ArcaneCharges = 16,
    Fury = 17,
    Pain = 18,
    NumPowerTypes = 19
}
export const enum PvPUnitClassification {
    FlagCarrierHorde = 0,
    FlagCarrierAlliance = 1,
    FlagCarrierNeutral = 2,
    CartRunnerHorde = 3,
    CartRunnerAlliance = 4,
    AssassinHorde = 5,
    AssassinAlliance = 6,
    OrbCarrierBlue = 7,
    OrbCarrierGreen = 8,
    OrbCarrierOrange = 9,
    OrbCarrierPurple = 10
}
export interface CorruptionEffectInfo {
    name: string;
    description: string;
    minCorruption: number
}
export interface UnitPowerBarInfo {
    ID: number;
    barType: number;
    minPower: number;
    startInset: number;
    endInset: number;
    smooth: boolean;
    hideFromOthers: boolean;
    showOnRaid: boolean;
    opaqueSpark: boolean;
    opaqueFlash: boolean;
    anchorTop: boolean;
    forcePercentage: boolean;
    sparkUnderFrame: boolean;
    flashAtMinPower: boolean;
    fractionalCounter: boolean;
    animateNumbers: boolean
}
export function GetNegativeCorruptionEffectInfo(): LuaArray<CorruptionEffectInfo> {return {} as any}
export function GetUnitChargedPowerPoints(unit: string): LuaArray<number> {return {} as any}
export function GetUnitPowerBarInfo(unitToken: string): UnitPowerBarInfo {return {ID: 0, barType: 0, minPower: 0, startInset: 0, endInset: 0, smooth: false, hideFromOthers: false, showOnRaid: false, opaqueSpark: false, opaqueFlash: false, anchorTop: false, forcePercentage: false, sparkUnderFrame: false, flashAtMinPower: false, fractionalCounter: false, animateNumbers: false}}
export function GetUnitPowerBarInfoByID(barID: number): UnitPowerBarInfo {return {ID: 0, barType: 0, minPower: 0, startInset: 0, endInset: 0, smooth: false, hideFromOthers: false, showOnRaid: false, opaqueSpark: false, opaqueFlash: false, anchorTop: false, forcePercentage: false, sparkUnderFrame: false, flashAtMinPower: false, fractionalCounter: false, animateNumbers: false}}
export function GetUnitPowerBarStrings(unitToken: string): [name: string | undefined, tooltip: string | undefined, cost: string | undefined] {return ['', '', '']}
export function GetUnitPowerBarStringsByID(barID: number): [name: string | undefined, tooltip: string | undefined, cost: string | undefined] {return ['', '', '']}
export function GetUnitPowerBarTextureInfo(unitToken: string, textureIndex: number, timerIndex: number | undefined): [texture: number, colorR: number, colorG: number, colorB: number, colorA: number] {return [0, 0, 0, 0, 0]}
export function GetUnitPowerBarTextureInfoByID(barID: number, textureIndex: number): [texture: number, colorR: number, colorG: number, colorB: number, colorA: number] {return [0, 0, 0, 0, 0]}
export function IsUnitModelReadyForUI(unitToken: string): boolean {return false}
export function PlayerVehicleHasComboPoints(): boolean {return false}
export function SetPortraitTexture(textureObject: any, unitToken: string): void {}
export function SetPortraitTextureFromCreatureDisplayID(textureObject: any, creatureDisplayID: number): void {}
export function UnitAlliedRaceInfo(unit: string): [isAlliedRace: boolean, hasHeritageArmorUnlocked: boolean] {return [false, false]}
export function UnitChromieTimeID(unit: string): number {return 0}
export function UnitClass(unit: string): [className: string, classFilename: string, classID: number] {return ['', '', 0]}
export function UnitClassBase(unit: string): [classFilename: string, classID: number] {return ['', 0]}
export function UnitInPartyShard(unit: string): boolean {return false}
export function UnitIsConnected(unit: string): boolean {return false}
export function UnitIsOwnerOrControllerOfUnit(controllingUnit: string, controlledUnit: string): boolean {return false}
export function UnitNameplateShowsWidgetsOnly(unit: string): boolean {return false}
export function UnitPhaseReason(unit: string): PhaseReason | undefined {return PhaseReason.Phasing}
export function UnitPower(unitToken: string, powerType: PowerType, unmodified: boolean): number {return 0}
export function UnitPowerBarID(unitToken: string): number {return 0}
export function UnitPowerDisplayMod(powerType: PowerType): number {return 0}
export function UnitPowerMax(unitToken: string, powerType: PowerType, unmodified: boolean): number {return 0}
export function UnitPvpClassification(unit: string): PvPUnitClassification | undefined {return PvPUnitClassification.FlagCarrierHorde}
export function UnitQuestTrivialLevelRange(unit: string): number {return 0}
export function UnitQuestTrivialLevelRangeScaling(unit: string): number {return 0}
export function UnitSex(unit: string): number | undefined {return 0}
export function UnitTreatAsPlayerForDisplay(unit: string): boolean {return false}
export function UnitWidgetSet(unit: string): number {return 0}export type ArenaCooldownsUpdateEvent = (frame: UIFrame, e: "ARENA_COOLDOWNS_UPDATE", unitTarget: string) => void
export type ArenaCrowdControlSpellUpdateEvent = (frame: UIFrame, e: "ARENA_CROWD_CONTROL_SPELL_UPDATE", unitTarget: string, spellID: number) => void
export type AutofollowBeginEvent = (frame: UIFrame, e: "AUTOFOLLOW_BEGIN", name: string) => void
export type AutofollowEndEvent = (frame: UIFrame, e: "AUTOFOLLOW_END") => void
export type CancelSummonEvent = (frame: UIFrame, e: "CANCEL_SUMMON") => void
export type ConfirmBinderEvent = (frame: UIFrame, e: "CONFIRM_BINDER", areaName: string) => void
export type ConfirmSummonEvent = (frame: UIFrame, e: "CONFIRM_SUMMON", summonReason: number, skippingStartExperience: boolean) => void
export type HearthstoneBoundEvent = (frame: UIFrame, e: "HEARTHSTONE_BOUND") => void
export type HonorXpUpdateEvent = (frame: UIFrame, e: "HONOR_XP_UPDATE", unitTarget: string) => void
export type IncomingResurrectChangedEvent = (frame: UIFrame, e: "INCOMING_RESURRECT_CHANGED", unitTarget: string) => void
export type IncomingSummonChangedEvent = (frame: UIFrame, e: "INCOMING_SUMMON_CHANGED", unitTarget: string) => void
export type KnownTitlesUpdateEvent = (frame: UIFrame, e: "KNOWN_TITLES_UPDATE", unitTarget: string) => void
export type LocalplayerPetRenamedEvent = (frame: UIFrame, e: "LOCALPLAYER_PET_RENAMED") => void
export type MirrorTimerPauseEvent = (frame: UIFrame, e: "MIRROR_TIMER_PAUSE", timerName: string, paused: number) => void
export type MirrorTimerStartEvent = (frame: UIFrame, e: "MIRROR_TIMER_START", timerName: string, value: number, maxValue: number, scale: number, paused: number, timerLabel: string) => void
export type MirrorTimerStopEvent = (frame: UIFrame, e: "MIRROR_TIMER_STOP", timerName: string) => void
export type NeutralFactionSelectResultEvent = (frame: UIFrame, e: "NEUTRAL_FACTION_SELECT_RESULT", success: boolean) => void
export type ObjectEnteredAOIEvent = (frame: UIFrame, e: "OBJECT_ENTERED_AOI", guid: string) => void
export type ObjectLeftAOIEvent = (frame: UIFrame, e: "OBJECT_LEFT_AOI", guid: string) => void
export type PetBarUpdateUsableEvent = (frame: UIFrame, e: "PET_BAR_UPDATE_USABLE") => void
export type PetUiUpdateEvent = (frame: UIFrame, e: "PET_UI_UPDATE") => void
export type PlayerDamageDoneModsEvent = (frame: UIFrame, e: "PLAYER_DAMAGE_DONE_MODS", unitTarget: string) => void
export type PlayerEnterCombatEvent = (frame: UIFrame, e: "PLAYER_ENTER_COMBAT") => void
export type PlayerFarsightFocusChangedEvent = (frame: UIFrame, e: "PLAYER_FARSIGHT_FOCUS_CHANGED") => void
export type PlayerFlagsChangedEvent = (frame: UIFrame, e: "PLAYER_FLAGS_CHANGED", unitTarget: string) => void
export type PlayerFocusChangedEvent = (frame: UIFrame, e: "PLAYER_FOCUS_CHANGED") => void
export type PlayerLeaveCombatEvent = (frame: UIFrame, e: "PLAYER_LEAVE_COMBAT") => void
export type PlayerLevelChangedEvent = (frame: UIFrame, e: "PLAYER_LEVEL_CHANGED", oldLevel: number, newLevel: number, real: boolean) => void
export type PlayerLevelUpEvent = (frame: UIFrame, e: "PLAYER_LEVEL_UP", level: number, healthDelta: number, powerDelta: number, numNewTalents: number, numNewPvpTalentSlots: number, strengthDelta: number, agilityDelta: number, staminaDelta: number, intellectDelta: number) => void
export type PlayerMountDisplayChangedEvent = (frame: UIFrame, e: "PLAYER_MOUNT_DISPLAY_CHANGED") => void
export type PlayerPvpKillsChangedEvent = (frame: UIFrame, e: "PLAYER_PVP_KILLS_CHANGED", unitTarget: string) => void
export type PlayerPvpRankChangedEvent = (frame: UIFrame, e: "PLAYER_PVP_RANK_CHANGED", unitTarget: string) => void
export type PlayerRegenDisabledEvent = (frame: UIFrame, e: "PLAYER_REGEN_DISABLED") => void
export type PlayerRegenEnabledEvent = (frame: UIFrame, e: "PLAYER_REGEN_ENABLED") => void
export type PlayerSpecializationChangedEvent = (frame: UIFrame, e: "PLAYER_SPECIALIZATION_CHANGED", unitTarget: string) => void
export type PlayerStartedLookingEvent = (frame: UIFrame, e: "PLAYER_STARTED_LOOKING") => void
export type PlayerStartedMovingEvent = (frame: UIFrame, e: "PLAYER_STARTED_MOVING") => void
export type PlayerStartedTurningEvent = (frame: UIFrame, e: "PLAYER_STARTED_TURNING") => void
export type PlayerStoppedLookingEvent = (frame: UIFrame, e: "PLAYER_STOPPED_LOOKING") => void
export type PlayerStoppedMovingEvent = (frame: UIFrame, e: "PLAYER_STOPPED_MOVING") => void
export type PlayerStoppedTurningEvent = (frame: UIFrame, e: "PLAYER_STOPPED_TURNING") => void
export type PlayerTargetChangedEvent = (frame: UIFrame, e: "PLAYER_TARGET_CHANGED") => void
export type PlayerTrialXpUpdateEvent = (frame: UIFrame, e: "PLAYER_TRIAL_XP_UPDATE", unitTarget: string) => void
export type PlayerUpdateRestingEvent = (frame: UIFrame, e: "PLAYER_UPDATE_RESTING") => void
export type PlayerXpUpdateEvent = (frame: UIFrame, e: "PLAYER_XP_UPDATE", unitTarget: string) => void
export type PortraitsUpdatedEvent = (frame: UIFrame, e: "PORTRAITS_UPDATED") => void
export type ProvingGroundsScoreUpdateEvent = (frame: UIFrame, e: "PROVING_GROUNDS_SCORE_UPDATE", points: number) => void
export type PvpTimerUpdateEvent = (frame: UIFrame, e: "PVP_TIMER_UPDATE", unitTarget: string) => void
export type RunePowerUpdateEvent = (frame: UIFrame, e: "RUNE_POWER_UPDATE", runeIndex: number, added: boolean | undefined) => void
export type ShowFactionSelectUiEvent = (frame: UIFrame, e: "SHOW_FACTION_SELECT_UI") => void
export type SpellConfirmationPromptEvent = (frame: UIFrame, e: "SPELL_CONFIRMATION_PROMPT", spellID: number, effectValue: number, message: string, duration: number, currencyTypesID: number, currencyCost: number, currentDifficulty: number) => void
export type SpellConfirmationTimeoutEvent = (frame: UIFrame, e: "SPELL_CONFIRMATION_TIMEOUT", spellID: number, effectValue: number) => void
export type UnitAbsorbAmountChangedEvent = (frame: UIFrame, e: "UNIT_ABSORB_AMOUNT_CHANGED", unitTarget: string) => void
export type UnitAreaChangedEvent = (frame: UIFrame, e: "UNIT_AREA_CHANGED", unitTarget: string) => void
export type UnitAttackEvent = (frame: UIFrame, e: "UNIT_ATTACK", unitTarget: string) => void
export type UnitAttackPowerEvent = (frame: UIFrame, e: "UNIT_ATTACK_POWER", unitTarget: string) => void
export type UnitAttackSpeedEvent = (frame: UIFrame, e: "UNIT_ATTACK_SPEED", unitTarget: string) => void
export type UnitAuraEvent = (frame: UIFrame, e: "UNIT_AURA", unitTarget: string) => void
export type UnitCheatToggleEventEvent = (frame: UIFrame, e: "UNIT_CHEAT_TOGGLE_EVENT") => void
export type UnitClassificationChangedEvent = (frame: UIFrame, e: "UNIT_CLASSIFICATION_CHANGED", unitTarget: string) => void
export type UnitCombatEvent = (frame: UIFrame, e: "UNIT_COMBAT", unitTarget: string, event: string, flagText: string, amount: number, schoolMask: number) => void
export type UnitConnectionEvent = (frame: UIFrame, e: "UNIT_CONNECTION", unitTarget: string, isConnected: boolean) => void
export type UnitCtrOptionsEvent = (frame: UIFrame, e: "UNIT_CTR_OPTIONS", unitTarget: string) => void
export type UnitDamageEvent = (frame: UIFrame, e: "UNIT_DAMAGE", unitTarget: string) => void
export type UnitDefenseEvent = (frame: UIFrame, e: "UNIT_DEFENSE", unitTarget: string) => void
export type UnitDisplaypowerEvent = (frame: UIFrame, e: "UNIT_DISPLAYPOWER", unitTarget: string) => void
export type UnitFactionEvent = (frame: UIFrame, e: "UNIT_FACTION", unitTarget: string) => void
export type UnitFlagsEvent = (frame: UIFrame, e: "UNIT_FLAGS", unitTarget: string) => void
export type UnitHealAbsorbAmountChangedEvent = (frame: UIFrame, e: "UNIT_HEAL_ABSORB_AMOUNT_CHANGED", unitTarget: string) => void
export type UnitHealPredictionEvent = (frame: UIFrame, e: "UNIT_HEAL_PREDICTION", unitTarget: string) => void
export type UnitHealthEvent = (frame: UIFrame, e: "UNIT_HEALTH", unitTarget: string) => void
export type UnitInventoryChangedEvent = (frame: UIFrame, e: "UNIT_INVENTORY_CHANGED", unitTarget: string) => void
export type UnitLevelEvent = (frame: UIFrame, e: "UNIT_LEVEL", unitTarget: string) => void
export type UnitManaEvent = (frame: UIFrame, e: "UNIT_MANA", unitTarget: string) => void
export type UnitMaxhealthEvent = (frame: UIFrame, e: "UNIT_MAXHEALTH", unitTarget: string) => void
export type UnitMaxpowerEvent = (frame: UIFrame, e: "UNIT_MAXPOWER", unitTarget: string, powerType: string) => void
export type UnitModelChangedEvent = (frame: UIFrame, e: "UNIT_MODEL_CHANGED", unitTarget: string) => void
export type UnitNameUpdateEvent = (frame: UIFrame, e: "UNIT_NAME_UPDATE", unitTarget: string) => void
export type UnitOtherPartyChangedEvent = (frame: UIFrame, e: "UNIT_OTHER_PARTY_CHANGED", unitTarget: string) => void
export type UnitPetEvent = (frame: UIFrame, e: "UNIT_PET", unitTarget: string) => void
export type UnitPetExperienceEvent = (frame: UIFrame, e: "UNIT_PET_EXPERIENCE", unitTarget: string) => void
export type UnitPhaseEvent = (frame: UIFrame, e: "UNIT_PHASE", unitTarget: string) => void
export type UnitPortraitUpdateEvent = (frame: UIFrame, e: "UNIT_PORTRAIT_UPDATE", unitTarget: string) => void
export type UnitPowerBarHideEvent = (frame: UIFrame, e: "UNIT_POWER_BAR_HIDE", unitTarget: string) => void
export type UnitPowerBarShowEvent = (frame: UIFrame, e: "UNIT_POWER_BAR_SHOW", unitTarget: string) => void
export type UnitPowerBarTimerUpdateEvent = (frame: UIFrame, e: "UNIT_POWER_BAR_TIMER_UPDATE", unitTarget: string) => void
export type UnitPowerFrequentEvent = (frame: UIFrame, e: "UNIT_POWER_FREQUENT", unitTarget: string, powerType: string) => void
export type UnitPowerPointChargeEvent = (frame: UIFrame, e: "UNIT_POWER_POINT_CHARGE", unitTarget: string) => void
export type UnitPowerUpdateEvent = (frame: UIFrame, e: "UNIT_POWER_UPDATE", unitTarget: string, powerType: string) => void
export type UnitQuestLogChangedEvent = (frame: UIFrame, e: "UNIT_QUEST_LOG_CHANGED", unitTarget: string) => void
export type UnitRangedAttackPowerEvent = (frame: UIFrame, e: "UNIT_RANGED_ATTACK_POWER", unitTarget: string) => void
export type UnitRangeddamageEvent = (frame: UIFrame, e: "UNIT_RANGEDDAMAGE", unitTarget: string) => void
export type UnitResistancesEvent = (frame: UIFrame, e: "UNIT_RESISTANCES", unitTarget: string) => void
export type UnitSpellHasteEvent = (frame: UIFrame, e: "UNIT_SPELL_HASTE", unitTarget: string) => void
export type UnitSpellcastChannelStartEvent = (frame: UIFrame, e: "UNIT_SPELLCAST_CHANNEL_START", unitTarget: string, castGUID: string, spellID: number) => void
export type UnitSpellcastChannelStopEvent = (frame: UIFrame, e: "UNIT_SPELLCAST_CHANNEL_STOP", unitTarget: string, castGUID: string, spellID: number) => void
export type UnitSpellcastChannelUpdateEvent = (frame: UIFrame, e: "UNIT_SPELLCAST_CHANNEL_UPDATE", unitTarget: string, castGUID: string, spellID: number) => void
export type UnitSpellcastDelayedEvent = (frame: UIFrame, e: "UNIT_SPELLCAST_DELAYED", unitTarget: string, castGUID: string, spellID: number) => void
export type UnitSpellcastFailedEvent = (frame: UIFrame, e: "UNIT_SPELLCAST_FAILED", unitTarget: string, castGUID: string, spellID: number) => void
export type UnitSpellcastFailedQuietEvent = (frame: UIFrame, e: "UNIT_SPELLCAST_FAILED_QUIET", unitTarget: string, castGUID: string, spellID: number) => void
export type UnitSpellcastInterruptedEvent = (frame: UIFrame, e: "UNIT_SPELLCAST_INTERRUPTED", unitTarget: string, castGUID: string, spellID: number) => void
export type UnitSpellcastInterruptibleEvent = (frame: UIFrame, e: "UNIT_SPELLCAST_INTERRUPTIBLE", unitTarget: string) => void
export type UnitSpellcastNotInterruptibleEvent = (frame: UIFrame, e: "UNIT_SPELLCAST_NOT_INTERRUPTIBLE", unitTarget: string) => void
export type UnitSpellcastStartEvent = (frame: UIFrame, e: "UNIT_SPELLCAST_START", unitTarget: string, castGUID: string, spellID: number) => void
export type UnitSpellcastStopEvent = (frame: UIFrame, e: "UNIT_SPELLCAST_STOP", unitTarget: string, castGUID: string, spellID: number) => void
export type UnitSpellcastSucceededEvent = (frame: UIFrame, e: "UNIT_SPELLCAST_SUCCEEDED", unitTarget: string, castGUID: string, spellID: number) => void
export type UnitStatsEvent = (frame: UIFrame, e: "UNIT_STATS", unitTarget: string) => void
export type UnitTargetEvent = (frame: UIFrame, e: "UNIT_TARGET", unitTarget: string) => void
export type UnitTargetableChangedEvent = (frame: UIFrame, e: "UNIT_TARGETABLE_CHANGED", unitTarget: string) => void
export type UnitThreatListUpdateEvent = (frame: UIFrame, e: "UNIT_THREAT_LIST_UPDATE", unitTarget: string) => void
export type UnitThreatSituationUpdateEvent = (frame: UIFrame, e: "UNIT_THREAT_SITUATION_UPDATE", unitTarget: string) => void
export type UpdateExhaustionEvent = (frame: UIFrame, e: "UPDATE_EXHAUSTION") => void
export type UpdateMouseoverUnitEvent = (frame: UIFrame, e: "UPDATE_MOUSEOVER_UNIT") => void
export type UpdateStealthEvent = (frame: UIFrame, e: "UPDATE_STEALTH") => void
export type VehicleAngleUpdateEvent = (frame: UIFrame, e: "VEHICLE_ANGLE_UPDATE", normalizedPitch: number, radians: number) => void