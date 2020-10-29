import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";

export const C_System = {
    GetFrameStack: (): LuaArray<any> => {return {} as any},
};
export type CaptureframesFailedEvent = (frame: UIFrame, e: "CAPTUREFRAMES_FAILED") => void
export type CaptureframesSucceededEvent = (frame: UIFrame, e: "CAPTUREFRAMES_SUCCEEDED") => void
export type DisableTaxiBenchmarkEvent = (frame: UIFrame, e: "DISABLE_TAXI_BENCHMARK") => void
export type EnableTaxiBenchmarkEvent = (frame: UIFrame, e: "ENABLE_TAXI_BENCHMARK") => void
export type GenericErrorEvent = (frame: UIFrame, e: "GENERIC_ERROR", errorMessage: string) => void
export type GlobalMouseDownEvent = (frame: UIFrame, e: "GLOBAL_MOUSE_DOWN", button: string) => void
export type GlobalMouseUpEvent = (frame: UIFrame, e: "GLOBAL_MOUSE_UP", button: string) => void
export type InitialHotfixesAppliedEvent = (frame: UIFrame, e: "INITIAL_HOTFIXES_APPLIED") => void
export type LocResultEvent = (frame: UIFrame, e: "LOC_RESULT", result: string) => void
export type LogoutCancelEvent = (frame: UIFrame, e: "LOGOUT_CANCEL") => void
export type PlayerCampingEvent = (frame: UIFrame, e: "PLAYER_CAMPING") => void
export type PlayerEnteringWorldEvent = (frame: UIFrame, e: "PLAYER_ENTERING_WORLD", isInitialLogin: boolean, isReloadingUi: boolean) => void
export type PlayerLeavingWorldEvent = (frame: UIFrame, e: "PLAYER_LEAVING_WORLD") => void
export type PlayerLoginEvent = (frame: UIFrame, e: "PLAYER_LOGIN") => void
export type PlayerLogoutEvent = (frame: UIFrame, e: "PLAYER_LOGOUT") => void
export type PlayerQuitingEvent = (frame: UIFrame, e: "PLAYER_QUITING") => void
export type SearchDbLoadedEvent = (frame: UIFrame, e: "SEARCH_DB_LOADED") => void
export type StreamingIconEvent = (frame: UIFrame, e: "STREAMING_ICON", streamingStatus: number) => void
export type SysmsgEvent = (frame: UIFrame, e: "SYSMSG", string: string, r: number, g: number, b: number) => void
export type TimePlayedMsgEvent = (frame: UIFrame, e: "TIME_PLAYED_MSG", totalTimePlayed: number, timePlayedThisLevel: number) => void
export type UiErrorMessageEvent = (frame: UIFrame, e: "UI_ERROR_MESSAGE", errorType: number, message: string) => void
export type UiInfoMessageEvent = (frame: UIFrame, e: "UI_INFO_MESSAGE", errorType: number, message: string) => void
export type VariablesLoadedEvent = (frame: UIFrame, e: "VARIABLES_LOADED") => void
export type WoWMouseNotFoundEvent = (frame: UIFrame, e: "WOW_MOUSE_NOT_FOUND") => void