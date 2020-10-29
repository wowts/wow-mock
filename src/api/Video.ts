import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export interface GxAdapterInfoDetails {
    name: string;
    isLowPower: boolean;
    isExternal: boolean
}
export const C_VideoOptions = {
    GetGxAdapterInfo: (): LuaArray<GxAdapterInfoDetails> => {return {} as any},
};
export type AdapterListChangedEvent = (frame: UIFrame, e: "ADAPTER_LIST_CHANGED") => void
export type DisplaySizeChangedEvent = (frame: UIFrame, e: "DISPLAY_SIZE_CHANGED") => void
export type GlueScreenshotFailedEvent = (frame: UIFrame, e: "GLUE_SCREENSHOT_FAILED") => void
export type GxRestartedEvent = (frame: UIFrame, e: "GX_RESTARTED") => void
export type ScreenshotFailedEvent = (frame: UIFrame, e: "SCREENSHOT_FAILED") => void
export type ScreenshotStartedEvent = (frame: UIFrame, e: "SCREENSHOT_STARTED") => void
export type ScreenshotSucceededEvent = (frame: UIFrame, e: "SCREENSHOT_SUCCEEDED") => void