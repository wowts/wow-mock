import { LuaArray } from "@wowts/lua";
import { ItemQuality } from "./api";
import { spellInfos } from "./spells";
import { UIFrame } from "./ui";

export * from "./ui";
export * from "./api";
export * from "./mixins";
export { SpellId } from "./spells";
export * from "./talents";

export interface ItemStats {
    ITEM_MOD_DAMAGE_PER_SECOND_SHORT?: number;
}

export interface FakeUnit {
    classId: ClassId;
    specializationIndex: 1 | 2 | 3 | 4;
    guid: string;
    unitId: string;
    name: string;
    dead: boolean;
    health: number;
    maxHealth: number;
}

export const fakePlayer: FakeUnit = {
    classId: "WARRIOR",
    guid: "dza849844",
    name: "Player",
    unitId: "player",
    specializationIndex: 1,
    dead: false,
    health: 1000,
    maxHealth: 2000,
};
export const fakeTarget: FakeUnit = {
    classId: "SHAMAN",
    guid: "adzdaza9898",
    name: "Target",
    unitId: "target",
    dead: false,
    specializationIndex: 1,
    health: 1000,
    maxHealth: 2000,
};
export const fakeUnits = new Map<string, FakeUnit>();
fakeUnits.set("player", fakePlayer);
fakeUnits.set("target", fakeTarget);

type ArenaUnitIndex = "1" | "2" | "3" | "4" | "5";
type PartyUnitIndex = "1" | "2" | "3" | "4";
type BossUnitIndex = "1" | "2" | "3" | "4";
type RaidUnitIndex =
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8"
    | "9"
    | "10"
    | "11"
    | "12"
    | "13"
    | "14"
    | "15"
    | "16"
    | "17"
    | "18"
    | "19"
    | "20"
    | "21"
    | "22"
    | "23"
    | "24"
    | "25"
    | "26"
    | "27"
    | "28"
    | "29"
    | "30"
    | "31"
    | "32"
    | "33"
    | "34"
    | "35"
    | "36"
    | "37"
    | "38"
    | "39"
    | "40";
type BaseUnitId =
    | `arena${ArenaUnitIndex}`
    | `boss${BossUnitIndex}`
    | "focus"
    | "mouseover"
    | "none"
    | `party${PartyUnitIndex}`
    | `partypet${PartyUnitIndex}`
    | "pet"
    | "player"
    | `raid${RaidUnitIndex}`
    | `raidpet${RaidUnitIndex}`
    | "target"
    | "vehicle"
    | `nameplate${RaidUnitIndex}`
    | "npc";
export type UnitId =
    | BaseUnitId
    | `${BaseUnitId}target`
    | `${BaseUnitId}targettarget`
    | string;

export type InventorySlotName =
    | "AMMOSLOT"
    | "HEADSLOT"
    | "NECKSLOT"
    | "SHOULDERSLOT"
    | "SHIRTSLOT"
    | "CHESTSLOT"
    | "WAISTSLOT"
    | "LEGSSLOT"
    | "FEETSLOT"
    | "WRISTSLOT"
    | "HANDSSLOT"
    | "FINGER0SLOT"
    | "FINGER1SLOT"
    | "TRINKET0SLOT"
    | "TRINKET1SLOT"
    | "BACKSLOT"
    | "MAINHANDSLOT"
    | "SECONDARYHANDSLOT"
    | "RANGEDSLOT"
    | "TABARDSLOT";

// WOW global functions
export function GetInventorySlotInfo(
    slotName: InventorySlotName
): [number, string] {
    return [0, ""];
}
export function GetItemStats(itemLink: string, statTable?: any[]): ItemStats {
    return {};
}
export function GetInventoryItemLink(unitId: UnitId, slotId: number): string {
    return "";
}

export function GetInventoryItemQuality(
    unitId: UnitId,
    slotId: number
): ItemQuality {
    return ItemQuality.Common;
}

