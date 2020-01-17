"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spells_1 = require("./spells");
class EventDispatcher {
    constructor() {
        this.events = {};
    }
    RegisterEvent(frame, event) {
        let events = this.events[event];
        if (!events) {
            this.events[event] = events = [];
        }
        events.push(frame);
    }
    DispatchEvent(event, ...params) {
        const events = this.events[event];
        if (!events)
            return;
        for (const frame of events) {
            const handler = frame.scriptHandlers["OnEvent"];
            if (!handler)
                continue;
            handler(frame, event, ...params);
        }
    }
}
exports.EventDispatcher = EventDispatcher;
exports.eventDispatcher = new EventDispatcher();
class FakeFrame {
    constructor() {
        this.scriptHandlers = {};
        this.mouseEnabled = true;
        this.shown = true;
        this.movable = true;
        this.alpha = 1;
        this.width = 0;
        this.height = 0;
        this.scale = 1;
        this.visible = true;
        this.parent = undefined;
        this.x = 0;
        this.y = 0;
        this.attributes = new Map();
    }
    RegisterEvent(event) {
        exports.eventDispatcher.RegisterEvent(this, event);
    }
    SetAlpha(value) {
        this.alpha = value;
    }
    SetScript(event, func) {
        this.scriptHandlers[event] = func;
    }
    StartMoving() {
    }
    StopMovingOrSizing() {
    }
    SetMovable(movable) {
        this.movable = movable;
    }
    SetFrameStrata(strata) {
        this.strata = strata;
    }
    Show() {
        this.shown = true;
    }
    Hide() {
        this.shown = false;
    }
    IsShown() {
        return this.shown;
    }
    CreateTexture() {
        return new FakeUITexture();
    }
    EnableMouse(enabled) {
        this.mouseEnabled = enabled;
    }
    CreateFontString(name, layer, inherits) {
        return new FakeFontString();
    }
    SetAttribute(key, value) {
        this.attributes.set(key, value);
    }
    SetScale(scale) {
        this.scale = scale;
    }
    IsVisible() {
        return this.visible;
    }
    CanChangeProtectedState() {
        return true;
    }
    ClearAllPoints() {
        this.x = 0;
        this.y = 0;
        this.height = 0;
        this.width = 0;
    }
    GetCenter() {
        return [this.width / 2 + this.x, this.height / 2 + this.y];
    }
    GetWidth() {
        return this.width;
    }
    GetHeight() {
        return this.height;
    }
    GetParent() {
        return this.parent;
    }
    SetParent(parent) {
        this.parent = parent;
    }
    SetAllPoints(around) {
    }
    SetPoint(anchor, reference, refAnchor, x, y) {
        this.x = x;
        this.y = y;
    }
    SetWidth(width) {
        this.width = width;
    }
    SetHeight(height) {
        this.height = height;
    }
}
exports.FakeFrame = FakeFrame;
class FakeFontString extends FakeFrame {
    constructor() {
        super(...arguments);
        this.text = "";
        this.font = { font: "", height: 0, flags: 0 };
    }
    SetText(text) {
        this.text = text;
    }
    SetFont(font, height, flags) {
        this.font.font = font;
        this.font.height = height;
        this.font.flags = flags;
    }
    SetFontObject(name) {
    }
    SetTextColor(r, g, b, alpha) {
    }
    SetFormattedText(text, ...args) {
    }
    SetVertexColor(r, g, b, alpha) {
    }
    SetJustifyH(justify) {
    }
    GetFont() {
        return [this.font.font, this.font.height, this.font.flags];
    }
}
exports.FakeFontString = FakeFontString;
class FakeUITexture extends FakeFrame {
    constructor() {
        super(...arguments);
        this.r = 0;
        this.g = 0;
        this.b = 0;
    }
    SetTexture(name) {
        this.texture = name;
    }
    SetColorTexture(r, g, b, alpha) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.alpha = alpha || 1;
    }
    SetVertexColor(r, g, b, alpha) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.alpha = alpha || 1;
    }
}
exports.FakeUITexture = FakeUITexture;
class FakeMessageFrame extends FakeFrame {
    constructor() {
        super(...arguments);
        this.messages = [];
    }
    AddMessage(message) {
        this.messages.push(message);
        console.log(message);
    }
    GetNumMessages() {
        return this.messages.length;
    }
    GetMessageInfo(i) {
        return this.messages[i];
    }
}
exports.FakeMessageFrame = FakeMessageFrame;
class FakeGameTooltip extends FakeFrame {
    constructor() {
        super(...arguments);
        this.lines = [];
    }
    SetOwner(frame, anchor) { }
    SetText(text, r, g, b) {
        this.text = text;
    }
    AddLine(text, r, g, b) {
        this.lines.push(text);
    }
    ClearLines() { }
    SetInventoryItem(unit, slot) { }
    NumLines() {
        return this.lines.length;
    }
    GetText() {
        return this.text;
    }
}
exports.FakeGameTooltip = FakeGameTooltip;
class FakeCheckButton extends FakeFrame {
    constructor() {
        super(...arguments);
        this.isChecked = false;
    }
    SetChecked(checked) {
        this.isChecked = checked;
    }
    GetChecked() {
        return this.isChecked;
    }
    RegisterForClicks(type) {
    }
}
exports.FakeCheckButton = FakeCheckButton;
class FakeDropdown extends FakeFrame {
}
exports.FakeDropdown = FakeDropdown;
// WOW global functions
function GetInventorySlotInfo(slotName) { return [0, '']; }
exports.GetInventorySlotInfo = GetInventorySlotInfo;
function GetItemStats(itemLink, statTable) { return {}; }
exports.GetItemStats = GetItemStats;
function GetInventoryItemLink(unitId, slotId) { return ''; }
exports.GetInventoryItemLink = GetInventoryItemLink;
function GetHaste() { return 0; }
exports.GetHaste = GetHaste;
function UnitRangedDamage(player) { return [0, 0, 0, 0, 0, 0]; }
exports.UnitRangedDamage = UnitRangedDamage;
function GetItemInfoInstant(item) { return [0, '', '', '', 0, 0, 0]; }
exports.GetItemInfoInstant = GetItemInfoInstant;
;
function CombatLogGetCurrentEventInfo() { return []; }
exports.CombatLogGetCurrentEventInfo = CombatLogGetCurrentEventInfo;
function debugprofilestop() { return 10; }
exports.debugprofilestop = debugprofilestop;
function GetActionInfo(slot) { return ["a", "b", "c"]; }
exports.GetActionInfo = GetActionInfo;
function GetActionText(slot) { return "ActionText"; }
exports.GetActionText = GetActionText;
function GetBindingKey(key) { return "a"; }
exports.GetBindingKey = GetBindingKey;
function GetBonusBarIndex() { }
exports.GetBonusBarIndex = GetBonusBarIndex;
function GetItemInfo(itemId) { return []; }
exports.GetItemInfo = GetItemInfo;
function GetMacroItem(spellId) { return []; }
exports.GetMacroItem = GetMacroItem;
function GetMacroSpell(spellId) { return 0; }
exports.GetMacroSpell = GetMacroSpell;
function GetSpellInfo(spellId, bookType) {
    if (typeof (spellId) === "number") {
        const spell = spells_1.spellInfos[spellId];
        if (spell) {
            return [spell.name, undefined, "fake_icon", spell.castTime, spell.minRange, spell.maxRange, spellId];
        }
        return [undefined, undefined, "none", 0, 0, 0, 0];
    }
    return ["a", "b", "c", 0, 1, 2, 3];
}
exports.GetSpellInfo = GetSpellInfo;
function GetTime() { return 10; }
exports.GetTime = GetTime;
function InterfaceOptionsFrame_OpenToCategory(frameName) { }
exports.InterfaceOptionsFrame_OpenToCategory = InterfaceOptionsFrame_OpenToCategory;
function UnitAura(unitId, i, filter) { return []; }
exports.UnitAura = UnitAura;
function UnitCanAttack(unit, target) { return false; }
exports.UnitCanAttack = UnitCanAttack;
function UnitClass(unit) { return ["Warrior", "WARRIOR"]; }
exports.UnitClass = UnitClass;
function UnitExists(unit) { return false; }
exports.UnitExists = UnitExists;
function UnitGUID(unit) { return "aaaa"; }
exports.UnitGUID = UnitGUID;
function UnitHasVehicleUI(unit) { return false; }
exports.UnitHasVehicleUI = UnitHasVehicleUI;
function UnitIsDead(unit) { return false; }
exports.UnitIsDead = UnitIsDead;
function UnitName(unitId) { return "Esside"; }
exports.UnitName = UnitName;
function GetActionCooldown(action) { return [0, 0, false]; }
exports.GetActionCooldown = GetActionCooldown;
function GetActionTexture(action) { return "filepath"; }
exports.GetActionTexture = GetActionTexture;
function GetItemIcon(itemId) { return "fakeicon"; }
exports.GetItemIcon = GetItemIcon;
function GetItemCooldown(itemId) { return [0, 0, false]; }
exports.GetItemCooldown = GetItemCooldown;
function GetItemSpell(itemId) { return ["spellName", "spellRank", 100]; }
exports.GetItemSpell = GetItemSpell;
function GetSpellTexture(spellId, bookType) { return "filepath"; }
exports.GetSpellTexture = GetSpellTexture;
function IsActionInRange(action, target) { return true; }
exports.IsActionInRange = IsActionInRange;
function IsCurrentAction(action) { return false; }
exports.IsCurrentAction = IsCurrentAction;
function IsItemInRange(itemId, target) { return false; }
exports.IsItemInRange = IsItemInRange;
function IsUsableAction(action) { return false; }
exports.IsUsableAction = IsUsableAction;
function IsUsableItem(itemId) { return false; }
exports.IsUsableItem = IsUsableItem;
function GetNumGroupMembers(filter) { return 0; }
exports.GetNumGroupMembers = GetNumGroupMembers;
function UnitPower(unit, type, segments) { return 0; }
exports.UnitPower = UnitPower;
function GetPowerRegen() { return [0, 0]; }
exports.GetPowerRegen = GetPowerRegen;
function GetManaRegen() { return [0, 0]; }
exports.GetManaRegen = GetManaRegen;
function GetSpellPowerCost(spellId) { return { 1: { cost: 0, type: 0 } }; }
exports.GetSpellPowerCost = GetSpellPowerCost;
function UnitPowerType(unit) { return [0, 0]; }
exports.UnitPowerType = UnitPowerType;
function IsInGroup(filter) { return false; }
exports.IsInGroup = IsInGroup;
function IsInGuild() { return false; }
exports.IsInGuild = IsInGuild;
function IsInInstance() { return false; }
exports.IsInInstance = IsInInstance;
function IsInRaid(filter) { return false; }
exports.IsInRaid = IsInRaid;
function UnitLevel(target) { return 0; }
exports.UnitLevel = UnitLevel;
function GetBuildInfo() { return []; }
exports.GetBuildInfo = GetBuildInfo;
function GetItemCount(item, first, second) { return 0; }
exports.GetItemCount = GetItemCount;
function GetNumTrackingTypes() { return 0; }
exports.GetNumTrackingTypes = GetNumTrackingTypes;
function GetTrackingInfo(i) { return []; }
exports.GetTrackingInfo = GetTrackingInfo;
function GetUnitSpeed(unit) { return 0; }
exports.GetUnitSpeed = GetUnitSpeed;
function GetWeaponEnchantInfo() { return []; }
exports.GetWeaponEnchantInfo = GetWeaponEnchantInfo;
function HasFullControl() { return false; }
exports.HasFullControl = HasFullControl;
function IsSpellOverlayed() { }
exports.IsSpellOverlayed = IsSpellOverlayed;
function IsStealthed() { return false; }
exports.IsStealthed = IsStealthed;
function UnitCastingInfo(target) { return [undefined, "text", "texture", 0, 0, false, "", false, 0]; }
exports.UnitCastingInfo = UnitCastingInfo;
function UnitChannelInfo(target) { return []; }
exports.UnitChannelInfo = UnitChannelInfo;
function UnitClassification(target) { return "worldboss"; }
exports.UnitClassification = UnitClassification;
function UnitCreatureFamily(target) { return "Bat"; }
exports.UnitCreatureFamily = UnitCreatureFamily;
function UnitCreatureType(target) { return "Beast"; }
exports.UnitCreatureType = UnitCreatureType;
function UnitDetailedThreatSituation(unit, target) { return []; }
exports.UnitDetailedThreatSituation = UnitDetailedThreatSituation;
function UnitInRaid(unit) { return false; }
exports.UnitInRaid = UnitInRaid;
function UnitIsFriend(unit, target) { return false; }
exports.UnitIsFriend = UnitIsFriend;
function UnitIsPVP(unit) { return false; }
exports.UnitIsPVP = UnitIsPVP;
function UnitIsUnit(unit1, unit2) { return true; }
exports.UnitIsUnit = UnitIsUnit;
function UnitInParty(unit) { return false; }
exports.UnitInParty = UnitInParty;
function UnitPowerMax(unit, power, segment) { return 0; }
exports.UnitPowerMax = UnitPowerMax;
function UnitRace(unit) { return []; }
exports.UnitRace = UnitRace;
function UnitStagger(unit) { return 0; }
exports.UnitStagger = UnitStagger;
function GetSpellCharges(spellId) { return []; }
exports.GetSpellCharges = GetSpellCharges;
function GetSpellCooldown(type, book) { return [0, 0, false]; }
exports.GetSpellCooldown = GetSpellCooldown;
function GetLocale() { return "en-US"; }
exports.GetLocale = GetLocale;
function CreateFrame(type, id, parent, template) {
    switch (type) {
        case "GameTooltip":
            return new FakeGameTooltip();
        case "CheckButton":
            return new FakeCheckButton();
        case "DropDown":
            return new FakeDropdown();
        default:
            return new FakeFrame();
    }
}
exports.CreateFrame = CreateFrame;
function EasyMenu(menu, menuFrame, cursor, x, y, menuType, autoHideDelay) { }
exports.EasyMenu = EasyMenu;
function IsShiftKeyDown() { return false; }
exports.IsShiftKeyDown = IsShiftKeyDown;
function GetSpecialization() { return 1; }
exports.GetSpecialization = GetSpecialization;
function GetSpecializationInfo(spec) { return 1; }
exports.GetSpecializationInfo = GetSpecializationInfo;
function GetNumSpecializations(isInspect, isPet) { return 0; }
exports.GetNumSpecializations = GetNumSpecializations;
function GetTalentInfoByID(talent, spec) { return []; }
exports.GetTalentInfoByID = GetTalentInfoByID;
function GetAuctionItemSubClasses(item) { return []; }
exports.GetAuctionItemSubClasses = GetAuctionItemSubClasses;
function GetInventoryItemID(unit, slot) { return 0; }
exports.GetInventoryItemID = GetInventoryItemID;
function GetInventoryItemGems() { }
exports.GetInventoryItemGems = GetInventoryItemGems;
function RegisterStateDriver(frame, property, state) { }
exports.RegisterStateDriver = RegisterStateDriver;
function UnitHealth(unit) { return 0; }
exports.UnitHealth = UnitHealth;
function UnitHealthMax(unit) { return 0; }
exports.UnitHealthMax = UnitHealthMax;
function UnitGetTotalHealAbsorbs(unit) { return 0; }
exports.UnitGetTotalHealAbsorbs = UnitGetTotalHealAbsorbs;
function UnitGetTotalAbsorbs(unit) { return 0; }
exports.UnitGetTotalAbsorbs = UnitGetTotalAbsorbs;
function PlaySoundFile(file) { }
exports.PlaySoundFile = PlaySoundFile;
function GetCombatRating(combatRatingIdentifier) { return 0; }
exports.GetCombatRating = GetCombatRating;
function GetCombatRatingBonus(combatRatingIdentifier) { return 0; }
exports.GetCombatRatingBonus = GetCombatRatingBonus;
function GetCritChance() { return 0; }
exports.GetCritChance = GetCritChance;
function GetMastery() { return 0; }
exports.GetMastery = GetMastery;
function GetMasteryEffect() { return 0; }
exports.GetMasteryEffect = GetMasteryEffect;
function GetMeleeHaste() { return 0; }
exports.GetMeleeHaste = GetMeleeHaste;
function GetMultistrike() { return 0; }
exports.GetMultistrike = GetMultistrike;
function GetMultistrikeEffect() { return 0; }
exports.GetMultistrikeEffect = GetMultistrikeEffect;
function GetRangedCritChance() { return 0; }
exports.GetRangedCritChance = GetRangedCritChance;
function GetRangedHaste() { return 0; }
exports.GetRangedHaste = GetRangedHaste;
function GetSpellBonusDamage(school) { return 0; }
exports.GetSpellBonusDamage = GetSpellBonusDamage;
function GetSpellBonusHealing() { return 0; }
exports.GetSpellBonusHealing = GetSpellBonusHealing;
function GetSpellCritChance(school) { return 0; }
exports.GetSpellCritChance = GetSpellCritChance;
function UnitAttackPower(unitId) { return [0, 0, 0]; }
exports.UnitAttackPower = UnitAttackPower;
function UnitAttackSpeed(unitId) { return [0, 0]; }
exports.UnitAttackSpeed = UnitAttackSpeed;
function UnitDamage(unitId) { return []; }
exports.UnitDamage = UnitDamage;
function UnitRangedAttackPower(unitId) { return [0, 0, 0]; }
exports.UnitRangedAttackPower = UnitRangedAttackPower;
function UnitSpellHaste(unitId) { return 0; }
exports.UnitSpellHaste = UnitSpellHaste;
function UnitStat(unitId, stat) { return 0; }
exports.UnitStat = UnitStat;
function GetRuneCooldown(slot) { return [0, 0, 0]; }
exports.GetRuneCooldown = GetRuneCooldown;
function SendAddonMessage(MSG_PREFIX, message, channel) { }
exports.SendAddonMessage = SendAddonMessage;
function print(s) { }
exports.print = print;
function GetActiveSpecGroup() { return 0; }
exports.GetActiveSpecGroup = GetActiveSpecGroup;
function GetFlyoutInfo(flyoutId) { return []; }
exports.GetFlyoutInfo = GetFlyoutInfo;
function GetFlyoutSlotInfo(flyoutId, flyoutIndex) { return []; }
exports.GetFlyoutSlotInfo = GetFlyoutSlotInfo;
function GetSpellBookItemInfo(index, bookType) { return []; }
exports.GetSpellBookItemInfo = GetSpellBookItemInfo;
function GetSpellCount(index, bookType) { return 0; }
exports.GetSpellCount = GetSpellCount;
function GetSpellLink(index, bookType) { return "aa"; }
exports.GetSpellLink = GetSpellLink;
function GetSpellTabInfo(tab) { return []; }
exports.GetSpellTabInfo = GetSpellTabInfo;
function GetTalentInfo(i, j, activeTalentGroup) {
    return [123, "A Talent", "Texture/Path", 1, 1, 12345, 1, 1, 1, 1, 1];
}
exports.GetTalentInfo = GetTalentInfo;
function HasPetSpells() { return [0, "a"]; }
exports.HasPetSpells = HasPetSpells;
function IsHarmfulSpell(index, bookType) { return false; }
exports.IsHarmfulSpell = IsHarmfulSpell;
function IsHelpfulSpell(index, bookType) { return false; }
exports.IsHelpfulSpell = IsHelpfulSpell;
function IsSpellInRange(index, bookType, unitId) { return 0; }
exports.IsSpellInRange = IsSpellInRange;
function IsUsableSpell(index, bookType) { return [true, false]; }
exports.IsUsableSpell = IsUsableSpell;
function GetNumShapeshiftForms() { return 0; }
exports.GetNumShapeshiftForms = GetNumShapeshiftForms;
function GetShapeshiftForm() { return 0; }
exports.GetShapeshiftForm = GetShapeshiftForm;
function GetShapeshiftFormInfo(index) { return []; }
exports.GetShapeshiftFormInfo = GetShapeshiftFormInfo;
function GetTotemInfo(slot) { return []; }
exports.GetTotemInfo = GetTotemInfo;
function IsLoggedIn() { return true; }
exports.IsLoggedIn = IsLoggedIn;
exports.UIParent = new FakeFrame();
// WoW global variables
exports.GameTooltip = new FakeGameTooltip();
exports.MAX_COMBO_POINTS = 5;
exports.UNKNOWN = -1;
exports.DEFAULT_CHAT_FRAME = new FakeMessageFrame();
exports.SCHOOL_MASK_NONE = 0;
exports.SCHOOL_MASK_ARCANE = 1;
exports.SCHOOL_MASK_FIRE = 2;
exports.SCHOOL_MASK_FROST = 4;
exports.SCHOOL_MASK_HOLY = 8;
exports.SCHOOL_MASK_NATURE = 16;
exports.SCHOOL_MASK_SHADOW = 32;
exports.SCHOOL_MASK_PHYSICAL = 64;
exports.INVSLOT_AMMO = 1;
exports.INVSLOT_BACK = 2;
exports.INVSLOT_BODY = 3;
exports.INVSLOT_CHEST = 4;
exports.INVSLOT_FEET = 5;
exports.INVSLOT_FINGER1 = 6;
exports.INVSLOT_FINGER2 = 7;
exports.INVSLOT_FIRST_EQUIPPED = 8;
exports.INVSLOT_HAND = 9;
exports.INVSLOT_HEAD = 10;
exports.INVSLOT_LAST_EQUIPPED = 11;
exports.INVSLOT_LEGS = 12;
exports.INVSLOT_MAINHAND = 13;
exports.INVSLOT_NECK = 14;
exports.INVSLOT_OFFHAND = 15;
exports.INVSLOT_RANGED = 16;
exports.INVSLOT_SHOULDER = 17;
exports.INVSLOT_TABARD = 18;
exports.INVSLOT_TRINKET1 = 19;
exports.INVSLOT_TRINKET2 = 20;
exports.INVSLOT_WAIST = 21;
exports.INVSLOT_WRIST = 22;
// Correct
exports.SPELL_POWER_MANA = 0;
exports.SPELL_POWER_RAGE = 1;
exports.SPELL_POWER_FOCUS = 2;
exports.SPELL_POWER_ENERGY = 3;
exports.SPELL_POWER_COMBO_POINTS = 4;
exports.SPELL_POWER_RUNES = 5;
exports.SPELL_POWER_RUNIC_POWER = 6;
exports.SPELL_POWER_SOUL_SHARDS = 7;
exports.SPELL_POWER_LUNAR_POWER = 8;
exports.SPELL_POWER_HOLY_POWER = 9;
exports.SPELL_POWER_ALTERNATE_POWER = 10;
exports.SPELL_POWER_MAELSTROM = 11;
exports.SPELL_POWER_CHI = 12;
exports.SPELL_POWER_INSANITY = 13;
exports.SPELL_POWER_ARCANE_CHARGES = 16;
exports.SPELL_POWER_FURY = 17;
exports.SPELL_POWER_PAIN = 18;
exports.CHI_COST = "";
exports.COMBO_POINTS_COST = "";
exports.ENERGY_COST = "";
exports.FOCUS_COST = "";
exports.HOLY_POWER_COST = "";
exports.MANA_COST = "";
exports.RAGE_COST = "";
exports.RUNIC_POWER_COST = "";
exports.SOUL_SHARDS_COST = "";
exports.LUNAR_POWER_COST = "";
exports.INSANITY_COST = "";
exports.MAELSTROM_COST = "";
exports.ARCANE_CHARGES_COST = "";
exports.PAIN_COST = "";
exports.FURY_COST = "";
exports.CR_CRIT_MELEE = 1;
exports.CR_HASTE_MELEE = 2;
exports.CR_VERSATILITY_DAMAGE_DONE = 3;
exports.ITEM_LEVEL = "ITEM_LEVEL";
exports.LE_PARTY_CATEGORY_INSTANCE = 1;
exports.LE_PARTY_CATEGORY_HOME = 2;
exports._G = {};
exports.BOOKTYPE_SPELL = "spell";
exports.BOOKTYPE_PET = "pet";
exports.MAX_TALENT_TIERS = 7;
exports.NUM_TALENT_COLUMNS = 3;
exports.RUNE_NAME = {};
exports.RAID_CLASS_COLORS = {
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
    ["MONK"]: { r: 0.0, g: 1.00, b: 0.59, colorStr: "ff00ff96" },
    ["DEMONHUNTER"]: { r: 0.64, g: 0.19, b: 0.79, colorStr: "ffa330c9" },
};
exports.AIR_TOTEM_SLOT = 1;
exports.EARTH_TOTEM_SLOT = 2;
exports.FIRE_TOTEM_SLOT = 3;
exports.WATER_TOTEM_SLOT = 4;
exports.MAX_TOTEMS = 4;
exports.COMBATLOG_OBJECT_AFFILIATION_MINE = 1;
exports.COMBATLOG_OBJECT_AFFILIATION_PARTY = 2;
exports.COMBATLOG_OBJECT_AFFILIATION_RAID = 3;
exports.COMBATLOG_OBJECT_REACTION_FRIENDLY = 4;
exports.Enum = {
    PowerType: {
        Mana: 0,
        Rage: 1,
        Focus: 2,
        Energy: 3,
        ComboPoints: 4,
        Runes: 5,
        RunicPower: 6,
        SoulShards: 7,
        LunarPower: 8,
        HolyPower: 9,
        Alternate: 10,
        Maelstrom: 11,
        Chi: 12,
        Insanity: 13,
        Obsolete: 14,
        Obsolete2: 15,
        ArcaneCharges: 16,
        Fury: 17,
        Pain: 18
    }
};
class FakeItemLocation {
    CreateFromEquipmentSlot(equipmentSlotIndex) {
        throw Error("Method CreateFromEquipmentSlot not implemented.");
    }
}
exports.FakeItemLocation = FakeItemLocation;
exports.ItemLocation = new FakeItemLocation();
exports.C_Item = {
    DoesItemExist: (emptiableItemLocation) => {
        throw Error("Method DoesItemExist not implemented.");
    }
};
exports.C_AzeriteEmpoweredItem = {
    IsAzeriteEmpoweredItem: (itemLocation) => {
        throw Error("Method IsAzeriteEmpoweredItem not implemented.");
    },
    GetAllTierInfo: (azeriteEmpoweredItemLocation) => {
        throw Error("Method GetAllTierInfo not implemented.");
    },
    IsPowerSelected: (azeriteEmpoweredItemLocation, powerID) => {
        throw Error("Method IsPowerSelected not implemented.");
    },
    GetPowerInfo: (powerId) => {
        throw Error("Method GetPowerInfo not implemented.");
    }
};
exports.C_AzeriteEssence = {
    GetMilestones: () => {
        throw Error("Method GetMilestones not implemented.");
    },
    GetMilestoneInfo: (milestoneId) => {
        throw Error("Method GetMilestoneInfo not implemented.");
    },
    GetMilestoneEssence: (milestoneId) => {
        throw Error("Method GetMilestoneEssence not implemented.");
    },
    GetEssenceInfo: (essenceId) => {
        throw Error("Method GetEssenceInfo not implemented.");
    },
};
exports.C_LossOfControl = {
    GetEventInfo: (eventIndex) => {
        return ["SCHOOL_INTERRUPT", 33786, "Interrupted", "texture", 0, 7, 8, 1, 0, 2];
    },
    GetNumEvents: () => {
        return 0;
    }
};
//# sourceMappingURL=index.js.map