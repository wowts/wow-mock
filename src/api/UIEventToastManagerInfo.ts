import { ColorMixin } from "../mixins";
import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export const enum EventToastDisplayType {
    NormalSingleLine = 0,
    NormalBlockText = 1,
    NormalTitleAndSubTitle = 2,
    NormalTextWithIcon = 3,
    LargeTextWithIcon = 4,
    NormalTextWithIconAndRarity = 5,
    Scenario = 6,
    ChallengeMode = 7,
    ScenarioClickExpand = 8,
}
export const enum EventToastEventType {
    LevelUp = 0,
    LevelUpSpell = 1,
    LevelUpDungeon = 2,
    LevelUpRaid = 3,
    LevelUpPvP = 4,
    PetBattleNewAbility = 5,
    PetBattleFinalRound = 6,
    PetBattleCapture = 7,
    BattlePetLevelChanged = 8,
    BattlePetLevelUpAbility = 9,
    QuestBossEmote = 10,
    MythicPlusWeeklyRecord = 11,
    QuestTurnedIn = 12,
    WorldStateChange = 13,
    Scenario = 14,
    LevelUpOther = 15,
    PlayerAuraAdded = 16,
    PlayerAuraRemoved = 17,
    SpellScript = 18,
}
export interface EventToastInfo {
    eventToastID: number;
    title: string;
    subtitle: string;
    instructionText: string;
    iconFileID: number;
    subIcon: string | undefined;
    link: string;
    qualityString: string | undefined;
    quality: number | undefined;
    eventType: EventToastEventType;
    displayType: EventToastDisplayType;
    uiTextureKit: string;
    sortOrder: number;
    time: number | undefined;
    uiWidgetSetID: number | undefined;
    extraUiWidgetSetID: number | undefined;
    titleTooltip: string | undefined;
    subtitleTooltip: string | undefined;
    titleTooltipUiWidgetSetID: number | undefined;
    subtitleTooltipUiWidgetSetID: number | undefined;
    hideDefaultAtlas: boolean | undefined;
    showSoundKitID: number | undefined;
    hideSoundKitID: number | undefined;
    colorTint: ColorMixin | undefined;
}
export const C_EventToastManager = {
    GetLevelUpDisplayToastsFromLevel: (
        level: number
    ): LuaArray<EventToastInfo> => {
        return {} as any;
    },
    GetNextToastToDisplay: (): EventToastInfo => {
        return {
            eventToastID: 0,
            title: "",
            subtitle: "",
            instructionText: "",
            iconFileID: 0,
            subIcon: "",
            link: "",
            qualityString: "",
            quality: 0,
            eventType: EventToastEventType.LevelUp,
            displayType: EventToastDisplayType.NormalSingleLine,
            uiTextureKit: "",
            sortOrder: 0,
            time: 0,
            uiWidgetSetID: 0,
            extraUiWidgetSetID: 0,
            titleTooltip: "",
            subtitleTooltip: "",
            titleTooltipUiWidgetSetID: 0,
            subtitleTooltipUiWidgetSetID: 0,
            hideDefaultAtlas: false,
            showSoundKitID: 0,
            hideSoundKitID: 0,
            colorTint: {} as any,
        };
    },
    RemoveCurrentToast: (): void => {},
};
export type DisplayEventToastLinkEvent = (
    frame: UIFrame,
    e: "DISPLAY_EVENT_TOAST_LINK",
    link: string
) => void;
export type DisplayEventToastsEvent = (
    frame: UIFrame,
    e: "DISPLAY_EVENT_TOASTS"
) => void;