export function GetHaste(): number {
    return 0;
}
export function UnitRangedDamage(
    player: string
): [number, number, number, number, number, number] {
    return [0, 0, 0, 0, 0, 0];
}
export function GetItemInfoInstant(
    item: string | number
): [number, string, string, string, number, number, number] {
    return [0, "", "", "", 0, 0, 0];
}
export function CombatLogGetCurrentEventInfo(): any[] {
    return [];
}
export function debugprofilestop() {
    return 10;
}
export function GetActionInfo(slot: number) {
    return ["a", "b", "c"];
}
export function GetActionText(slot: number) {
    return "ActionText";
}
export function GetBindingKey(key: string) {
    return "a";
}
export function GetBonusBarIndex() {}
export function GetItemInfo(itemId: number | string): any[] {
    return [];
}
export function GetMacroItem(spellId: number): any[] {
    return [];
}
export function GetMacroSpell(spellId: number): number {
    return 0;
}
export function GetSpellInfo(
    spellId: number | string,
    bookType?: string
): [
    string | undefined,
    string | undefined,
    string,
    number,
    number,
    number,
    number
] {
    if (typeof spellId === "number") {
        const spell = spellInfos[spellId];
        if (spell) {
            return [
                spell.name,
                undefined,
                "fake_icon",
                spell.castTime,
                spell.minRange,
                spell.maxRange,
                spellId,
            ];
        }
        return [undefined, undefined, "none", 0, 0, 0, 0];
    }
    return ["a", "b", "c", 0, 1, 2, 3];
}
export function GetTime() {
    return 10;
}
export function InterfaceOptionsFrame_OpenToCategory(frameName: string) {}
export function UnitAura(unitId: string, i: number, filter: string): any[] {
    return [];
}
export function UnitCanAttack(unit: string, target: string) {
    return false;
}
export function UnitClass(unit: string): [string?, ClassId?] {
    const fakeUnit = fakeUnits.get(unit);
    if (!fakeUnit) return [];
    return [fakeUnit.classId.toLowerCase(), fakeUnit.classId];
}
export function UnitExists(unit: string) {
    return fakeUnits.get(unit) !== undefined;
}
export function UnitGUID(unit: string) {
    return fakeUnits.get(unit)?.guid;
}
export function UnitHasVehicleUI(unit: string) {
    return false;
}
export function UnitIsDead(unit: string) {
    return fakeUnits.get(unit)?.dead;
}
export function UnitName(unitId: string) {
    return fakeUnits.get(unitId)?.name;
}
export function GetActionCooldown(action: number): [number, number, boolean] {
    return [0, 0, false];
}
export function GetActionTexture(action: number) {
    return "filepath";
}
export function GetItemIcon(itemId: number) {
    return "fakeicon";
}
export function GetItemCooldown(itemId: number): [number, number, boolean] {
    return [0, 0, false];
}
export function GetItemSpell(itemId: number): [string, string, number] {
    return ["spellName", "spellRank", 100];
}
export function GetSpellTexture(spellId: number, bookType?: string) {
    return "filepath";
}
export function IsActionInRange(action: number, target: string) {
    return true;
}
export function IsCurrentAction(action: number) {
    return false;
}
export function IsItemInRange(itemId: number, target: string) {
    return false;
}
export function IsUsableAction(action: number): boolean {
    return false;
}
export function IsUsableItem(itemId: number): boolean {
    return false;
}
export function GetNumGroupMembers(filter: number) {
    return 0;
}
export function UnitPower(unit: string, type: number, segments?: number) {
    return 0;
}
export function GetPowerRegen(): [number, number] {
    return [0, 0];
}
export function GetManaRegen(): [number, number] {
    return [0, 0];
}
export function GetSpellPowerCost(
    spellId: number
): LuaArray<{ cost: number; type: number }> {
    return { 1: { cost: 0, type: 0 } };
}
export function UnitPowerType(unit: string): [number, number] {
    return [0, 0];
}
export function IsInGroup(filter?: number) {
    return false;
}
export function IsInGuild() {
    return false;
}
export function IsInInstance() {
    return false;
}
export function IsInRaid(filter?: number) {
    return false;
}
export function UnitLevel(target: string) {
    return 0;
}
export function GetBuildInfo(): any[] {
    return [];
}
export function GetItemCount(item: string, first?: boolean, second?: boolean) {
    return 0;
}
export function GetNumTrackingTypes() {
    return 0;
}
export function GetTrackingInfo(i: number): any[] {
    return [];
}
export function GetUnitSpeed(unit: string): number {
    return 0;
}
export function GetWeaponEnchantInfo(): any[] {
    return [];
}
export function HasFullControl() {
    return false;
}
export function IsSpellOverlayed() {}
export function IsStealthed() {
    return false;
}
export function UnitCastingInfo(
    target: string
): [
    string | undefined,
    string,
    string,
    number,
    number,
    boolean,
    string,
    boolean,
    number
] {
    return [undefined, "text", "texture", 0, 0, false, "", false, 0];
}
export function UnitChannelInfo(target: string): any[] {
    return [];
}
export function UnitClassification(target: string) {
    return "worldboss";
}
export function UnitCreatureFamily(target: string) {
    return "Bat";
}
export function UnitCreatureType(target: string) {
    return "Beast";
}
export function UnitDetailedThreatSituation(
    unit: string,
    target: string
): any[] {
    return [];
}
export function UnitInRaid(unit: string) {
    return false;
}
export function UnitIsFriend(unit: string, target: string) {
    return false;
}
export function UnitIsPVP(unit: string) {
    return false;
}
export function UnitIsUnit(unit1: string, unit2: string) {
    return true;
}
export function UnitInParty(unit: string) {
    return false;
}
export function UnitPowerMax(
    unit: string,
    power: number,
    segment?: number
): number {
    return 0;
}
export function UnitRace(unit: string): any[] {
    return [];
}
export function UnitStagger(unit: string) {
    return 0;
}
export function GetSpellCharges(spellId: number): any[] {
    return [];
}
export function GetSpellCooldown(
    type: string | number,
    book?: string
): [number, number, boolean] {
    return [0, 0, false];
}
export function GetLocale() {
    return "en-US";
}
export function IsShiftKeyDown() {
    return false;
}
export type SpecializationIndex = 1 | 2 | 3 | 4;
export function GetSpecialization(): SpecializationIndex {
    return fakePlayer.specializationIndex;
}
export function GetSpecializationInfo(spec: number) {
    return 1;
}
export function GetNumSpecializations(
    isInspect: boolean,
    isPet: boolean
): number {
    return 0;
}
export function GetTalentInfoByID(talent: number, spec: number): any[] {
    return [];
}
export function GetAuctionItemSubClasses(item: number): any[] {
    return [];
}
export function GetInventoryItemID(unit: string, slot: number): number {
    return 0;
}
export function GetInventoryItemGems() {}
export function RegisterStateDriver(
    frame: UIFrame,
    property: string,
    state: any
) {}
export function UnitHealth(unit: string) {
    return fakeUnits.get(unit)?.health;
}
export function UnitHealthMax(unit: string) {
    return fakeUnits.get(unit)?.maxHealth;
}
export function UnitGetTotalHealAbsorbs(unit: string) {
    return 0;
}
export function UnitGetTotalAbsorbs(unit: string) {
    return 0;
}
export function PlaySoundFile(file: string) {}
export function GetCombatRating(combatRatingIdentifier: number) {
    return 0;
}
export function GetCombatRatingBonus(combatRatingIdentifier: number) {
    return 0;
}
export function GetCritChance() {
    return 0;
}
export function GetMastery() {
    return 0;
}
export function GetMasteryEffect() {
    return 0;
}
export function GetMeleeHaste() {
    return 0;
}
export function GetMultistrike() {
    return 0;
}
export function GetMultistrikeEffect() {
    return 0;
}
export function GetRangedCritChance() {
    return 0;
}
export function GetRangedHaste() {
    return 0;
}
export function GetSpellBonusDamage(school: number) {
    return 0;
}
export function GetSpellBonusHealing() {
    return 0;
}
export function GetSpellCritChance(school: number) {
    return 0;
}
export function UnitAttackPower(unitId: string) {
    return [0, 0, 0];
}
export function UnitAttackSpeed(unitId: string) {
    return [0, 0];
}
export function UnitDamage(unitId: string): number[] {
    return [];
}
export function UnitRangedAttackPower(unitId: string) {
    return [0, 0, 0];
}
export function UnitSpellHaste(unitId: string) {
    return 0;
}
export function UnitStat(unitId: string, stat: number) {
    return 0;
}
export function GetRuneCooldown(slot: number) {
    return [0, 0, 0];
}
export function SendAddonMessage(
    MSG_PREFIX: string,
    message: string,
    channel: string
) {}
export function print(s: any): void {}
export function GetActiveSpecGroup() {
    return 0;
}
export function GetFlyoutInfo(flyoutId: number): any[] {
    return [];
}
export function GetFlyoutSlotInfo(
    flyoutId: number,
    flyoutIndex: number
): any[] {
    return [];
}
export function GetSpellBookItemInfo(
    index: number | string,
    bookType?: string
): any[] {
    return [];
}
export function GetSpellCount(
    index: number | string,
    bookType?: string
): number {
    return 0;
}
export function GetSpellLink(index: number | string, bookType?: string) {
    return "aa";
}
export function GetSpellTabInfo(tab: number): any[] {
    return [];
}
export function GetTalentInfo(
    i: number,
    j: number,
    activeTalentGroup: number
): [
    number,
    string,
    string,
    number,
    number,
    number,
    number,
    number,
    number,
    number,
    number
] {
    return [123, "A Talent", "Texture/Path", 1, 1, 12345, 1, 1, 1, 1, 1];
}
export function HasPetSpells(): [number, string] {
    return [0, "a"];
}
export function IsHarmfulSpell(index: number | string, bookType?: string) {
    return false;
}
export function IsHelpfulSpell(index: number | string, bookType?: string) {
    return false;
}
export function IsSpellInRange(
    index: number | string,
    bookType?: string,
    unitId?: string
) {
    return 0;
}
export function IsUsableSpell(
    index: number | string,
    bookType?: string
): [boolean, boolean] {
    return [true, false];
}
export function IsSpellKnown(spellId: number, isPetSpell?: boolean) {
    return false;
}
export function GetNumShapeshiftForms() {
    return 0;
}
export function GetShapeshiftForm() {
    return 0;
}
export function GetShapeshiftFormInfo(index: number): any[] {
    return [];
}
export function GetTotemInfo(slot: number): any[] {
    return [];
}
export function IsLoggedIn() {
    return true;
}

