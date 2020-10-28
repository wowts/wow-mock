import {UIWidgetScale, UIWidgetLayoutDirection, UIWidgetVisualizationType, UIWidgetSetLayoutDirection} from "./common";
import { UIFrame } from "../ui";
export const enum CaptureBarWidgetFillDirectionType {
    RightToLeft = 0,
    LeftToRight = 1
}
export const enum CaptureBarWidgetGlowAnimType {
    None = 0,
    Pulse = 1
}
export const enum IconAndTextWidgetState {
    Hidden = 0,
    Shown = 1,
    ShownWithDynamicIconFlashing = 2,
    ShownWithDynamicIconNotFlashing = 3
}
export const enum IconState {
    Hidden = 0,
    ShowState1 = 1,
    ShowState2 = 2
}
export const enum SpellDisplayIconDisplayType {
    Buff = 0,
    Debuff = 1,
    Circular = 2
}
export const enum SpellDisplayIconSizeType {
    Small = 0,
    Medium = 1,
    Large = 2
}
export const enum SpellDisplayTextShownStateType {
    Shown = 0,
    Hidden = 1
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
    Blue = 8
}
export const enum StatusBarOverrideBarTextShownType {
    Never = 0,
    Always = 1,
    OnlyOnMouseover = 2,
    OnlyNotOnMouseover = 3
}
export const enum StatusBarValueTextType {
    Hidden = 0,
    Percentage = 1,
    Value = 2,
    Time = 3,
    TimeShowOneLevelOnly = 4,
    ValueOverMax = 5,
    ValueOverMaxNormalized = 6
}
export const enum UIWidgetFlag {
    UniversalWidget = 1
}
export const enum UIWidgetFontType {
    Normal = 0,
    Shadow = 1,
    Outline = 2
}
export const enum UIWidgetTextSizeType {
    Small = 0,
    Medium = 1,
    Large = 2,
    Huge = 3
}
export const enum WidgetAnimationType {
    None = 0,
    Fade = 1
}
export const enum WidgetCurrencyClass {
    Currency = 0,
    Item = 1
}
export const enum WidgetEnabledState {
    Disabled = 0,
    Enabled = 1,
    Red = 2,
    Highlight = 3
}
export const enum WidgetShownState {
    Hidden = 0,
    Shown = 1
}
export const enum ZoneControlActiveState {
    Inactive = 0,
    Active = 1
}
export const enum ZoneControlDangerFlashType {
    ShowOnGoodStates = 0,
    ShowOnBadStates = 1,
    ShowOnBoth = 2,
    ShowOnNeither = 3
}
export const enum ZoneControlFillType {
    SingleFillClockwise = 0,
    SingleFillCounterClockwise = 1,
    DoubleFillClockwise = 2,
    DoubleFillCounterClockwise = 3
}
export const enum ZoneControlLeadingEdgeType {
    NoLeadingEdge = 0,
    UseLeadingEdge = 1
}
export const enum ZoneControlMode {
    BothStatesAreGood = 0,
    State1IsGood = 1,
    State2IsGood = 2,
    NeitherStateIsGood = 3
}
export const enum ZoneControlState {
    State1 = 0,
    State2 = 1
}
export interface BulletTextListWidgetVisualizationInfo {
    shownState: WidgetShownState;
    enabledState: WidgetEnabledState;
    lines: any;
    widgetSizeSetting: number;
    textureKit: string;
    frameTextureKit: string;
    hasTimer: boolean;
    orderIndex: number;
    widgetTag: string;
    inAnimType: WidgetAnimationType;
    outAnimType: WidgetAnimationType;
    widgetScale: UIWidgetScale;
    layoutDirection: UIWidgetLayoutDirection
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
    widgetSizeSetting: number;
    textureKit: string;
    frameTextureKit: string;
    hasTimer: boolean;
    orderIndex: number;
    widgetTag: string;
    inAnimType: WidgetAnimationType;
    outAnimType: WidgetAnimationType;
    widgetScale: UIWidgetScale;
    layoutDirection: UIWidgetLayoutDirection
}
export interface CaptureZoneVisualizationInfo {
    shownState: WidgetShownState;
    mode: ZoneControlMode;
    leadingEdgeType: ZoneControlLeadingEdgeType;
    dangerFlashType: ZoneControlDangerFlashType;
    zoneInfo: ZoneEntry;
    widgetSizeSetting: number;
    textureKit: string;
    frameTextureKit: string;
    hasTimer: boolean;
    orderIndex: number;
    widgetTag: string;
    inAnimType: WidgetAnimationType;
    outAnimType: WidgetAnimationType;
    widgetScale: UIWidgetScale;
    layoutDirection: UIWidgetLayoutDirection
}
export interface DiscreteProgressStepsVisualizationInfo {
    shownState: WidgetShownState;
    tooltip: string;
    progressMin: number;
    progressMax: number;
    progressVal: number;
    numSteps: number;
    widgetSizeSetting: number;
    textureKit: string;
    frameTextureKit: string;
    hasTimer: boolean;
    orderIndex: number;
    widgetTag: string;
    inAnimType: WidgetAnimationType;
    outAnimType: WidgetAnimationType;
    widgetScale: UIWidgetScale;
    layoutDirection: UIWidgetLayoutDirection
}
export interface DoubleIconAndTextWidgetVisualizationInfo {
    shownState: WidgetShownState;
    label: string;
    leftText: string;
    leftTooltip: string;
    rightText: string;
    rightTooltip: string;
    widgetSizeSetting: number;
    textureKit: string;
    frameTextureKit: string;
    hasTimer: boolean;
    orderIndex: number;
    widgetTag: string;
    inAnimType: WidgetAnimationType;
    outAnimType: WidgetAnimationType;
    widgetScale: UIWidgetScale;
    layoutDirection: UIWidgetLayoutDirection
}
export interface DoubleStateIconRowVisualizationInfo {
    shownState: WidgetShownState;
    leftIcons: any;
    rightIcons: any;
    widgetSizeSetting: number;
    textureKit: string;
    frameTextureKit: string;
    hasTimer: boolean;
    orderIndex: number;
    widgetTag: string;
    inAnimType: WidgetAnimationType;
    outAnimType: WidgetAnimationType;
    widgetScale: UIWidgetScale;
    layoutDirection: UIWidgetLayoutDirection
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
    widgetSizeSetting: number;
    textureKit: string;
    frameTextureKit: string;
    hasTimer: boolean;
    orderIndex: number;
    widgetTag: string;
    inAnimType: WidgetAnimationType;
    outAnimType: WidgetAnimationType;
    widgetScale: UIWidgetScale;
    layoutDirection: UIWidgetLayoutDirection
}
export interface HorizontalCurrenciesWidgetVisualizationInfo {
    shownState: WidgetShownState;
    currencies: any;
    widgetSizeSetting: number;
    textureKit: string;
    frameTextureKit: string;
    hasTimer: boolean;
    orderIndex: number;
    widgetTag: string;
    inAnimType: WidgetAnimationType;
    outAnimType: WidgetAnimationType;
    widgetScale: UIWidgetScale;
    layoutDirection: UIWidgetLayoutDirection
}
export interface IconAndTextWidgetVisualizationInfo {
    state: IconAndTextWidgetState;
    text: string;
    tooltip: string;
    dynamicTooltip: string;
    widgetSizeSetting: number;
    textureKit: string;
    frameTextureKit: string;
    hasTimer: boolean;
    orderIndex: number;
    widgetTag: string;
    inAnimType: WidgetAnimationType;
    outAnimType: WidgetAnimationType;
    widgetScale: UIWidgetScale;
    layoutDirection: UIWidgetLayoutDirection
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
    layoutDirection: UIWidgetLayoutDirection
}
export interface IconTextAndCurrenciesWidgetVisualizationInfo {
    shownState: WidgetShownState;
    enabledState: WidgetEnabledState;
    descriptionShownState: WidgetShownState;
    descriptionEnabledState: WidgetEnabledState;
    text: string;
    description: string;
    currencies: any;
    widgetSizeSetting: number;
    textureKit: string;
    frameTextureKit: string;
    hasTimer: boolean;
    orderIndex: number;
    widgetTag: string;
    inAnimType: WidgetAnimationType;
    outAnimType: WidgetAnimationType;
    widgetScale: UIWidgetScale;
    layoutDirection: UIWidgetLayoutDirection
}
export interface ScenarioHeaderCurrenciesAndBackgroundWidgetVisualizationInfo {
    shownState: WidgetShownState;
    currencies: any;
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
    layoutDirection: UIWidgetLayoutDirection
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
    layoutDirection: UIWidgetLayoutDirection
}
export interface SpellDisplayVisualizationInfo {
    shownState: WidgetShownState;
    enabledState: WidgetEnabledState;
    spellInfo: UIWidgetSpellInfo;
    widgetSizeSetting: number;
    textureKit: string;
    frameTextureKit: string;
    hasTimer: boolean;
    orderIndex: number;
    widgetTag: string;
    inAnimType: WidgetAnimationType;
    outAnimType: WidgetAnimationType;
    widgetScale: UIWidgetScale;
    layoutDirection: UIWidgetLayoutDirection
}
export interface StackedResourceTrackerWidgetVisualizationInfo {
    shownState: WidgetShownState;
    resources: any;
    widgetSizeSetting: number;
    textureKit: string;
    frameTextureKit: string;
    hasTimer: boolean;
    orderIndex: number;
    widgetTag: string;
    inAnimType: WidgetAnimationType;
    outAnimType: WidgetAnimationType;
    widgetScale: UIWidgetScale;
    layoutDirection: UIWidgetLayoutDirection
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
    partitionValues: any;
    widgetSizeSetting: number;
    textureKit: string;
    frameTextureKit: string;
    hasTimer: boolean;
    orderIndex: number;
    widgetTag: string;
    inAnimType: WidgetAnimationType;
    outAnimType: WidgetAnimationType;
    widgetScale: UIWidgetScale;
    layoutDirection: UIWidgetLayoutDirection
}
export interface TextWithStateWidgetVisualizationInfo {
    shownState: WidgetShownState;
    enabledState: WidgetEnabledState;
    text: string;
    tooltip: string;
    textSizeType: UIWidgetTextSizeType;
    fontType: UIWidgetFontType;
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
    layoutDirection: UIWidgetLayoutDirection
}
export interface TextureAndTextEntryInfo {
    text: string;
    tooltip: string
}
export interface TextureAndTextRowVisualizationInfo {
    shownState: WidgetShownState;
    entries: any;
    textSizeType: UIWidgetTextSizeType;
    widgetSizeSetting: number;
    textureKit: string;
    frameTextureKit: string;
    hasTimer: boolean;
    orderIndex: number;
    widgetTag: string;
    inAnimType: WidgetAnimationType;
    outAnimType: WidgetAnimationType;
    widgetScale: UIWidgetScale;
    layoutDirection: UIWidgetLayoutDirection
}
export interface TextureAndTextVisualizationInfo {
    shownState: WidgetShownState;
    text: string;
    tooltip: string;
    widgetSizeSetting: number;
    textureKit: string;
    frameTextureKit: string;
    hasTimer: boolean;
    orderIndex: number;
    widgetTag: string;
    inAnimType: WidgetAnimationType;
    outAnimType: WidgetAnimationType;
    widgetScale: UIWidgetScale;
    layoutDirection: UIWidgetLayoutDirection
}
export interface TextureWithAnimationVisualizationInfo {
    shownState: WidgetShownState;
    tooltip: string;
    widgetSizeSetting: number;
    textureKit: string;
    frameTextureKit: string;
    hasTimer: boolean;
    orderIndex: number;
    widgetTag: string;
    inAnimType: WidgetAnimationType;
    outAnimType: WidgetAnimationType;
    widgetScale: UIWidgetScale;
    layoutDirection: UIWidgetLayoutDirection
}
export interface UIWidgetCurrencyInfo {
    iconFileID: number;
    leadingText: string;
    text: string;
    tooltip: string;
    isCurrencyMaxed: boolean
}
export interface UIWidgetInfo {
    widgetID: number;
    widgetSetID: number;
    widgetType: UIWidgetVisualizationType;
    unitToken: string | undefined
}
export interface UIWidgetSetInfo {
    layoutDirection: UIWidgetSetLayoutDirection;
    verticalPadding: number
}
export interface UIWidgetSpellInfo {
    spellID: number;
    tooltip: string;
    text: string;
    stackDisplay: number;
    iconSizeType: SpellDisplayIconSizeType;
    iconDisplayType: SpellDisplayIconDisplayType;
    textShownState: SpellDisplayTextShownStateType
}
export interface UIWidgetStateIconInfo {
    iconState: IconState;
    state1Tooltip: string;
    state2Tooltip: string
}
export interface ZoneControlVisualizationInfo {
    shownState: WidgetShownState;
    mode: ZoneControlMode;
    leadingEdgeType: ZoneControlLeadingEdgeType;
    dangerFlashType: ZoneControlDangerFlashType;
    zoneEntries: any;
    widgetSizeSetting: number;
    textureKit: string;
    frameTextureKit: string;
    hasTimer: boolean;
    orderIndex: number;
    widgetTag: string;
    inAnimType: WidgetAnimationType;
    outAnimType: WidgetAnimationType;
    widgetScale: UIWidgetScale;
    layoutDirection: UIWidgetLayoutDirection
}
export interface ZoneEntry {
    state: ZoneControlState;
    activeState: ZoneControlActiveState;
    fillType: ZoneControlFillType;
    min: number;
    max: number;
    current: number;
    capturePoint: number;
    tooltip: string
}
export const C_UIWidgetManager = {
    GetAllWidgetsBySetID: (setID: number): any => {return {} as any},
    GetBelowMinimapWidgetSetID: (): number => {return 0},
    GetBulletTextListWidgetVisualizationInfo: (widgetID: number): BulletTextListWidgetVisualizationInfo | undefined => {return {shownState: WidgetShownState.Hidden, enabledState: WidgetEnabledState.Disabled, lines: {} as any, widgetSizeSetting: 0, textureKit: '', frameTextureKit: '', hasTimer: false, orderIndex: 0, widgetTag: '', inAnimType: WidgetAnimationType.None, outAnimType: WidgetAnimationType.None, widgetScale: UIWidgetScale.OneHundred, layoutDirection: UIWidgetLayoutDirection.Default}},
    GetCaptureBarWidgetVisualizationInfo: (widgetID: number): CaptureBarWidgetVisualizationInfo | undefined => {return {shownState: WidgetShownState.Hidden, barValue: 0, barMinValue: 0, barMaxValue: 0, neutralZoneSize: 0, neutralZoneCenter: 0, tooltip: '', glowAnimType: CaptureBarWidgetGlowAnimType.None, fillDirectionType: CaptureBarWidgetFillDirectionType.RightToLeft, widgetSizeSetting: 0, textureKit: '', frameTextureKit: '', hasTimer: false, orderIndex: 0, widgetTag: '', inAnimType: WidgetAnimationType.None, outAnimType: WidgetAnimationType.None, widgetScale: UIWidgetScale.OneHundred, layoutDirection: UIWidgetLayoutDirection.Default}},
    GetCaptureZoneVisualizationInfo: (widgetID: number): CaptureZoneVisualizationInfo | undefined => {return {shownState: WidgetShownState.Hidden, mode: ZoneControlMode.BothStatesAreGood, leadingEdgeType: ZoneControlLeadingEdgeType.NoLeadingEdge, dangerFlashType: ZoneControlDangerFlashType.ShowOnGoodStates, zoneInfo: {state: ZoneControlState.State1, activeState: ZoneControlActiveState.Inactive, fillType: ZoneControlFillType.SingleFillClockwise, min: 0, max: 0, current: 0, capturePoint: 0, tooltip: ''}, widgetSizeSetting: 0, textureKit: '', frameTextureKit: '', hasTimer: false, orderIndex: 0, widgetTag: '', inAnimType: WidgetAnimationType.None, outAnimType: WidgetAnimationType.None, widgetScale: UIWidgetScale.OneHundred, layoutDirection: UIWidgetLayoutDirection.Default}},
    GetDiscreteProgressStepsVisualizationInfo: (widgetID: number): DiscreteProgressStepsVisualizationInfo | undefined => {return {shownState: WidgetShownState.Hidden, tooltip: '', progressMin: 0, progressMax: 0, progressVal: 0, numSteps: 0, widgetSizeSetting: 0, textureKit: '', frameTextureKit: '', hasTimer: false, orderIndex: 0, widgetTag: '', inAnimType: WidgetAnimationType.None, outAnimType: WidgetAnimationType.None, widgetScale: UIWidgetScale.OneHundred, layoutDirection: UIWidgetLayoutDirection.Default}},
    GetDoubleIconAndTextWidgetVisualizationInfo: (widgetID: number): DoubleIconAndTextWidgetVisualizationInfo | undefined => {return {shownState: WidgetShownState.Hidden, label: '', leftText: '', leftTooltip: '', rightText: '', rightTooltip: '', widgetSizeSetting: 0, textureKit: '', frameTextureKit: '', hasTimer: false, orderIndex: 0, widgetTag: '', inAnimType: WidgetAnimationType.None, outAnimType: WidgetAnimationType.None, widgetScale: UIWidgetScale.OneHundred, layoutDirection: UIWidgetLayoutDirection.Default}},
    GetDoubleStateIconRowVisualizationInfo: (widgetID: number): DoubleStateIconRowVisualizationInfo | undefined => {return {shownState: WidgetShownState.Hidden, leftIcons: {} as any, rightIcons: {} as any, widgetSizeSetting: 0, textureKit: '', frameTextureKit: '', hasTimer: false, orderIndex: 0, widgetTag: '', inAnimType: WidgetAnimationType.None, outAnimType: WidgetAnimationType.None, widgetScale: UIWidgetScale.OneHundred, layoutDirection: UIWidgetLayoutDirection.Default}},
    GetDoubleStatusBarWidgetVisualizationInfo: (widgetID: number): DoubleStatusBarWidgetVisualizationInfo | undefined => {return {shownState: WidgetShownState.Hidden, leftBarMin: 0, leftBarMax: 0, leftBarValue: 0, leftBarTooltip: '', rightBarMin: 0, rightBarMax: 0, rightBarValue: 0, rightBarTooltip: '', barValueTextType: StatusBarValueTextType.Hidden, text: '', widgetSizeSetting: 0, textureKit: '', frameTextureKit: '', hasTimer: false, orderIndex: 0, widgetTag: '', inAnimType: WidgetAnimationType.None, outAnimType: WidgetAnimationType.None, widgetScale: UIWidgetScale.OneHundred, layoutDirection: UIWidgetLayoutDirection.Default}},
    GetHorizontalCurrenciesWidgetVisualizationInfo: (widgetID: number): HorizontalCurrenciesWidgetVisualizationInfo | undefined => {return {shownState: WidgetShownState.Hidden, currencies: {} as any, widgetSizeSetting: 0, textureKit: '', frameTextureKit: '', hasTimer: false, orderIndex: 0, widgetTag: '', inAnimType: WidgetAnimationType.None, outAnimType: WidgetAnimationType.None, widgetScale: UIWidgetScale.OneHundred, layoutDirection: UIWidgetLayoutDirection.Default}},
    GetIconAndTextWidgetVisualizationInfo: (widgetID: number): IconAndTextWidgetVisualizationInfo | undefined => {return {state: IconAndTextWidgetState.Hidden, text: '', tooltip: '', dynamicTooltip: '', widgetSizeSetting: 0, textureKit: '', frameTextureKit: '', hasTimer: false, orderIndex: 0, widgetTag: '', inAnimType: WidgetAnimationType.None, outAnimType: WidgetAnimationType.None, widgetScale: UIWidgetScale.OneHundred, layoutDirection: UIWidgetLayoutDirection.Default}},
    GetIconTextAndBackgroundWidgetVisualizationInfo: (widgetID: number): IconTextAndBackgroundWidgetVisualizationInfo | undefined => {return {shownState: WidgetShownState.Hidden, text: '', widgetSizeSetting: 0, textureKit: '', frameTextureKit: '', hasTimer: false, orderIndex: 0, widgetTag: '', inAnimType: WidgetAnimationType.None, outAnimType: WidgetAnimationType.None, widgetScale: UIWidgetScale.OneHundred, layoutDirection: UIWidgetLayoutDirection.Default}},
    GetIconTextAndCurrenciesWidgetVisualizationInfo: (widgetID: number): IconTextAndCurrenciesWidgetVisualizationInfo | undefined => {return {shownState: WidgetShownState.Hidden, enabledState: WidgetEnabledState.Disabled, descriptionShownState: WidgetShownState.Hidden, descriptionEnabledState: WidgetEnabledState.Disabled, text: '', description: '', currencies: {} as any, widgetSizeSetting: 0, textureKit: '', frameTextureKit: '', hasTimer: false, orderIndex: 0, widgetTag: '', inAnimType: WidgetAnimationType.None, outAnimType: WidgetAnimationType.None, widgetScale: UIWidgetScale.OneHundred, layoutDirection: UIWidgetLayoutDirection.Default}},
    GetObjectiveTrackerWidgetSetID: (): number => {return 0},
    GetPowerBarWidgetSetID: (): number => {return 0},
    GetScenarioHeaderCurrenciesAndBackgroundWidgetVisualizationInfo: (widgetID: number): ScenarioHeaderCurrenciesAndBackgroundWidgetVisualizationInfo | undefined => {return {shownState: WidgetShownState.Hidden, currencies: {} as any, headerText: '', widgetSizeSetting: 0, textureKit: '', frameTextureKit: '', hasTimer: false, orderIndex: 0, widgetTag: '', inAnimType: WidgetAnimationType.None, outAnimType: WidgetAnimationType.None, widgetScale: UIWidgetScale.OneHundred, layoutDirection: UIWidgetLayoutDirection.Default}},
    GetScenarioHeaderTimerWidgetVisualizationInfo: (widgetID: number): ScenarioHeaderTimerWidgetVisualizationInfo | undefined => {return {shownState: WidgetShownState.Hidden, timerMin: 0, timerMax: 0, timerValue: 0, headerText: '', timerTooltip: '', widgetSizeSetting: 0, textureKit: '', frameTextureKit: '', hasTimer: false, orderIndex: 0, widgetTag: '', inAnimType: WidgetAnimationType.None, outAnimType: WidgetAnimationType.None, widgetScale: UIWidgetScale.OneHundred, layoutDirection: UIWidgetLayoutDirection.Default}},
    GetSpellDisplayVisualizationInfo: (widgetID: number): SpellDisplayVisualizationInfo | undefined => {return {shownState: WidgetShownState.Hidden, enabledState: WidgetEnabledState.Disabled, spellInfo: {spellID: 0, tooltip: '', text: '', stackDisplay: 0, iconSizeType: SpellDisplayIconSizeType.Small, iconDisplayType: SpellDisplayIconDisplayType.Buff, textShownState: SpellDisplayTextShownStateType.Shown}, widgetSizeSetting: 0, textureKit: '', frameTextureKit: '', hasTimer: false, orderIndex: 0, widgetTag: '', inAnimType: WidgetAnimationType.None, outAnimType: WidgetAnimationType.None, widgetScale: UIWidgetScale.OneHundred, layoutDirection: UIWidgetLayoutDirection.Default}},
    GetStackedResourceTrackerWidgetVisualizationInfo: (widgetID: number): StackedResourceTrackerWidgetVisualizationInfo | undefined => {return {shownState: WidgetShownState.Hidden, resources: {} as any, widgetSizeSetting: 0, textureKit: '', frameTextureKit: '', hasTimer: false, orderIndex: 0, widgetTag: '', inAnimType: WidgetAnimationType.None, outAnimType: WidgetAnimationType.None, widgetScale: UIWidgetScale.OneHundred, layoutDirection: UIWidgetLayoutDirection.Default}},
    GetStatusBarWidgetVisualizationInfo: (widgetID: number): StatusBarWidgetVisualizationInfo | undefined => {return {shownState: WidgetShownState.Hidden, barMin: 0, barMax: 0, barValue: 0, text: '', tooltip: '', barValueTextType: StatusBarValueTextType.Hidden, overrideBarText: '', overrideBarTextShownType: StatusBarOverrideBarTextShownType.Never, colorTint: StatusBarColorTintValue.None, partitionValues: {} as any, widgetSizeSetting: 0, textureKit: '', frameTextureKit: '', hasTimer: false, orderIndex: 0, widgetTag: '', inAnimType: WidgetAnimationType.None, outAnimType: WidgetAnimationType.None, widgetScale: UIWidgetScale.OneHundred, layoutDirection: UIWidgetLayoutDirection.Default}},
    GetTextWithStateWidgetVisualizationInfo: (widgetID: number): TextWithStateWidgetVisualizationInfo | undefined => {return {shownState: WidgetShownState.Hidden, enabledState: WidgetEnabledState.Disabled, text: '', tooltip: '', textSizeType: UIWidgetTextSizeType.Small, fontType: UIWidgetFontType.Normal, bottomPadding: 0, widgetSizeSetting: 0, textureKit: '', frameTextureKit: '', hasTimer: false, orderIndex: 0, widgetTag: '', inAnimType: WidgetAnimationType.None, outAnimType: WidgetAnimationType.None, widgetScale: UIWidgetScale.OneHundred, layoutDirection: UIWidgetLayoutDirection.Default}},
    GetTextureAndTextRowVisualizationInfo: (widgetID: number): TextureAndTextRowVisualizationInfo | undefined => {return {shownState: WidgetShownState.Hidden, entries: {} as any, textSizeType: UIWidgetTextSizeType.Small, widgetSizeSetting: 0, textureKit: '', frameTextureKit: '', hasTimer: false, orderIndex: 0, widgetTag: '', inAnimType: WidgetAnimationType.None, outAnimType: WidgetAnimationType.None, widgetScale: UIWidgetScale.OneHundred, layoutDirection: UIWidgetLayoutDirection.Default}},
    GetTextureAndTextVisualizationInfo: (widgetID: number): TextureAndTextVisualizationInfo | undefined => {return {shownState: WidgetShownState.Hidden, text: '', tooltip: '', widgetSizeSetting: 0, textureKit: '', frameTextureKit: '', hasTimer: false, orderIndex: 0, widgetTag: '', inAnimType: WidgetAnimationType.None, outAnimType: WidgetAnimationType.None, widgetScale: UIWidgetScale.OneHundred, layoutDirection: UIWidgetLayoutDirection.Default}},
    GetTextureWithAnimationVisualizationInfo: (widgetID: number): TextureWithAnimationVisualizationInfo | undefined => {return {shownState: WidgetShownState.Hidden, tooltip: '', widgetSizeSetting: 0, textureKit: '', frameTextureKit: '', hasTimer: false, orderIndex: 0, widgetTag: '', inAnimType: WidgetAnimationType.None, outAnimType: WidgetAnimationType.None, widgetScale: UIWidgetScale.OneHundred, layoutDirection: UIWidgetLayoutDirection.Default}},
    GetTopCenterWidgetSetID: (): number => {return 0},
    GetWidgetSetInfo: (widgetSetID: number): UIWidgetSetInfo => {return {layoutDirection: UIWidgetSetLayoutDirection.Vertical, verticalPadding: 0}},
    GetZoneControlVisualizationInfo: (widgetID: number): ZoneControlVisualizationInfo | undefined => {return {shownState: WidgetShownState.Hidden, mode: ZoneControlMode.BothStatesAreGood, leadingEdgeType: ZoneControlLeadingEdgeType.NoLeadingEdge, dangerFlashType: ZoneControlDangerFlashType.ShowOnGoodStates, zoneEntries: {} as any, widgetSizeSetting: 0, textureKit: '', frameTextureKit: '', hasTimer: false, orderIndex: 0, widgetTag: '', inAnimType: WidgetAnimationType.None, outAnimType: WidgetAnimationType.None, widgetScale: UIWidgetScale.OneHundred, layoutDirection: UIWidgetLayoutDirection.Default}},
    RegisterUnitForWidgetUpdates: (unitToken: string): void => {},
    SetProcessingUnit: (unit: string | undefined): void => {},
    UnregisterUnitForWidgetUpdates: (unitToken: string): void => {},
};
export type UpdateAllUiWidgetsEvent = (frame: UIFrame, e: "UPDATE_ALL_UI_WIDGETS") => void
export type UpdateUiWidgetEvent = (frame: UIFrame, e: "UPDATE_UI_WIDGET", widgetInfo: UIWidgetInfo) => void