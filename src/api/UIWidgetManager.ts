import {
    UIWidgetScale,
    UIWidgetLayoutDirection,
    UIWidgetVisualizationType,
    UIWidgetSetLayoutDirection,
} from "./common";
import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export const enum CaptureBarWidgetFillDirectionType {
    RightToLeft = 0,
    LeftToRight = 1,
}
export const enum CaptureBarWidgetGlowAnimType {
    None = 0,
    Pulse = 1,
}
export const enum IconAndTextWidgetState {
    Hidden = 0,
    Shown = 1,
    ShownWithDynamicIconFlashing = 2,
    ShownWithDynamicIconNotFlashing = 3,
}
export const enum IconState {
    Hidden = 0,
    ShowState1 = 1,
    ShowState2 = 2,
}
export const enum SpellDisplayIconDisplayType {
    Buff = 0,
    Debuff = 1,
    Circular = 2,
}
export const enum SpellDisplayIconSizeType {
    Small = 0,
    Medium = 1,
    Large = 2,
}
export const enum SpellDisplayTextShownStateType {
    Shown = 0,
    Hidden = 1,
}
export const enum StatusBarColorTintValue {
    None = 0,
    Black = 1,
    White = 2,
    Red = 3,
    Yellow = 4,
    Orange = 5,
    Purple = 6,
    Green = 7,
    Blue = 8,
}
export const enum StatusBarOverrideBarTextShownType {
    Never = 0,
    Always = 1,
    OnlyOnMouseover = 2,
    OnlyNotOnMouseover = 3,
}
export const enum StatusBarValueTextType {
    Hidden = 0,
    Percentage = 1,
    Value = 2,
    Time = 3,
    TimeShowOneLevelOnly = 4,
    ValueOverMax = 5,
    ValueOverMaxNormalized = 6,
}
export const enum UIWidgetFlag {
    UniversalWidget = 1,
}
export const enum UIWidgetFontType {
    Normal = 0,
    Shadow = 1,
    Outline = 2,
}
export const enum UIWidgetModelSceneLayer {
    None = 0,
    Front = 1,
    Back = 2,
}
export const enum UIWidgetTextSizeType {
    Small = 0,
    Medium = 1,
    Large = 2,
    Huge = 3,
}
export const enum UIWidgetTooltipLocation {
    Default = 0,
    BottomLeft = 1,
    Left = 2,
    TopLeft = 3,
    Top = 4,
    TopRight = 5,
    Right = 6,
    BottomRight = 7,
    Bottom = 8,
}
export const enum WidgetAnimationType {
    None = 0,
    Fade = 1,
}
export const enum WidgetCurrencyClass {
    Currency = 0,
    Item = 1,
}
export const enum WidgetEnabledState {
    Disabled = 0,
    Enabled = 1,
    Red = 2,
    White = 3,
    Green = 4,
    Gold = 5,
}
export const enum WidgetShownState {
    Hidden = 0,
    Shown = 1,
}
export const enum WidgetTextHorizontalAlignmentType {
    Left = 0,
    Center = 1,
    Right = 2,
}
export const enum ZoneControlActiveState {
    Inactive = 0,
    Active = 1,
}
export const enum ZoneControlDangerFlashType {
    ShowOnGoodStates = 0,
    ShowOnBadStates = 1,
    ShowOnBoth = 2,
    ShowOnNeither = 3,
}
export const enum ZoneControlFillType {
    SingleFillClockwise = 0,
    SingleFillCounterClockwise = 1,
    DoubleFillClockwise = 2,
    DoubleFillCounterClockwise = 3,
}
export const enum ZoneControlLeadingEdgeType {
    NoLeadingEdge = 0,
    UseLeadingEdge = 1,
}
export const enum ZoneControlMode {
    BothStatesAreGood = 0,
    State1IsGood = 1,
    State2IsGood = 2,
    NeitherStateIsGood = 3,
}
export const enum ZoneControlState {
    State1 = 0,
    State2 = 1,
}
export interface BulletTextListWidgetVisualizationInfo {
    shownState: WidgetShownState;
    enabledState: WidgetEnabledState;
    lines: LuaArray<string>;
    widgetSizeSetting: number;
    textureKit: string;
    frameTextureKit: string;
    hasTimer: boolean;
    orderIndex: number;
    widgetTag: string;
    inAnimType: WidgetAnimationType;
    outAnimType: WidgetAnimationType;
    widgetScale: UIWidgetScale;
    layoutDirection: UIWidgetLayoutDirection;
    modelSceneLayer: UIWidgetModelSceneLayer;
    scriptedAnimationEffectID: number;
}
export interface CaptureBarWidgetVisualizationInfo {
    shownState: WidgetShownState;
    barValue: number;
    barMinValue: number;
    barMaxValue: number;
    neutralZoneSize: number;
    neutralZoneCenter: number;
    tooltip: string;
    glowAnimType: CaptureBarWidgetGlowAnimType;
    fillDirectionType: CaptureBarWidgetFillDirectionType;
    tooltipLoc: UIWidgetTooltipLocation;
    widgetSizeSetting: number;
    textureKit: string;
    frameTextureKit: string;
    hasTimer: boolean;
    orderIndex: number;
    widgetTag: string;
    inAnimType: WidgetAnimationType;
    outAnimType: WidgetAnimationType;
    widgetScale: UIWidgetScale;
    layoutDirection: UIWidgetLayoutDirection;
    modelSceneLayer: UIWidgetModelSceneLayer;
    scriptedAnimationEffectID: number;
}
export interface CaptureZoneVisualizationInfo {
    shownState: WidgetShownState;
    mode: ZoneControlMode;
    leadingEdgeType: ZoneControlLeadingEdgeType;
    dangerFlashType: ZoneControlDangerFlashType;
    zoneInfo: ZoneEntry;
    tooltipLoc: UIWidgetTooltipLocation;
    widgetSizeSetting: number;
    textureKit: string;
    frameTextureKit: string;
    hasTimer: boolean;
    orderIndex: number;
    widgetTag: string;
    inAnimType: WidgetAnimationType;
    outAnimType: WidgetAnimationType;
    widgetScale: UIWidgetScale;
    layoutDirection: UIWidgetLayoutDirection;
    modelSceneLayer: UIWidgetModelSceneLayer;
    scriptedAnimationEffectID: number;
}
export interface DiscreteProgressStepsVisualizationInfo {
    shownState: WidgetShownState;
    tooltip: string;
    progressMin: number;
    progressMax: number;
    progressVal: number;
    numSteps: number;
    tooltipLoc: UIWidgetTooltipLocation;
    widgetSizeSetting: number;
    textureKit: string;
    frameTextureKit: string;
    hasTimer: boolean;
    orderIndex: number;
    widgetTag: string;
    inAnimType: WidgetAnimationType;
    outAnimType: WidgetAnimationType;
    widgetScale: UIWidgetScale;
    layoutDirection: UIWidgetLayoutDirection;
    modelSceneLayer: UIWidgetModelSceneLayer;
    scriptedAnimationEffectID: number;
}
export interface DoubleIconAndTextWidgetVisualizationInfo {
    shownState: WidgetShownState;
    label: string;
    leftText: string;
    leftTooltip: string;
    rightText: string;
    rightTooltip: string;
    tooltipLoc: UIWidgetTooltipLocation;
    widgetSizeSetting: number;
    textureKit: string;
    frameTextureKit: string;
    hasTimer: boolean;
    orderIndex: number;
    widgetTag: string;
    inAnimType: WidgetAnimationType;
    outAnimType: WidgetAnimationType;
    widgetScale: UIWidgetScale;
    layoutDirection: UIWidgetLayoutDirection;
    modelSceneLayer: UIWidgetModelSceneLayer;
    scriptedAnimationEffectID: number;
}
export interface DoubleStateIconRowVisualizationInfo {
    shownState: WidgetShownState;
    leftIcons: LuaArray<UIWidgetStateIconInfo>;
    rightIcons: LuaArray<UIWidgetStateIconInfo>;
    tooltipLoc: UIWidgetTooltipLocation;
    widgetSizeSetting: number;
    textureKit: string;
    frameTextureKit: string;
    hasTimer: boolean;
    orderIndex: number;
    widgetTag: string;
    inAnimType: WidgetAnimationType;
    outAnimType: WidgetAnimationType;
    widgetScale: UIWidgetScale;
    layoutDirection: UIWidgetLayoutDirection;
    modelSceneLayer: UIWidgetModelSceneLayer;
    scriptedAnimationEffectID: number;
}
export interface DoubleStatusBarWidgetVisualizationInfo {
    shownState: WidgetShownState;
    leftBarMin: number;
    leftBarMax: number;
    leftBarValue: number;
    leftBarTooltip: string;
    rightBarMin: number;
    rightBarMax: number;
    rightBarValue: number;
    rightBarTooltip: string;
    barValueTextType: StatusBarValueTextType;
    text: string;
    leftBarTooltipLoc: UIWidgetTooltipLocation;
    rightBarTooltipLoc: UIWidgetTooltipLocation;
    widgetSizeSetting: number;
    textureKit: string;
    frameTextureKit: string;
    hasTimer: boolean;
    orderIndex: number;
    widgetTag: string;
    inAnimType: WidgetAnimationType;
    outAnimType: WidgetAnimationType;
    widgetScale: UIWidgetScale;
    layoutDirection: UIWidgetLayoutDirection;
    modelSceneLayer: UIWidgetModelSceneLayer;
    scriptedAnimationEffectID: number;
}
export interface HorizontalCurrenciesWidgetVisualizationInfo {
    shownState: WidgetShownState;
    currencies: LuaArray<UIWidgetCurrencyInfo>;
    tooltipLoc: UIWidgetTooltipLocation;
    widgetSizeSetting: number;
    textureKit: string;
    frameTextureKit: string;
    hasTimer: boolean;
    orderIndex: number;
    widgetTag: string;
    inAnimType: WidgetAnimationType;
    outAnimType: WidgetAnimationType;
    widgetScale: UIWidgetScale;
    layoutDirection: UIWidgetLayoutDirection;
    modelSceneLayer: UIWidgetModelSceneLayer;
    scriptedAnimationEffectID: number;
}
export interface IconAndTextWidgetVisualizationInfo {
    state: IconAndTextWidgetState;
    text: string;
    tooltip: string;
    dynamicTooltip: string;
    tooltipLoc: UIWidgetTooltipLocation;
    widgetSizeSetting: number;
    textureKit: string;
    frameTextureKit: string;
    hasTimer: boolean;
    orderIndex: number;
    widgetTag: string;
    inAnimType: WidgetAnimationType;
    outAnimType: WidgetAnimationType;
    widgetScale: UIWidgetScale;
    layoutDirection: UIWidgetLayoutDirection;
    modelSceneLayer: UIWidgetModelSceneLayer;
    scriptedAnimationEffectID: number;
}
export interface IconTextAndBackgroundWidgetVisualizationInfo {
    shownState: WidgetShownState;
    text: string;
    widgetSizeSetting: number;
    textureKit: string;
    frameTextureKit: string;
    hasTimer: boolean;
    orderIndex: number;
    widgetTag: string;
    inAnimType: WidgetAnimationType;
    outAnimType: WidgetAnimationType;
    widgetScale: UIWidgetScale;
    layoutDirection: UIWidgetLayoutDirection;
    modelSceneLayer: UIWidgetModelSceneLayer;
    scriptedAnimationEffectID: number;
}
export interface IconTextAndCurrenciesWidgetVisualizationInfo {
    shownState: WidgetShownState;
    enabledState: WidgetEnabledState;
    descriptionShownState: WidgetShownState;
    descriptionEnabledState: WidgetEnabledState;
    text: string;
    description: string;
    currencies: LuaArray<UIWidgetCurrencyInfo>;
    tooltipLoc: UIWidgetTooltipLocation;
    widgetSizeSetting: number;
    textureKit: string;
    frameTextureKit: string;
    hasTimer: boolean;
    orderIndex: number;
    widgetTag: string;
    inAnimType: WidgetAnimationType;
    outAnimType: WidgetAnimationType;
    widgetScale: UIWidgetScale;
    layoutDirection: UIWidgetLayoutDirection;
    modelSceneLayer: UIWidgetModelSceneLayer;
    scriptedAnimationEffectID: number;
}
export interface ScenarioHeaderCurrenciesAndBackgroundWidgetVisualizationInfo {
    shownState: WidgetShownState;
    currencies: LuaArray<UIWidgetCurrencyInfo>;
    headerText: string;
    widgetSizeSetting: number;
    textureKit: string;
    frameTextureKit: string;
    hasTimer: boolean;
    orderIndex: number;
    widgetTag: string;
    inAnimType: WidgetAnimationType;
    outAnimType: WidgetAnimationType;
    widgetScale: UIWidgetScale;
    layoutDirection: UIWidgetLayoutDirection;
    modelSceneLayer: UIWidgetModelSceneLayer;
    scriptedAnimationEffectID: number;
}
export interface ScenarioHeaderTimerWidgetVisualizationInfo {
    shownState: WidgetShownState;
    timerMin: number;
    timerMax: number;
    timerValue: number;
    headerText: string;
    timerTooltip: string;
    widgetSizeSetting: number;
    textureKit: string;
    frameTextureKit: string;
    hasTimer: boolean;
    orderIndex: number;
    widgetTag: string;
    inAnimType: WidgetAnimationType;
    outAnimType: WidgetAnimationType;
    widgetScale: UIWidgetScale;
    layoutDirection: UIWidgetLayoutDirection;
    modelSceneLayer: UIWidgetModelSceneLayer;
    scriptedAnimationEffectID: number;
}
export interface SpacerVisualizationInfo {
    shownState: WidgetShownState;
    widgetWidth: number;
    widgetHeight: number;
    widgetSizeSetting: number;
    textureKit: string;
    frameTextureKit: string;
    hasTimer: boolean;
    orderIndex: number;
    widgetTag: string;
    inAnimType: WidgetAnimationType;
    outAnimType: WidgetAnimationType;
    widgetScale: UIWidgetScale;
    layoutDirection: UIWidgetLayoutDirection;
    modelSceneLayer: UIWidgetModelSceneLayer;
    scriptedAnimationEffectID: number;
}
export interface SpellDisplayVisualizationInfo {
    shownState: WidgetShownState;
    enabledState: WidgetEnabledState;
    spellInfo: UIWidgetSpellInfo;
    tooltipLoc: UIWidgetTooltipLocation;
    widgetSizeSetting: number;
    textureKit: string;
    frameTextureKit: string;
    hasTimer: boolean;
    orderIndex: number;
    widgetTag: string;
    inAnimType: WidgetAnimationType;
    outAnimType: WidgetAnimationType;
    widgetScale: UIWidgetScale;
    layoutDirection: UIWidgetLayoutDirection;
    modelSceneLayer: UIWidgetModelSceneLayer;
    scriptedAnimationEffectID: number;
}
export interface StackedResourceTrackerWidgetVisualizationInfo {
    shownState: WidgetShownState;
    resources: LuaArray<UIWidgetCurrencyInfo>;
    tooltipLoc: UIWidgetTooltipLocation;
    widgetSizeSetting: number;
    textureKit: string;
    frameTextureKit: string;
    hasTimer: boolean;
    orderIndex: number;
    widgetTag: string;
    inAnimType: WidgetAnimationType;
    outAnimType: WidgetAnimationType;
    widgetScale: UIWidgetScale;
    layoutDirection: UIWidgetLayoutDirection;
    modelSceneLayer: UIWidgetModelSceneLayer;
    scriptedAnimationEffectID: number;
}
export interface StatusBarWidgetVisualizationInfo {
    shownState: WidgetShownState;
    barMin: number;
    barMax: number;
    barValue: number;
    text: string;
    tooltip: string;
    barValueTextType: StatusBarValueTextType;
    overrideBarText: string;
    overrideBarTextShownType: StatusBarOverrideBarTextShownType;
    colorTint: StatusBarColorTintValue;
    partitionValues: LuaArray<number>;
    tooltipLoc: UIWidgetTooltipLocation;
    widgetSizeSetting: number;
    textureKit: string;
    frameTextureKit: string;
    hasTimer: boolean;
    orderIndex: number;
    widgetTag: string;
    inAnimType: WidgetAnimationType;
    outAnimType: WidgetAnimationType;
    widgetScale: UIWidgetScale;
    layoutDirection: UIWidgetLayoutDirection;
    modelSceneLayer: UIWidgetModelSceneLayer;
    scriptedAnimationEffectID: number;
}
export interface TextColumnRowEntryInfo {
    text: string;
    enabledState: WidgetEnabledState;
    hAlign: WidgetTextHorizontalAlignmentType;
    columnWidth: number;
}
export interface TextColumnRowVisualizationInfo {
    shownState: WidgetShownState;
    entries: LuaArray<TextColumnRowEntryInfo>;
    textSizeType: UIWidgetTextSizeType;
    fontType: UIWidgetFontType;
    tooltip: string;
    tooltipLoc: UIWidgetTooltipLocation;
    bottomPadding: number;
    widgetSizeSetting: number;
    textureKit: string;
    frameTextureKit: string;
    hasTimer: boolean;
    orderIndex: number;
    widgetTag: string;
    inAnimType: WidgetAnimationType;
    outAnimType: WidgetAnimationType;
    widgetScale: UIWidgetScale;
    layoutDirection: UIWidgetLayoutDirection;
    modelSceneLayer: UIWidgetModelSceneLayer;
    scriptedAnimationEffectID: number;
}
export interface TextWithStateWidgetVisualizationInfo {
    shownState: WidgetShownState;
    enabledState: WidgetEnabledState;
    text: string;
    tooltip: string;
    textSizeType: UIWidgetTextSizeType;
    fontType: UIWidgetFontType;
    bottomPadding: number;
    tooltipLoc: UIWidgetTooltipLocation;
    hAlign: WidgetTextHorizontalAlignmentType;
    widgetSizeSetting: number;
    textureKit: string;
    frameTextureKit: string;
    hasTimer: boolean;
    orderIndex: number;
    widgetTag: string;
    inAnimType: WidgetAnimationType;
    outAnimType: WidgetAnimationType;
    widgetScale: UIWidgetScale;
    layoutDirection: UIWidgetLayoutDirection;
    modelSceneLayer: UIWidgetModelSceneLayer;
    scriptedAnimationEffectID: number;
}
export interface TextureAndTextEntryInfo {
    text: string;
    tooltip: string;
}
export interface TextureAndTextRowVisualizationInfo {
    shownState: WidgetShownState;
    entries: LuaArray<TextureAndTextEntryInfo>;
    textSizeType: UIWidgetTextSizeType;
    tooltipLoc: UIWidgetTooltipLocation;
    widgetSizeSetting: number;
    textureKit: string;
    frameTextureKit: string;
    hasTimer: boolean;
    orderIndex: number;
    widgetTag: string;
    inAnimType: WidgetAnimationType;
    outAnimType: WidgetAnimationType;
    widgetScale: UIWidgetScale;
    layoutDirection: UIWidgetLayoutDirection;
    modelSceneLayer: UIWidgetModelSceneLayer;
    scriptedAnimationEffectID: number;
}
export interface TextureAndTextVisualizationInfo {
    shownState: WidgetShownState;
    text: string;
    tooltip: string;
    tooltipLoc: UIWidgetTooltipLocation;
    widgetSizeSetting: number;
    textureKit: string;
    frameTextureKit: string;
    hasTimer: boolean;
    orderIndex: number;
    widgetTag: string;
    inAnimType: WidgetAnimationType;
    outAnimType: WidgetAnimationType;
    widgetScale: UIWidgetScale;
    layoutDirection: UIWidgetLayoutDirection;
    modelSceneLayer: UIWidgetModelSceneLayer;
    scriptedAnimationEffectID: number;
}
export interface TextureWithAnimationVisualizationInfo {
    shownState: WidgetShownState;
    tooltip: string;
    tooltipLoc: UIWidgetTooltipLocation;
    widgetSizeSetting: number;
    textureKit: string;
    frameTextureKit: string;
    hasTimer: boolean;
    orderIndex: number;
    widgetTag: string;
    inAnimType: WidgetAnimationType;
    outAnimType: WidgetAnimationType;
    widgetScale: UIWidgetScale;
    layoutDirection: UIWidgetLayoutDirection;
    modelSceneLayer: UIWidgetModelSceneLayer;
    scriptedAnimationEffectID: number;
}
export interface UIWidgetCurrencyInfo {
    iconFileID: number;
    leadingText: string;
    text: string;
    tooltip: string;
    isCurrencyMaxed: boolean;
}
export interface UIWidgetInfo {
    widgetID: number;
    widgetSetID: number;
    widgetType: UIWidgetVisualizationType;
    unitToken: string | undefined;
}
export interface UIWidgetSetInfo {
    layoutDirection: UIWidgetSetLayoutDirection;
    verticalPadding: number;
}
export interface UIWidgetSpellInfo {
    spellID: number;
    tooltip: string;
    text: string;
    stackDisplay: number;
    iconSizeType: SpellDisplayIconSizeType;
    iconDisplayType: SpellDisplayIconDisplayType;
    textShownState: SpellDisplayTextShownStateType;
}
export interface UIWidgetStateIconInfo {
    iconState: IconState;
    state1Tooltip: string;
    state2Tooltip: string;
}
export interface ZoneControlVisualizationInfo {
    shownState: WidgetShownState;
    mode: ZoneControlMode;
    leadingEdgeType: ZoneControlLeadingEdgeType;
    dangerFlashType: ZoneControlDangerFlashType;
    zoneEntries: LuaArray<ZoneEntry>;
    tooltipLoc: UIWidgetTooltipLocation;
    widgetSizeSetting: number;
    textureKit: string;
    frameTextureKit: string;
    hasTimer: boolean;
    orderIndex: number;
    widgetTag: string;
    inAnimType: WidgetAnimationType;
    outAnimType: WidgetAnimationType;
    widgetScale: UIWidgetScale;
    layoutDirection: UIWidgetLayoutDirection;
    modelSceneLayer: UIWidgetModelSceneLayer;
    scriptedAnimationEffectID: number;
}
export interface ZoneEntry {
    state: ZoneControlState;
    activeState: ZoneControlActiveState;
    fillType: ZoneControlFillType;
    min: number;
    max: number;
    current: number;
    capturePoint: number;
    tooltip: string;
}
export const C_UIWidgetManager = {
    GetAllWidgetsBySetID: (setID: number): LuaArray<UIWidgetInfo> => {
        return {} as any;
    },
    GetBelowMinimapWidgetSetID: (): number => {
        return 0;
    },
    GetBulletTextListWidgetVisualizationInfo: (
        widgetID: number
    ): BulletTextListWidgetVisualizationInfo | undefined => {
        return {
            shownState: WidgetShownState.Hidden,
            enabledState: WidgetEnabledState.Disabled,
            lines: {} as any,
            widgetSizeSetting: 0,
            textureKit: "",
            frameTextureKit: "",
            hasTimer: false,
            orderIndex: 0,
            widgetTag: "",
            inAnimType: WidgetAnimationType.None,
            outAnimType: WidgetAnimationType.None,
            widgetScale: UIWidgetScale.OneHundred,
            layoutDirection: UIWidgetLayoutDirection.Default,
            modelSceneLayer: UIWidgetModelSceneLayer.None,
            scriptedAnimationEffectID: 0,
        };
    },
    GetCaptureBarWidgetVisualizationInfo: (
        widgetID: number
    ): CaptureBarWidgetVisualizationInfo | undefined => {
        return {
            shownState: WidgetShownState.Hidden,
            barValue: 0,
            barMinValue: 0,
            barMaxValue: 0,
            neutralZoneSize: 0,
            neutralZoneCenter: 0,
            tooltip: "",
            glowAnimType: CaptureBarWidgetGlowAnimType.None,
            fillDirectionType: CaptureBarWidgetFillDirectionType.RightToLeft,
            tooltipLoc: UIWidgetTooltipLocation.Default,
            widgetSizeSetting: 0,
            textureKit: "",
            frameTextureKit: "",
            hasTimer: false,
            orderIndex: 0,
            widgetTag: "",
            inAnimType: WidgetAnimationType.None,
            outAnimType: WidgetAnimationType.None,
            widgetScale: UIWidgetScale.OneHundred,
            layoutDirection: UIWidgetLayoutDirection.Default,
            modelSceneLayer: UIWidgetModelSceneLayer.None,
            scriptedAnimationEffectID: 0,
        };
    },
    GetCaptureZoneVisualizationInfo: (
        widgetID: number
    ): CaptureZoneVisualizationInfo | undefined => {
        return {
            shownState: WidgetShownState.Hidden,
            mode: ZoneControlMode.BothStatesAreGood,
            leadingEdgeType: ZoneControlLeadingEdgeType.NoLeadingEdge,
            dangerFlashType: ZoneControlDangerFlashType.ShowOnGoodStates,
            zoneInfo: {
                state: ZoneControlState.State1,
                activeState: ZoneControlActiveState.Inactive,
                fillType: ZoneControlFillType.SingleFillClockwise,
                min: 0,
                max: 0,
                current: 0,
                capturePoint: 0,
                tooltip: "",
            },
            tooltipLoc: UIWidgetTooltipLocation.Default,
            widgetSizeSetting: 0,
            textureKit: "",
            frameTextureKit: "",
            hasTimer: false,
            orderIndex: 0,
            widgetTag: "",
            inAnimType: WidgetAnimationType.None,
            outAnimType: WidgetAnimationType.None,
            widgetScale: UIWidgetScale.OneHundred,
            layoutDirection: UIWidgetLayoutDirection.Default,
            modelSceneLayer: UIWidgetModelSceneLayer.None,
            scriptedAnimationEffectID: 0,
        };
    },
    GetDiscreteProgressStepsVisualizationInfo: (
        widgetID: number
    ): DiscreteProgressStepsVisualizationInfo | undefined => {
        return {
            shownState: WidgetShownState.Hidden,
            tooltip: "",
            progressMin: 0,
            progressMax: 0,
            progressVal: 0,
            numSteps: 0,
            tooltipLoc: UIWidgetTooltipLocation.Default,
            widgetSizeSetting: 0,
            textureKit: "",
            frameTextureKit: "",
            hasTimer: false,
            orderIndex: 0,
            widgetTag: "",
            inAnimType: WidgetAnimationType.None,
            outAnimType: WidgetAnimationType.None,
            widgetScale: UIWidgetScale.OneHundred,
            layoutDirection: UIWidgetLayoutDirection.Default,
            modelSceneLayer: UIWidgetModelSceneLayer.None,
            scriptedAnimationEffectID: 0,
        };
    },
    GetDoubleIconAndTextWidgetVisualizationInfo: (
        widgetID: number
    ): DoubleIconAndTextWidgetVisualizationInfo | undefined => {
        return {
            shownState: WidgetShownState.Hidden,
            label: "",
            leftText: "",
            leftTooltip: "",
            rightText: "",
            rightTooltip: "",
            tooltipLoc: UIWidgetTooltipLocation.Default,
            widgetSizeSetting: 0,
            textureKit: "",
            frameTextureKit: "",
            hasTimer: false,
            orderIndex: 0,
            widgetTag: "",
            inAnimType: WidgetAnimationType.None,
            outAnimType: WidgetAnimationType.None,
            widgetScale: UIWidgetScale.OneHundred,
            layoutDirection: UIWidgetLayoutDirection.Default,
            modelSceneLayer: UIWidgetModelSceneLayer.None,
            scriptedAnimationEffectID: 0,
        };
    },
    GetDoubleStateIconRowVisualizationInfo: (
        widgetID: number
    ): DoubleStateIconRowVisualizationInfo | undefined => {
        return {
            shownState: WidgetShownState.Hidden,
            leftIcons: {} as any,
            rightIcons: {} as any,
            tooltipLoc: UIWidgetTooltipLocation.Default,
            widgetSizeSetting: 0,
            textureKit: "",
            frameTextureKit: "",
            hasTimer: false,
            orderIndex: 0,
            widgetTag: "",
            inAnimType: WidgetAnimationType.None,
            outAnimType: WidgetAnimationType.None,
            widgetScale: UIWidgetScale.OneHundred,
            layoutDirection: UIWidgetLayoutDirection.Default,
            modelSceneLayer: UIWidgetModelSceneLayer.None,
            scriptedAnimationEffectID: 0,
        };
    },
    GetDoubleStatusBarWidgetVisualizationInfo: (
        widgetID: number
    ): DoubleStatusBarWidgetVisualizationInfo | undefined => {
        return {
            shownState: WidgetShownState.Hidden,
            leftBarMin: 0,
            leftBarMax: 0,
            leftBarValue: 0,
            leftBarTooltip: "",
            rightBarMin: 0,
            rightBarMax: 0,
            rightBarValue: 0,
            rightBarTooltip: "",
            barValueTextType: StatusBarValueTextType.Hidden,
            text: "",
            leftBarTooltipLoc: UIWidgetTooltipLocation.Default,
            rightBarTooltipLoc: UIWidgetTooltipLocation.Default,
            widgetSizeSetting: 0,
            textureKit: "",
            frameTextureKit: "",
            hasTimer: false,
            orderIndex: 0,
            widgetTag: "",
            inAnimType: WidgetAnimationType.None,
            outAnimType: WidgetAnimationType.None,
            widgetScale: UIWidgetScale.OneHundred,
            layoutDirection: UIWidgetLayoutDirection.Default,
            modelSceneLayer: UIWidgetModelSceneLayer.None,
            scriptedAnimationEffectID: 0,
        };
    },
    GetHorizontalCurrenciesWidgetVisualizationInfo: (
        widgetID: number
    ): HorizontalCurrenciesWidgetVisualizationInfo | undefined => {
        return {
            shownState: WidgetShownState.Hidden,
            currencies: {} as any,
            tooltipLoc: UIWidgetTooltipLocation.Default,
            widgetSizeSetting: 0,
            textureKit: "",
            frameTextureKit: "",
            hasTimer: false,
            orderIndex: 0,
            widgetTag: "",
            inAnimType: WidgetAnimationType.None,
            outAnimType: WidgetAnimationType.None,
            widgetScale: UIWidgetScale.OneHundred,
            layoutDirection: UIWidgetLayoutDirection.Default,
            modelSceneLayer: UIWidgetModelSceneLayer.None,
            scriptedAnimationEffectID: 0,
        };
    },
    GetIconAndTextWidgetVisualizationInfo: (
        widgetID: number
    ): IconAndTextWidgetVisualizationInfo | undefined => {
        return {
            state: IconAndTextWidgetState.Hidden,
            text: "",
            tooltip: "",
            dynamicTooltip: "",
            tooltipLoc: UIWidgetTooltipLocation.Default,
            widgetSizeSetting: 0,
            textureKit: "",
            frameTextureKit: "",
            hasTimer: false,
            orderIndex: 0,
            widgetTag: "",
            inAnimType: WidgetAnimationType.None,
            outAnimType: WidgetAnimationType.None,
            widgetScale: UIWidgetScale.OneHundred,
            layoutDirection: UIWidgetLayoutDirection.Default,
            modelSceneLayer: UIWidgetModelSceneLayer.None,
            scriptedAnimationEffectID: 0,
        };
    },
    GetIconTextAndBackgroundWidgetVisualizationInfo: (
        widgetID: number
    ): IconTextAndBackgroundWidgetVisualizationInfo | undefined => {
        return {
            shownState: WidgetShownState.Hidden,
            text: "",
            widgetSizeSetting: 0,
            textureKit: "",
            frameTextureKit: "",
            hasTimer: false,
            orderIndex: 0,
            widgetTag: "",
            inAnimType: WidgetAnimationType.None,
            outAnimType: WidgetAnimationType.None,
            widgetScale: UIWidgetScale.OneHundred,
            layoutDirection: UIWidgetLayoutDirection.Default,
            modelSceneLayer: UIWidgetModelSceneLayer.None,
            scriptedAnimationEffectID: 0,
        };
    },
    GetIconTextAndCurrenciesWidgetVisualizationInfo: (
        widgetID: number
    ): IconTextAndCurrenciesWidgetVisualizationInfo | undefined => {
        return {
            shownState: WidgetShownState.Hidden,
            enabledState: WidgetEnabledState.Disabled,
            descriptionShownState: WidgetShownState.Hidden,
            descriptionEnabledState: WidgetEnabledState.Disabled,
            text: "",
            description: "",
            currencies: {} as any,
            tooltipLoc: UIWidgetTooltipLocation.Default,
            widgetSizeSetting: 0,
            textureKit: "",
            frameTextureKit: "",
            hasTimer: false,
            orderIndex: 0,
            widgetTag: "",
            inAnimType: WidgetAnimationType.None,
            outAnimType: WidgetAnimationType.None,
            widgetScale: UIWidgetScale.OneHundred,
            layoutDirection: UIWidgetLayoutDirection.Default,
            modelSceneLayer: UIWidgetModelSceneLayer.None,
            scriptedAnimationEffectID: 0,
        };
    },
    GetObjectiveTrackerWidgetSetID: (): number => {
        return 0;
    },
    GetPowerBarWidgetSetID: (): number => {
        return 0;
    },
    GetScenarioHeaderCurrenciesAndBackgroundWidgetVisualizationInfo: (
        widgetID: number
    ):
        | ScenarioHeaderCurrenciesAndBackgroundWidgetVisualizationInfo
        | undefined => {
        return {
            shownState: WidgetShownState.Hidden,
            currencies: {} as any,
            headerText: "",
            widgetSizeSetting: 0,
            textureKit: "",
            frameTextureKit: "",
            hasTimer: false,
            orderIndex: 0,
            widgetTag: "",
            inAnimType: WidgetAnimationType.None,
            outAnimType: WidgetAnimationType.None,
            widgetScale: UIWidgetScale.OneHundred,
            layoutDirection: UIWidgetLayoutDirection.Default,
            modelSceneLayer: UIWidgetModelSceneLayer.None,
            scriptedAnimationEffectID: 0,
        };
    },
    GetScenarioHeaderTimerWidgetVisualizationInfo: (
        widgetID: number
    ): ScenarioHeaderTimerWidgetVisualizationInfo | undefined => {
        return {
            shownState: WidgetShownState.Hidden,
            timerMin: 0,
            timerMax: 0,
            timerValue: 0,
            headerText: "",
            timerTooltip: "",
            widgetSizeSetting: 0,
            textureKit: "",
            frameTextureKit: "",
            hasTimer: false,
            orderIndex: 0,
            widgetTag: "",
            inAnimType: WidgetAnimationType.None,
            outAnimType: WidgetAnimationType.None,
            widgetScale: UIWidgetScale.OneHundred,
            layoutDirection: UIWidgetLayoutDirection.Default,
            modelSceneLayer: UIWidgetModelSceneLayer.None,
            scriptedAnimationEffectID: 0,
        };
    },
    GetSpacerVisualizationInfo: (
        widgetID: number
    ): SpacerVisualizationInfo | undefined => {
        return {
            shownState: WidgetShownState.Hidden,
            widgetWidth: 0,
            widgetHeight: 0,
            widgetSizeSetting: 0,
            textureKit: "",
            frameTextureKit: "",
            hasTimer: false,
            orderIndex: 0,
            widgetTag: "",
            inAnimType: WidgetAnimationType.None,
            outAnimType: WidgetAnimationType.None,
            widgetScale: UIWidgetScale.OneHundred,
            layoutDirection: UIWidgetLayoutDirection.Default,
            modelSceneLayer: UIWidgetModelSceneLayer.None,
            scriptedAnimationEffectID: 0,
        };
    },
    GetSpellDisplayVisualizationInfo: (
        widgetID: number
    ): SpellDisplayVisualizationInfo | undefined => {
        return {
            shownState: WidgetShownState.Hidden,
            enabledState: WidgetEnabledState.Disabled,
            spellInfo: {
                spellID: 0,
                tooltip: "",
                text: "",
                stackDisplay: 0,
                iconSizeType: SpellDisplayIconSizeType.Small,
                iconDisplayType: SpellDisplayIconDisplayType.Buff,
                textShownState: SpellDisplayTextShownStateType.Shown,
            },
            tooltipLoc: UIWidgetTooltipLocation.Default,
            widgetSizeSetting: 0,
            textureKit: "",
            frameTextureKit: "",
            hasTimer: false,
            orderIndex: 0,
            widgetTag: "",
            inAnimType: WidgetAnimationType.None,
            outAnimType: WidgetAnimationType.None,
            widgetScale: UIWidgetScale.OneHundred,
            layoutDirection: UIWidgetLayoutDirection.Default,
            modelSceneLayer: UIWidgetModelSceneLayer.None,
            scriptedAnimationEffectID: 0,
        };
    },
    GetStackedResourceTrackerWidgetVisualizationInfo: (
        widgetID: number
    ): StackedResourceTrackerWidgetVisualizationInfo | undefined => {
        return {
            shownState: WidgetShownState.Hidden,
            resources: {} as any,
            tooltipLoc: UIWidgetTooltipLocation.Default,
            widgetSizeSetting: 0,
            textureKit: "",
            frameTextureKit: "",
            hasTimer: false,
            orderIndex: 0,
            widgetTag: "",
            inAnimType: WidgetAnimationType.None,
            outAnimType: WidgetAnimationType.None,
            widgetScale: UIWidgetScale.OneHundred,
            layoutDirection: UIWidgetLayoutDirection.Default,
            modelSceneLayer: UIWidgetModelSceneLayer.None,
            scriptedAnimationEffectID: 0,
        };
    },
    GetStatusBarWidgetVisualizationInfo: (
        widgetID: number
    ): StatusBarWidgetVisualizationInfo | undefined => {
        return {
            shownState: WidgetShownState.Hidden,
            barMin: 0,
            barMax: 0,
            barValue: 0,
            text: "",
            tooltip: "",
            barValueTextType: StatusBarValueTextType.Hidden,
            overrideBarText: "",
            overrideBarTextShownType: StatusBarOverrideBarTextShownType.Never,
            colorTint: StatusBarColorTintValue.None,
            partitionValues: {} as any,
            tooltipLoc: UIWidgetTooltipLocation.Default,
            widgetSizeSetting: 0,
            textureKit: "",
            frameTextureKit: "",
            hasTimer: false,
            orderIndex: 0,
            widgetTag: "",
            inAnimType: WidgetAnimationType.None,
            outAnimType: WidgetAnimationType.None,
            widgetScale: UIWidgetScale.OneHundred,
            layoutDirection: UIWidgetLayoutDirection.Default,
            modelSceneLayer: UIWidgetModelSceneLayer.None,
            scriptedAnimationEffectID: 0,
        };
    },
    GetTextColumnRowVisualizationInfo: (
        widgetID: number
    ): TextColumnRowVisualizationInfo | undefined => {
        return {
            shownState: WidgetShownState.Hidden,
            entries: {} as any,
            textSizeType: UIWidgetTextSizeType.Small,
            fontType: UIWidgetFontType.Normal,
            tooltip: "",
            tooltipLoc: UIWidgetTooltipLocation.Default,
            bottomPadding: 0,
            widgetSizeSetting: 0,
            textureKit: "",
            frameTextureKit: "",
            hasTimer: false,
            orderIndex: 0,
            widgetTag: "",
            inAnimType: WidgetAnimationType.None,
            outAnimType: WidgetAnimationType.None,
            widgetScale: UIWidgetScale.OneHundred,
            layoutDirection: UIWidgetLayoutDirection.Default,
            modelSceneLayer: UIWidgetModelSceneLayer.None,
            scriptedAnimationEffectID: 0,
        };
    },
    GetTextWithStateWidgetVisualizationInfo: (
        widgetID: number
    ): TextWithStateWidgetVisualizationInfo | undefined => {
        return {
            shownState: WidgetShownState.Hidden,
            enabledState: WidgetEnabledState.Disabled,
            text: "",
            tooltip: "",
            textSizeType: UIWidgetTextSizeType.Small,
            fontType: UIWidgetFontType.Normal,
            bottomPadding: 0,
            tooltipLoc: UIWidgetTooltipLocation.Default,
            hAlign: WidgetTextHorizontalAlignmentType.Left,
            widgetSizeSetting: 0,
            textureKit: "",
            frameTextureKit: "",
            hasTimer: false,
            orderIndex: 0,
            widgetTag: "",
            inAnimType: WidgetAnimationType.None,
            outAnimType: WidgetAnimationType.None,
            widgetScale: UIWidgetScale.OneHundred,
            layoutDirection: UIWidgetLayoutDirection.Default,
            modelSceneLayer: UIWidgetModelSceneLayer.None,
            scriptedAnimationEffectID: 0,
        };
    },
    GetTextureAndTextRowVisualizationInfo: (
        widgetID: number
    ): TextureAndTextRowVisualizationInfo | undefined => {
        return {
            shownState: WidgetShownState.Hidden,
            entries: {} as any,
            textSizeType: UIWidgetTextSizeType.Small,
            tooltipLoc: UIWidgetTooltipLocation.Default,
            widgetSizeSetting: 0,
            textureKit: "",
            frameTextureKit: "",
            hasTimer: false,
            orderIndex: 0,
            widgetTag: "",
            inAnimType: WidgetAnimationType.None,
            outAnimType: WidgetAnimationType.None,
            widgetScale: UIWidgetScale.OneHundred,
            layoutDirection: UIWidgetLayoutDirection.Default,
            modelSceneLayer: UIWidgetModelSceneLayer.None,
            scriptedAnimationEffectID: 0,
        };
    },
    GetTextureAndTextVisualizationInfo: (
        widgetID: number
    ): TextureAndTextVisualizationInfo | undefined => {
        return {
            shownState: WidgetShownState.Hidden,
            text: "",
            tooltip: "",
            tooltipLoc: UIWidgetTooltipLocation.Default,
            widgetSizeSetting: 0,
            textureKit: "",
            frameTextureKit: "",
            hasTimer: false,
            orderIndex: 0,
            widgetTag: "",
            inAnimType: WidgetAnimationType.None,
            outAnimType: WidgetAnimationType.None,
            widgetScale: UIWidgetScale.OneHundred,
            layoutDirection: UIWidgetLayoutDirection.Default,
            modelSceneLayer: UIWidgetModelSceneLayer.None,
            scriptedAnimationEffectID: 0,
        };
    },
    GetTextureWithAnimationVisualizationInfo: (
        widgetID: number
    ): TextureWithAnimationVisualizationInfo | undefined => {
        return {
            shownState: WidgetShownState.Hidden,
            tooltip: "",
            tooltipLoc: UIWidgetTooltipLocation.Default,
            widgetSizeSetting: 0,
            textureKit: "",
            frameTextureKit: "",
            hasTimer: false,
            orderIndex: 0,
            widgetTag: "",
            inAnimType: WidgetAnimationType.None,
            outAnimType: WidgetAnimationType.None,
            widgetScale: UIWidgetScale.OneHundred,
            layoutDirection: UIWidgetLayoutDirection.Default,
            modelSceneLayer: UIWidgetModelSceneLayer.None,
            scriptedAnimationEffectID: 0,
        };
    },
    GetTopCenterWidgetSetID: (): number => {
        return 0;
    },
    GetWidgetSetInfo: (widgetSetID: number): UIWidgetSetInfo => {
        return {
            layoutDirection: UIWidgetSetLayoutDirection.Vertical,
            verticalPadding: 0,
        };
    },
    GetZoneControlVisualizationInfo: (
        widgetID: number
    ): ZoneControlVisualizationInfo | undefined => {
        return {
            shownState: WidgetShownState.Hidden,
            mode: ZoneControlMode.BothStatesAreGood,
            leadingEdgeType: ZoneControlLeadingEdgeType.NoLeadingEdge,
            dangerFlashType: ZoneControlDangerFlashType.ShowOnGoodStates,
            zoneEntries: {} as any,
            tooltipLoc: UIWidgetTooltipLocation.Default,
            widgetSizeSetting: 0,
            textureKit: "",
            frameTextureKit: "",
            hasTimer: false,
            orderIndex: 0,
            widgetTag: "",
            inAnimType: WidgetAnimationType.None,
            outAnimType: WidgetAnimationType.None,
            widgetScale: UIWidgetScale.OneHundred,
            layoutDirection: UIWidgetLayoutDirection.Default,
            modelSceneLayer: UIWidgetModelSceneLayer.None,
            scriptedAnimationEffectID: 0,
        };
    },
    RegisterUnitForWidgetUpdates: (unitToken: string): void => {},
    SetProcessingUnit: (unit: string | undefined): void => {},
    UnregisterUnitForWidgetUpdates: (unitToken: string): void => {},
};
export type UpdateAllUiWidgetsEvent = (
    frame: UIFrame,
    e: "UPDATE_ALL_UI_WIDGETS"
) => void;
export type UpdateUiWidgetEvent = (
    frame: UIFrame,
    e: "UPDATE_UI_WIDGET",
    widgetInfo: UIWidgetInfo
) => void;