// WoW global variables
export const MAX_COMBO_POINTS = 5;
export const UNKNOWN = -1;

export const INVSLOT_AMMO = 0;
export const INVSLOT_BACK = 15;
export const INVSLOT_BODY = 4;
export const INVSLOT_CHEST = 5;
export const INVSLOT_FEET = 8;
export const INVSLOT_FINGER1 = 11;
export const INVSLOT_FINGER2 = 12;
export const INVSLOT_FIRST_EQUIPPED = 1;
export const INVSLOT_HAND = 10;
export const INVSLOT_HEAD = 1;
export const INVSLOT_LAST_EQUIPPED = 19;
export const INVSLOT_LEGS = 7;
export const INVSLOT_MAINHAND = 16;
export const INVSLOT_NECK = 2;
export const INVSLOT_OFFHAND = 17;
export const INVSLOT_RANGED = 18;
export const INVSLOT_SHOULDER = 3;
export const INVSLOT_TABARD = 19;
export const INVSLOT_TRINKET1 = 13;
export const INVSLOT_TRINKET2 = 14;
export const INVSLOT_WAIST = 6;
export const INVSLOT_WRIST = 9;

// Correct
export const SPELL_POWER_MANA = 0;
export const SPELL_POWER_RAGE = 1;
export const SPELL_POWER_FOCUS = 2;
export const SPELL_POWER_ENERGY = 3;
export const SPELL_POWER_COMBO_POINTS = 4;
export const SPELL_POWER_RUNES = 5;
export const SPELL_POWER_RUNIC_POWER = 6;
export const SPELL_POWER_SOUL_SHARDS = 7;
export const SPELL_POWER_LUNAR_POWER = 8;
export const SPELL_POWER_HOLY_POWER = 9;
export const SPELL_POWER_ALTERNATE_POWER = 10;
export const SPELL_POWER_MAELSTROM = 11;
export const SPELL_POWER_CHI = 12;
export const SPELL_POWER_INSANITY = 13;
export const SPELL_POWER_ARCANE_CHARGES = 16;
export const SPELL_POWER_FURY = 17;
export const SPELL_POWER_PAIN = 18;

