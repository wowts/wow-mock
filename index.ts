import { LuaArray } from "@wowts/lua";

export type UIPosition = "TOPLEFT" | "CENTER" | "BOTTOMLEFT";
export type UIAnchor = "ANCHOR_BOTTOMLEFT" | "ANCHOR_NONE";

export interface UIRegion {
    CanChangeProtectedState():boolean;
    ClearAllPoints():void;
    GetCenter():[number, number];
    GetWidth():number;
    GetHeight():number;
    GetParent():UIRegion;
    SetParent(parent: UIRegion):void;
    SetAllPoints(around: UIFrame):void;
    SetParent(parent:UIFrame):void;
    SetPoint(anchor: UIPosition, x:number, y: number):void;
    SetPoint(anchor: UIPosition, reference: UIFrame, refAnchor: UIPosition, x:number, y: number):void;
    SetWidth(width:number):void;
    SetHeight(height:number):void;
}

export interface UIFrame  extends UIRegion {
    SetAlpha(value:number):void;
    SetScript(event:"OnEvent", func: (frame: UIFrame, event: string, ...args:any[]) => void):void;
    SetScript(event:"OnSizeChanged" | "OnMouseUp" | "OnEnter" | "OnLeave" | "OnMouseDown" | "OnHide" | "OnUpdate" | "OnEvent", func: (frame: UIFrame, ...args:any[]) => void):void;
    StartMoving():void;
    StopMovingOrSizing():void;
    SetMovable(movable:boolean):void;
    SetFrameStrata(strata: "MEDIUM"):void;
    Show():void;
    Hide():void;   
    IsShown():boolean;
    CreateTexture(): UITexture;
    EnableMouse(enabled: boolean):void;
    CreateFontString(name: string, layer?: "OVERLAY", inherits?: string): UIFontString;
    SetAttribute(key: string, value: string):void;
    SetScale(scale: number):void;
    IsVisible():boolean;
    RegisterEvent(event: string):void;
}

export interface UIMessageFrame extends UIFrame {
    AddMessage(message:string):void;
}

export interface UIFontString extends UIFrame {
    SetText(text: string):void;
    SetFont(font: string, height: number, flags: number):void;
    SetFontObject(name: "GameFontNormalSmall"):void;
    SetTextColor(r:number, g:number, b: number, alpha?:number):void;
    SetFormattedText(text: string, ...args:any[]):void;
    SetVertexColor(r: number, g: number, b: number, alpha?:number):void;
    SetJustifyH(justify: "left" | "right"):void;
    GetFont():[string, number, number];
}

export interface UICheckButton extends UIFrame {
    SetChecked(checked: boolean):void;
    GetChecked():boolean;
    RegisterForClicks(type: "AnyUp" | "AnyDown" | "LeftButtonDown" | "LeftButtonUp" | "MiddleButtonDown" | "MiddleButtonUp" | "RightButtonDown" | "RightButtonUp"):void;
}

export interface UIDropdown extends UIFrame {}

export interface UITexture extends UIFrame {
    SetTexture(name: string):void;
    SetTexture(r: number, g: number, b: number, alpha?:number):void;
    SetVertexColor(r: number, g: number, b: number, alpha?:number):void;
}

export interface UIGameTooltip extends UIFrame {
    SetOwner(frame: UIFrame, anchor: UIAnchor):void;
    SetText(text: string, r?: number, g?: number, b?: number):void;
    AddLine(text: string, r?: number, g?: number, b?: number):void;
    ClearLines():void;
    SetInventoryItem(unit: string, slot: number):void;
    NumLines():number;
    GetText():string;
}

export interface UICooldown extends UIFrame {
    GetCooldownDuration(): number;
    SetDrawEdge(enable: boolean): void;
    SetSwipeColor(r: number, g: number, b: number, alpha?:number):void;
    SetCooldown(start: number, duration: number):void;
}

export class EventDispatcher {
    events: {[key:string]: FakeFrame[]} = {}

