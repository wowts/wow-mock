import { UIFrame } from "../ui";
export interface LossOfControlData {
    locType: string;
    spellID: number;
    displayText: string;
    iconTexture: number;
    startTime: number | undefined;
    timeRemaining: number | undefined;
    duration: number | undefined;
    lockoutSchool: number;
    priority: number;
    displayType: number;
}
export const C_LossOfControl = {
    GetActiveLossOfControlData: (
        index: number
    ): LossOfControlData | undefined => {
        return {
            locType: "",
            spellID: 0,
            displayText: "",
            iconTexture: 0,
            startTime: 0,
            timeRemaining: 0,
            duration: 0,
            lockoutSchool: 0,
            priority: 0,
            displayType: 0,
        };
    },
    GetActiveLossOfControlDataByUnit: (
        unitToken: string,
        index: number
    ): LossOfControlData | undefined => {
        return {
            locType: "",
            spellID: 0,
            displayText: "",
            iconTexture: 0,
            startTime: 0,
            timeRemaining: 0,
            duration: 0,
            lockoutSchool: 0,
            priority: 0,
            displayType: 0,
        };
    },
    GetActiveLossOfControlDataCount: (): number => {
        return 0;
    },
    GetActiveLossOfControlDataCountByUnit: (unitToken: string): number => {
        return 0;
    },
};
export type LossOfControlAddedEvent = (
    frame: UIFrame,
    e: "LOSS_OF_CONTROL_ADDED",
    effectIndex: number
) => void;
export type LossOfControlCommentatorAddedEvent = (
    frame: UIFrame,
    e: "LOSS_OF_CONTROL_COMMENTATOR_ADDED",
    victim: string,
    effectIndex: number
) => void;
export type LossOfControlCommentatorUpdateEvent = (
    frame: UIFrame,
    e: "LOSS_OF_CONTROL_COMMENTATOR_UPDATE",
    victim: string
) => void;
export type LossOfControlUpdateEvent = (
    frame: UIFrame,
    e: "LOSS_OF_CONTROL_UPDATE"
) => void;
export type PlayerControlGainedEvent = (
    frame: UIFrame,
    e: "PLAYER_CONTROL_GAINED"
) => void;
export type PlayerControlLostEvent = (
    frame: UIFrame,
    e: "PLAYER_CONTROL_LOST"
) => void;