export const CHI_COST = "";
export const COMBO_POINTS_COST = "";
export const ENERGY_COST = "";
export const FOCUS_COST = "";
export const HOLY_POWER_COST = "";
export const MANA_COST = "";
export const RAGE_COST = "";
export const RUNIC_POWER_COST = "";
export const SOUL_SHARDS_COST = "";
export const LUNAR_POWER_COST = "";
export const INSANITY_COST = "";
export const MAELSTROM_COST = "";
export const ARCANE_CHARGES_COST = "";
export const PAIN_COST = "";
export const FURY_COST = "";

export const CR_CRIT_MELEE = 1;
export const CR_HASTE_MELEE = 2;
export const CR_VERSATILITY_DAMAGE_DONE = 3;

export const ITEM_LEVEL = "ITEM_LEVEL";

export const LE_PARTY_CATEGORY_INSTANCE = 1;
export const LE_PARTY_CATEGORY_HOME = 2;
export const _G: any = {};

export const BOOKTYPE_SPELL = "spell";
export const BOOKTYPE_PET = "pet";

export const MAX_TALENT_TIERS = 7;
export const NUM_TALENT_COLUMNS = 3;

export const RUNE_NAME = {};

export const PLAYER_CURRENCY_PDB_IN_BACKPACK = 1;
export const PLAYER_CURRENCY_PDB_UNUSED_IN_UI = 2;