    RegisterEvent(frame: FakeFrame, event: string) {
        let events = this.events[event];
        if (!events) {
            this.events[event] = events = [];
        }
        events.push(frame);
    }

    DispatchEvent(event: string, ...params: any[]) {
        const events = this.events[event];
        if (!events) return;
        for (const frame of events) {
            const handler = frame.scriptHandlers["OnEvent"];
            if (!handler) continue;
            handler(frame, event, ...params);
        }
    }
}

export const eventDispatcher = new EventDispatcher();

export class FakeFrame implements UIFrame {
    scriptHandlers: {[script:string]:(frame:UIFrame, ...parameters:any[]) => void } = {}

    RegisterEvent(event: string): void {
        eventDispatcher.RegisterEvent(this, event);
    }
    mouseEnabled: boolean;
    shown: boolean = true;
    strata: string;
    movable: boolean;
    alpha: number;
    SetAlpha(value: number): void {
        this.alpha = value;
    }
    SetScript(event: string, func: (frame:UIFrame, ...parameters:any[]) => void): void {
        this.scriptHandlers[event] = func;
    }
    StartMoving(): void {
    }
    StopMovingOrSizing(): void {
    }
    SetMovable(movable: boolean): void {
        this.movable = movable;
    }
    SetFrameStrata(strata: "MEDIUM"): void {
        this.strata = strata;
    }
    Show(): void {
        this.shown = true;
    }
    Hide(): void {
        this.shown = false;
    }
    IsShown(): boolean {
        return this.shown;
    }
    CreateTexture(): UITexture {
        throw new Error("Method not implemented.");
    }
    EnableMouse(enabled: boolean): void {
        this.mouseEnabled = enabled;
    }
    CreateFontString(name: string, layer?: "OVERLAY" | undefined, inherits?: string | undefined): UIFontString {
        throw new Error("Method not implemented.");
    }
    SetAttribute(key: string, value: string): void {
        throw new Error("Method not implemented.");
    }
    SetScale(scale: number): void {
        throw new Error("Method not implemented.");
    }
    IsVisible(): boolean {
        throw new Error("Method not implemented.");
    }
    CanChangeProtectedState(): boolean {
        throw new Error("Method not implemented.");
    }
    ClearAllPoints(): void {
        throw new Error("Method not implemented.");
    }
    GetCenter(): [number, number] {
        throw new Error("Method not implemented.");
    }
    GetWidth(): number {
        throw new Error("Method not implemented.");
    }
    GetHeight(): number {
        throw new Error("Method not implemented.");
    }
    GetParent(): UIRegion {
        throw new Error("Method not implemented.");
    }
    SetParent(parent: UIRegion): void;
    SetParent(parent: UIFrame): void;
    SetParent(parent: any) {
        throw new Error("Method not implemented.");
    }
    SetAllPoints(around: UIFrame): void {
        throw new Error("Method not implemented.");
    }
    SetPoint(anchor: UIPosition, x: number, y: number): void;
    SetPoint(anchor: UIPosition, reference: UIFrame, refAnchor: UIPosition, x: number, y: number): void;
    SetPoint(anchor: any, reference: any, refAnchor: any, x?: any, y?: any) {
        throw new Error("Method not implemented.");
    }
    SetWidth(width: number): void {
        throw new Error("Method not implemented.");
    }
    SetHeight(height: number): void {
        throw new Error("Method not implemented.");
    }
    
}

export class FakeMessageFrame extends FakeFrame implements UIMessageFrame {
    AddMessage(message:string):void {
        console.log(message);
    }
}

export class FakeGameTooltip extends FakeFrame implements UIGameTooltip {
    private text: string;
    private lines: string[] = [];
    SetOwner(frame: UIFrame, anchor: UIAnchor):void {}
    SetText(text: string, r?: number, g?: number, b?: number):void {
        this.text = text;
    }
    AddLine(text: string, r?: number, g?: number, b?: number):void {
        this.lines.push(text);
    }
    ClearLines():void {}
    SetInventoryItem(unit: string, slot: number):void {}
    NumLines():number {
        return this.lines.length; 
    }
    GetText():string {
        return this.text;
    }
}

