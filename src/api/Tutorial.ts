import { UIFrame } from "../ui";

export const C_Tutorial = {
    AbandonTutorialArea: (): void => {},
    ReturnToTutorialArea: (): void => {},
};
export type LeavingTutorialAreaEvent = (
    frame: UIFrame,
    e: "LEAVING_TUTORIAL_AREA"
) => void;
export type NpeTutorialUpdateEvent = (
    frame: UIFrame,
    e: "NPE_TUTORIAL_UPDATE"
) => void;
export type TutorialHighlightSpellEvent = (
    frame: UIFrame,
    e: "TUTORIAL_HIGHLIGHT_SPELL",
    spellID: number,
    tutorialGlobalStringTag: string
) => void;
export type TutorialTriggerEvent = (
    frame: UIFrame,
    e: "TUTORIAL_TRIGGER",
    tutorialIndex: number,
    forceShow: boolean
) => void;
export type TutorialUnhighlightSpellEvent = (
    frame: UIFrame,
    e: "TUTORIAL_UNHIGHLIGHT_SPELL"
) => void;