export type ClassId = keyof typeof RAID_CLASS_COLORS;

export const RAID_CLASS_COLORS = {
    ["HUNTER"]: { r: 0.67, g: 0.83, b: 0.45, colorStr: "ffabd473" },
    ["WARLOCK"]: { r: 0.53, g: 0.53, b: 0.93, colorStr: "ff8788ee" },
    ["PRIEST"]: { r: 1.0, g: 1.0, b: 1.0, colorStr: "ffffffff" },
    ["PALADIN"]: { r: 0.96, g: 0.55, b: 0.73, colorStr: "fff58cba" },
    ["MAGE"]: { r: 0.25, g: 0.78, b: 0.92, colorStr: "ff3fc7eb" },
    ["ROGUE"]: { r: 1.0, g: 0.96, b: 0.41, colorStr: "fffff569" },
    ["DRUID"]: { r: 1.0, g: 0.49, b: 0.04, colorStr: "ffff7d0a" },
    ["SHAMAN"]: { r: 0.0, g: 0.44, b: 0.87, colorStr: "ff0070de" },
    ["WARRIOR"]: { r: 0.78, g: 0.61, b: 0.43, colorStr: "ffc79c6e" },
    ["DEATHKNIGHT"]: { r: 0.77, g: 0.12, b: 0.23, colorStr: "ffc41f3b" },
    ["MONK"]: { r: 0.0, g: 1.0, b: 0.59, colorStr: "ff00ff96" },
    ["DEMONHUNTER"]: { r: 0.64, g: 0.19, b: 0.79, colorStr: "ffa330c9" },
};

export const AIR_TOTEM_SLOT = 1;
export const EARTH_TOTEM_SLOT = 2;
export const FIRE_TOTEM_SLOT = 3;
export const WATER_TOTEM_SLOT = 4;
export const MAX_TOTEMS = 4;

export const COMBATLOG_OBJECT_AFFILIATION_MINE = 1;
export const COMBATLOG_OBJECT_AFFILIATION_PARTY = 2;
export const COMBATLOG_OBJECT_AFFILIATION_RAID = 3;
export const COMBATLOG_OBJECT_REACTION_FRIENDLY = 4;