export class FakeCheckButton extends FakeFrame implements UICheckButton {
    private isChecked: boolean = false;
    SetChecked(checked: boolean):void {
        this.isChecked = checked;
    }
    GetChecked():boolean {
        return this.isChecked;
    }
    RegisterForClicks(type: "AnyUp" | "AnyDown" | "LeftButtonDown" | "LeftButtonUp" | "MiddleButtonDown" | "MiddleButtonUp" | "RightButtonDown" | "RightButtonUp"):void {
    }
}

export class FakeDropdown extends FakeFrame implements UIDropdown {
}

// WOW global functions
export function debugprofilestop() {return 10; }
export function GetActionInfo(slot: string) { return ["a", "b", "c"]; }
export function GetActionText(slot: string) { return "ActioNText"; }
export function GetBindingKey(key:string){ return "a"; }
export function GetBonusBarIndex() { }
export function GetItemInfo(itemId: number|string):any[] { return []; }
export function GetMacroItem(spellId: number){ return []; }
export function GetMacroSpell(spellId: number){ return [] }
export function GetSpellInfo(spellId: number|string, bookType?: number) { return []; }
export function GetTime() { return 10; }
export function InterfaceOptionsFrame_OpenToCategory(frameName:string) { }
export function UnitAura(unitId: string, i:number, filter: string) { return []; }
export function UnitCanAttack(unit:string, target: string) { return false; }
export function UnitClass(unit:string):[string, "WARRIOR" | "PRIEST"] { return ["Warrior", "WARRIOR"]; }
export function UnitExists(unit:string) { return false; }
export function UnitGUID(unit:string) { return "aaaa"; }
export function UnitHasVehicleUI(unit: string) { return false; }
export function UnitIsDead(unit: string) { return false; }
export function UnitName(unitId: string) { return "Esside"; }
export function GetActionCooldown(action: string):[number, number, boolean] { return [0, 0, false]; }
export function GetActionTexture(action: string){ }
export function GetItemIcon(itemId: number){}
export function GetItemCooldown(itemId: number): [number, number, boolean]{ return [0, 0, false]; }
export function GetItemSpell(itemId: number){}
export function GetSpellTexture(spellId: number, bookType?: number){}
export function IsActionInRange(action: string, target: string){}
export function IsCurrentAction(action: string){}
export function IsItemInRange(itemId: number, target: string){ return false;}
export function IsUsableAction(action: string): boolean{ return false;}
export function IsUsableItem(itemId: number): boolean { return false;}
export function GetNumGroupMembers(filter: number) {return 0;}
export function UnitPower(unit: string, type: number, segments?: number) { return 0;}
export function GetPowerRegen():[number, number] {return [0, 0]}
export function GetSpellPowerCost(spellId:number): LuaArray<{cost:number, type:number}> { return {1:{cost:0, type: 0}}}
export function UnitPowerType(unit: string):[number,number] { return [0,0]}
export function IsInGroup(filter?: number){ return false}
export function IsInGuild() { return false;}
export function IsInInstance(){return false}
export function IsInRaid(filter?: number){return false}
export function UnitLevel(target:string){ return 0;}
export function GetBuildInfo():any[] { return []}
export function GetItemCount(item:string, first?: boolean, second?: boolean){}
export function GetNumTrackingTypes() {return 0}
export function GetTrackingInfo(i:number):any[] {return []}
export function GetUnitSpeed(unit: string):number { return 0;}
export function GetWeaponEnchantInfo():any[] {return []}
export function HasFullControl() {return false}
export function IsSpellOverlayed() {}
export function IsStealthed() {}
export function UnitCastingInfo(target: string):any[] { return [] }
export function UnitChannelInfo(target: string):any[] {return  [] }
export function UnitClassification(target: string){}
export function UnitCreatureFamily(target: string){}
export function UnitCreatureType(target: string){}
export function UnitDetailedThreatSituation(unit: string, target: string):any[]{ return []}
export function UnitInRaid(unit: string){return false}
export function UnitIsFriend(unit: string, target: string){return 0}
export function UnitIsPVP(unit: string){return false}
export function UnitIsUnit(unit1: string, unit2: string){ return true}
export function UnitPowerMax(unit: string, power: number, segment: number): number{ return 0}
export function UnitRace(unit: string):any[]{return []}
export function UnitStagger(unit: string){return 0}
export function GetSpellCharges(spellId: number) {return []}
export function GetSpellCooldown(type:string|number, book?: string):[number, number, boolean]{ return [0, 0, false]}
export function GetLocale() { return "en-US"}
export function CreateFrame(type:"GameTooltip", id?:string, parent?:UIFrame, template?:string):UIGameTooltip;
export function CreateFrame(type:"CheckButton", id?:string, parent?:UIFrame, template?:string):UICheckButton;
export function CreateFrame(type:"Dropdown", id?:string, parent?:UIFrame, template?:string):UIDropdown;
export function CreateFrame(type:"Frame", id?:string, parent?:UIFrame, template?:string):UIFrame;
export function CreateFrame(type:string, id?:string, parent?:UIFrame, template?:string):UIFrame { 
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
export function EasyMenu(menu:any, menuFrame:UIFrame, cursor:string|UIRegion, x:number, y:number, menuType:string, autoHideDelay?:number) {}
export function IsShiftKeyDown(){}
export function GetSpecialization(){return "havoc"}
export function GetSpecializationInfo(spec: string){ return 1}
export function GetTalentInfoByID(talent:number, spec:number):any[]{return []}
export function GetAuctionItemSubClasses(item:number):any[]{return []}
export function GetInventoryItemID(unit:string, slot:number){}
export function GetInventoryItemGems(){}
export function RegisterStateDriver(frame: UIFrame, property: string, state:any){}
export function UnitHealth(unit:string){return 0}
export function UnitHealthMax(unit:string){return 0}
export function PlaySoundFile(file:string){}
export function GetCombatRating(combatRatingIdentifier:number){ return 0}
export function GetCritChance(){return 0}
export function GetMastery(){return 0}
export function GetMasteryEffect(){return 0}
export function GetMeleeHaste(){return 0}
export function GetMultistrike(){return 0}
export function GetMultistrikeEffect(){return 0}
export function GetRangedCritChance(){return 0}
export function GetRangedHaste(){return 0}
export function GetSpellBonusDamage(school: number){return 0}
export function GetSpellBonusHealing(){return 0}
export function GetSpellCritChance(school: number){return 0}
export function UnitAttackPower(unitId:string){return [0, 0, 0]}
export function UnitAttackSpeed(unitId:string){return [0, 0]}
export function UnitDamage(unitId:string):number[]{return []}
export function UnitRangedAttackPower(unitId:string){return [0, 0, 0]}
export function UnitSpellHaste(unitId:string){return 0}
export function UnitStat(unitId:string, stat:number){return 0}
export function GetRuneCooldown(slot: number){return [0, 0, 0]}
export function SendAddonMessage(MSG_PREFIX: string, message: string, channel: string){}
//export function print(s: string):void {}
export function GetActiveSpecGroup() {return 0;}
export function GetFlyoutInfo(flyoutId: number) {return[]}
export function GetFlyoutSlotInfo(flyoutId: number, flyoutIndex: number) {return[]}
export function GetSpellBookItemInfo(index: number|string, bookType?: string) {return[]}
export function GetSpellCount(index: number|string, bookType?: string){}
export function GetSpellLink(index: number|string, bookType?: string){return "aa"}
export function GetSpellTabInfo(tab: number) { return []}
export function GetTalentInfo(i: number, j: number, activeTalentGroup: number){ return []; }
export function HasPetSpells():[number, string] {return[0, "a"]}
export function IsHarmfulSpell(index: number|string, bookType?: string){}
export function IsHelpfulSpell(index: number|string, bookType?: string){}
export function IsSpellInRange(index: number|string, bookType?: string, unitId?: string){return false;}
export function IsUsableSpell(index: number|string, bookType?: string){return [];}
export function GetNumShapeshiftForms() {return 0}
export function GetShapeshiftForm(){}
export function GetShapeshiftFormInfo(index:number){return []}
export function GetTotemInfo(slot: number) {return[]}

export const UIParent: UIFrame = new FakeFrame();

// WoW global variables
export const GameTooltip:UIGameTooltip = new FakeGameTooltip();
export const MAX_COMBO_POINTS = 5;
export const UNKNOWN = -1;
export const DEFAULT_CHAT_FRAME:UIMessageFrame = new FakeMessageFrame();
export const SCHOOL_MASK_NONE = 0;
export const SCHOOL_MASK_ARCANE = 1;
export const SCHOOL_MASK_FIRE = 2;
export const SCHOOL_MASK_FROST = 4;
export const SCHOOL_MASK_HOLY = 8;
export const SCHOOL_MASK_NATURE = 16;
export const SCHOOL_MASK_SHADOW = 32;
export const SCHOOL_MASK_PHYSICAL = 64;

export const INVSLOT_AMMO = 1;
export const INVSLOT_BACK = 2;
export const INVSLOT_BODY = 3;
export const INVSLOT_CHEST = 4;
export const INVSLOT_FEET = 5;
export const INVSLOT_FINGER1 = 6;
export const INVSLOT_FINGER2 = 7;
export const INVSLOT_FIRST_EQUIPPED = 8;
export const INVSLOT_HAND = 9;
export const INVSLOT_HEAD = 10;
export const INVSLOT_LAST_EQUIPPED = 11;
export const INVSLOT_LEGS = 12;
export const INVSLOT_MAINHAND = 13;
export const INVSLOT_NECK = 14;
export const INVSLOT_OFFHAND = 15;
export const INVSLOT_RANGED = 16;
export const INVSLOT_SHOULDER = 17;
export const INVSLOT_TABARD = 18;
export const INVSLOT_TRINKET1 = 19;
export const INVSLOT_TRINKET2 = 20;
export const INVSLOT_WAIST = 21;
export const INVSLOT_WRIST = 22;

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

export const ITEM_LEVEL = "ITEM_LEVEL";

export const LE_PARTY_CATEGORY_INSTANCE = 1;
export const LE_PARTY_CATEGORY_HOME = 2;
export const _G: any = {};

export const BOOKTYPE_SPELL = 1;
export const BOOKTYPE_PET = 2;

export const MAX_TALENT_TIERS = 5;
export const NUM_TALENT_COLUMNS = 3;

export const RUNE_NAME = {};

export const RAID_CLASS_COLORS = {};

export const AIR_TOTEM_SLOT = 1;
export const EARTH_TOTEM_SLOT = 2;
export const FIRE_TOTEM_SLOT = 3;
export const WATER_TOTEM_SLOT = 4;
export const MAX_TOTEMS = 3;

export const COMBATLOG_OBJECT_AFFILIATION_MINE = 1;
export const COMBATLOG_OBJECT_AFFILIATION_PARTY = 2;
export const COMBATLOG_OBJECT_AFFILIATION_RAID = 3;
export const COMBATLOG_OBJECT_REACTION_FRIENDLY = 4;

export function AceGUIRegisterAsContainer(widget: any) {
    widget.children = {}
    widget.userdata = {}
    widget.events = {}
    widget.content.obj = widget
    widget.frame.obj = widget
    widget.content.SetScript("OnSizeChanged", widget.ContentResize)
    widget.frame.SetScript("OnSizeChanged", widget.FrameResize)
    widget.SetLayout("List")
}
