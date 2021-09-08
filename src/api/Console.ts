import { ColorMixin } from "../mixins";
import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export const enum ConsoleCategory {
    Debug = 0,
    Graphics = 1,
    Console = 2,
    Combat = 3,
    Game = 4,
    Default = 5,
    Net = 6,
    Sound = 7,
    Gm = 8,
    Reveal = 9,
    None = 10,
}
export const enum ConsoleColorType {
    DefaultColor = 0,
    InputColor = 1,
    EchoColor = 2,
    ErrorColor = 3,
    WarningColor = 4,
    GlobalColor = 5,
    AdminColor = 6,
    HighlightColor = 7,
    BackgroundColor = 8,
    ClickbufferColor = 9,
    PrivateColor = 10,
    DefaultGreen = 11,
}
export const enum ConsoleCommandType {
    Cvar = 0,
    Command = 1,
    Macro = 2,
    Script = 3,
}
export interface ConsoleCommandInfo {
    command: string;
    help: string;
    category: ConsoleCategory;
    commandType: ConsoleCommandType;
    scriptContents: string;
    scriptParameters: string;
}
export const C_Console = {
    GetAllCommands: (): LuaArray<ConsoleCommandInfo> => {
        return {} as any;
    },
    GetColorFromType: (colorType: ConsoleColorType): ColorMixin => {
        return {} as any;
    },
    GetFontHeight: (): number => {
        return 0;
    },
    PrintAllMatchingCommands: (partialCommandText: string): void => {},
    SetFontHeight: (fontHeightInPixels: number): void => {},
};
export type ConsoleClearEvent = (frame: UIFrame, e: "CONSOLE_CLEAR") => void;
export type ConsoleColorsChangedEvent = (
    frame: UIFrame,
    e: "CONSOLE_COLORS_CHANGED"
) => void;
export type ConsoleFontSizeChangedEvent = (
    frame: UIFrame,
    e: "CONSOLE_FONT_SIZE_CHANGED"
) => void;
export type ConsoleLogEvent = (
    frame: UIFrame,
    e: "CONSOLE_LOG",
    message: string
) => void;
export type ConsoleMessageEvent = (
    frame: UIFrame,
    e: "CONSOLE_MESSAGE",
    message: string,
    colorType: number
) => void;
export type CvarUpdateEvent = (
    frame: UIFrame,
    e: "CVAR_UPDATE",
    eventName: string,
    value: string
) => void;
export type GlueConsoleLogEvent = (
    frame: UIFrame,
    e: "GLUE_CONSOLE_LOG",
    message: string
) => void;
export type ToggleConsoleEvent = (
    frame: UIFrame,
    e: "TOGGLE_CONSOLE",
    showConsole: boolean | undefined
) => void;
