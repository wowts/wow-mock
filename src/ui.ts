export type UIPosition = "TOPLEFT" | "CENTER" | "BOTTOMLEFT";
export type UIAnchor = "ANCHOR_BOTTOMLEFT" | "ANCHOR_NONE";

export interface MockOptions {
    silentMessageFrame?: boolean;
}

let mockOptions: MockOptions = {};

export function setMockOptions(options: MockOptions) {
    mockOptions = options;
}
export interface UIRegion {
    CanChangeProtectedState(): boolean;
    ClearAllPoints(): void;
    GetCenter(): [number, number];
    GetWidth(): number;
    GetHeight(): number;
    GetParent(): UIRegion | undefined;
    SetParent(parent: UIRegion): void;
    SetAllPoints(around: UIFrame): void;
    SetParent(parent: UIFrame): void;
    SetPoint(anchor: UIPosition, x: number, y: number): void;
    SetPoint(
        anchor: UIPosition,
        reference: UIFrame,
        refAnchor: UIPosition,
        x: number,
        y: number
    ): void;
    SetWidth(width: number): void;
    SetHeight(height: number): void;
}

export interface UIFrame extends UIRegion {
    SetAlpha(value: number): void;
    SetScript(
        event: "OnEvent",
        func: (frame: UIFrame, event: string, ...args: any[]) => void
    ): void;
    SetScript(
        event:
            | "OnSizeChanged"
            | "OnMouseUp"
            | "OnEnter"
            | "OnLeave"
            | "OnMouseDown"
            | "OnHide"
            | "OnUpdate"
            | "OnEvent",
        func: (frame: UIFrame, ...args: any[]) => void
    ): void;
    StartMoving(): void;
    StopMovingOrSizing(): void;
    SetMovable(movable: boolean): void;
    SetFrameStrata(strata: "MEDIUM"): void;
    Show(): void;
    Hide(): void;
    IsShown(): boolean;
    CreateTexture(): UITexture;
    EnableMouse(enabled: boolean): void;
    CreateFontString(
        name: string | undefined,
        layer?: "OVERLAY",
        inherits?: string
    ): UIFontString;
    SetAttribute(key: string, value: string): void;
    SetScale(scale: number): void;
    IsVisible(): boolean;
    RegisterEvent(event: string): void;
}

export interface UIMessageFrame extends UIFrame {
    AddMessage(
        message: string,
        r?: number,
        g?: number,
        b?: number,
        id?: string | number
    ): void;
    GetNumMessages(): number;
    GetMessageInfo(messageIndex: number): string;
    SetMaxLines(howMany: number): void;
    Clear(): void;
}

export interface UIFontString extends UIFrame {
    SetText(text: string | undefined): void;
    SetFont(font: string, height: number, flags: number): void;
    SetFontObject(name: "GameFontNormalSmall"): void;
    SetTextColor(r: number, g: number, b: number, alpha?: number): void;
    SetFormattedText(text: string, ...args: any[]): void;
    SetVertexColor(r: number, g: number, b: number, alpha?: number): void;
    SetJustifyH(justify: "left" | "right"): void;
    GetFont(): [string, number, number];
}

export interface UICheckButton extends UIFrame {
    SetChecked(checked: boolean): void;
    GetChecked(): boolean;
    RegisterForClicks(
        type:
            | "AnyUp"
            | "AnyDown"
            | "LeftButtonDown"
            | "LeftButtonUp"
            | "MiddleButtonDown"
            | "MiddleButtonUp"
            | "RightButtonDown"
            | "RightButtonUp"
    ): void;
}

export interface UIDropdown extends UIFrame {}

export interface UITexture extends UIFrame {
    SetTexture(name: string | undefined): void;
    SetColorTexture(r: number, g: number, b: number, alpha?: number): void;
    SetVertexColor(r: number, g: number, b: number, alpha?: number): void;
}

export interface UIGameTooltip extends UIFrame {
    SetOwner(frame: UIFrame, anchor: UIAnchor): void;
    SetText(text: string, r?: number, g?: number, b?: number): void;
    AddLine(text: string, r?: number, g?: number, b?: number): void;
    ClearLines(): void;
    SetInventoryItem(unit: string, slot: number): void;
    NumLines(): number;
    GetText(): string;
}

