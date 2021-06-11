import { UIFrame } from "../ui";

export const C_ClassTrial = {};
export type ClassTrialTimerStartEvent = (
    frame: UIFrame,
    e: "CLASS_TRIAL_TIMER_START"
) => void;
export type ClassTrialUpgradeCompleteEvent = (
    frame: UIFrame,
    e: "CLASS_TRIAL_UPGRADE_COMPLETE"
) => void;
