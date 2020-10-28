import { UIFrame } from "../ui";

export const C_WorldStateInfo = {

};
export type StartTimerEvent = (frame: UIFrame, e: "START_TIMER", timerType: number, timeRemaining: number, totalTime: number) => void
export type WorldStateTimerStartEvent = (frame: UIFrame, e: "WORLD_STATE_TIMER_START", timerID: number) => void
export type WorldStateTimerStopEvent = (frame: UIFrame, e: "WORLD_STATE_TIMER_STOP", timerID: number) => void