export interface UICooldown extends UIFrame {
    GetCooldownDuration(): number;
    SetDrawEdge(enable: boolean): void;
    SetSwipeColor(r: number, g: number, b: number, alpha?: number): void;
    SetCooldown(start: number, duration: number): void;
}

export class EventDispatcher {
    events: { [key: string]: FakeFrame[] } = {};

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
    scriptHandlers: {
        [script: string]: (frame: UIFrame, ...parameters: any[]) => void;
    } = {};

    RegisterEvent(event: string): void {
        eventDispatcher.RegisterEvent(this, event);
    }
    mouseEnabled: boolean = true;
    shown: boolean = true;
    strata?: string;
    movable: boolean = true;
    alpha: number = 1;
    width = 0;
    height = 0;
    scale = 1;
    visible = true;
    parent?: UIRegion = undefined;
    x = 0;
    y = 0;
    private attributes = new Map<string, string>();

    SetAlpha(value: number): void {
        this.alpha = value;
    }
    SetScript(
        event: string,
        func: (frame: UIFrame, ...parameters: any[]) => void
    ): void {
        this.scriptHandlers[event] = func;
    }
    StartMoving(): void {}
    StopMovingOrSizing(): void {}
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
        return new FakeUITexture();
    }
    EnableMouse(enabled: boolean): void {
        this.mouseEnabled = enabled;
    }
    CreateFontString(
        name: string,
        layer?: "OVERLAY" | undefined,
        inherits?: string | undefined
    ): UIFontString {
        return new FakeFontString();
    }
    SetAttribute(key: string, value: string): void {
        this.attributes.set(key, value);
    }
    SetScale(scale: number): void {
        this.scale = scale;
    }
    IsVisible(): boolean {
        return this.visible;
    }
    CanChangeProtectedState(): boolean {
        return true;
    }
    ClearAllPoints(): void {
        this.x = 0;
        this.y = 0;
        this.height = 0;
        this.width = 0;
    }
    GetCenter(): [number, number] {
        return [this.width / 2 + this.x, this.height / 2 + this.y];
    }
    GetWidth(): number {
        return this.width;
    }
    GetHeight(): number {
        return this.height;
    }
    GetParent(): UIRegion | undefined {
        return this.parent;
    }
    SetParent(parent: UIRegion): void;
    SetParent(parent: UIFrame): void;
    SetParent(parent: any) {
        this.parent = parent;
    }
    SetAllPoints(around: UIFrame): void {}
    SetPoint(anchor: UIPosition, x: number, y: number): void;
    SetPoint(
        anchor: UIPosition,
        reference: UIFrame,
        refAnchor: UIPosition,
        x: number,
        y: number
    ): void;
    SetPoint(anchor: any, reference: any, refAnchor: any, x?: any, y?: any) {
        this.x = x;
        this.y = y;
    }
    SetWidth(width: number): void {
        this.width = width;
    }
    SetHeight(height: number): void {
        this.height = height;
    }
}

export class FakeFontString extends FakeFrame implements UIFontString {
    text: string = "";
    private font = { font: "", height: 0, flags: 0 };
    SetText(text: string): void {
        this.text = text;
    }
    SetFont(font: string, height: number, flags: number): void {
        this.font.font = font;
        this.font.height = height;
        this.font.flags = flags;
    }
    SetFontObject(name: "GameFontNormalSmall"): void {}
    SetTextColor(
        r: number,
        g: number,
        b: number,
        alpha?: number | undefined
    ): void {}
    SetFormattedText(text: string, ...args: any[]): void {}
    SetVertexColor(
        r: number,
        g: number,
        b: number,
        alpha?: number | undefined
    ): void {}
    SetJustifyH(justify: "left" | "right"): void {}
    GetFont(): [string, number, number] {
        return [this.font.font, this.font.height, this.font.flags];
    }
}

