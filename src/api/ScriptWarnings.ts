import { UIFrame } from "../ui";

export const C_ScriptWarnings = {

};
export type LuaWarningEvent = (frame: UIFrame, e: "LUA_WARNING", warnType: number, warningText: string) => void