export class FakeUITexture extends FakeFrame implements UITexture {
    texture?: string;
    r = 0;
    g = 0;
    b = 0;

    SetTexture(name: string): void {
        this.texture = name;
    }
    SetColorTexture(
        r: number,
        g: number,
        b: number,
        alpha?: number | undefined
    ): void {
        this.r = r;
        this.g = g;
        this.b = b;
        this.alpha = alpha || 1;
    }
    SetVertexColor(
        r: number,
        g: number,
        b: number,
        alpha?: number | undefined
    ): void {
        this.r = r;
        this.g = g;
        this.b = b;
        this.alpha = alpha || 1;
    }
}

export class FakeMessageFrame extends FakeFrame implements UIMessageFrame {
    SetMaxLines(howMany: number): void {}
    messages: string[] = [];
    AddMessage(message: string): void {
        this.messages.push(message);
        if (!mockOptions.silentMessageFrame) console.log(message);
    }
    GetNumMessages() {
        return this.messages.length;
    }
    GetMessageInfo(i: number) {
        return this.messages[i];
    }
    Clear() {
        this.messages.splice(0);
    }
}

export class FakeGameTooltip extends FakeFrame implements UIGameTooltip {
    private text!: string;
    private lines: string[] = [];
    SetOwner(frame: UIFrame, anchor: UIAnchor): void {}
    SetText(text: string, r?: number, g?: number, b?: number): void {
        this.text = text;
    }
    AddLine(text: string, r?: number, g?: number, b?: number): void {
        this.lines.push(text);
    }
    ClearLines(): void {}
    SetInventoryItem(unit: string, slot: number): void {}
    NumLines(): number {
        return this.lines.length;
    }
    GetText(): string {
        return this.text;
    }
}

export class FakeCheckButton extends FakeFrame implements UICheckButton {
    private isChecked: boolean = false;
    SetChecked(checked: boolean): void {
        this.isChecked = checked;
    }
    GetChecked(): boolean {
        return this.isChecked;
    }
    RegisterForClicks(
        type:
            | "AnyUp"
            | "AnyDown"
            | "LeftButtonDown"
            | "LeftButtonUp"
            | "MiddleButtonDown"
            | "MiddleButtonUp"
            | "RightButtonDown"
            | "RightButtonUp"
    ): void {}
}

export class FakeDropdown extends FakeFrame implements UIDropdown {}

export function CreateFrame(
    type: "GameTooltip",
    id?: string,
    parent?: UIFrame,
    template?: string
): UIGameTooltip;
export function CreateFrame(
    type: "CheckButton",
    id?: string,
    parent?: UIFrame,
    template?: string
): UICheckButton;
export function CreateFrame(
    type: "Dropdown",
    id?: string,
    parent?: UIFrame,
    template?: string
): UIDropdown;
export function CreateFrame(
    type: "Frame",
    id?: string,
    parent?: UIFrame,
    template?: string
): UIFrame;
export function CreateFrame(
    type: string,
    id?: string,
    parent?: UIFrame,
    template?: string
): UIFrame {
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
export function EasyMenu(
    menu: any,
    menuFrame: UIFrame,
    cursor: string | UIRegion,
    x: number,
    y: number,
    menuType: string,
    autoHideDelay?: number
) {}

export const UIParent: UIFrame = new FakeFrame();
export const GameTooltip: UIGameTooltip = new FakeGameTooltip();
export const DEFAULT_CHAT_FRAME: UIMessageFrame = new FakeMessageFrame();

export function CreateFromMixins<T>(mixin: T) {
    return Object.assign({}, mixin) as Required<T>;
}

export function Mixin<T, U>(a: U, b: T): asserts a is U & Required<T> {
    Object.assign(a, b);
}

export const ChatTypeInfo: {
    [key: string]: {
        r: number;
        g: number;
        b: number;
        id: number;
        sticky?: boolean;
    };
} = {
    SYSTEM: { r: 0, g: 0, b: 0, id: 1 },
};

export function CopyToClipboard(text: string) {}
export function ChatFrame_OpenChat(
    command: string,
    unk: any,
    position: number
) {}
