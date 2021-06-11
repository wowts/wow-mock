import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export interface GamePadAxisConfig {
    axis: string;
    shift: number | undefined;
    scale: number | undefined;
    deadzone: number | undefined;
    buttonThreshold: number | undefined;
    buttonPos: string | undefined;
    buttonNeg: string | undefined;
    comment: string | undefined;
}
export interface GamePadConfig {
    comment: string | undefined;
    name: string | undefined;
    configID: GamePadConfigID;
    labelStyle: string | undefined;
    rawButtonMappings: LuaArray<GamePadRawButtonMapping>;
    rawAxisMappings: LuaArray<GamePadRawAxisMapping>;
    axisConfigs: LuaArray<GamePadAxisConfig>;
    stickConfigs: LuaArray<GamePadStickConfig>;
}
export interface GamePadConfigID {
    vendorID: number | undefined;
    productID: number | undefined;
}
export interface GamePadMappedState {
    name: string;
    labelStyle: string;
    buttonCount: number;
    axisCount: number;
    stickCount: number;
    buttons: LuaArray<boolean>;
    axes: LuaArray<number>;
    sticks: LuaArray<GamePadStick>;
}
export interface GamePadRawAxisMapping {
    rawIndex: number;
    axis: string | undefined;
    comment: string | undefined;
}
export interface GamePadRawButtonMapping {
    rawIndex: number;
    button: string | undefined;
    axis: string | undefined;
    axisValue: number | undefined;
    comment: string | undefined;
}
export interface GamePadRawState {
    name: string;
    vendorID: number;
    productID: number;
    rawButtonCount: number;
    rawAxisCount: number;
    rawButtons: LuaArray<boolean>;
    rawAxes: LuaArray<number>;
}
export interface GamePadStick {
    x: number;
    y: number;
    len: number;
}
export interface GamePadStickConfig {
    stick: string;
    axisX: string | undefined;
    axisY: string | undefined;
    deadzone: number | undefined;
    comment: string | undefined;
}
export const C_GamePad = {
    ApplyConfigs: (): void => {},
    AxisIndexToConfigName: (axisIndex: number): string | undefined => {
        return "";
    },
    ButtonBindingToIndex: (bindingName: string): number | undefined => {
        return 0;
    },
    ButtonIndexToBinding: (buttonIndex: number): string | undefined => {
        return "";
    },
    ButtonIndexToConfigName: (buttonIndex: number): string | undefined => {
        return "";
    },
    DeleteConfig: (configID: GamePadConfigID): void => {},
    GetActiveDeviceID: (): number => {
        return 0;
    },
    GetAllConfigIDs: (): LuaArray<GamePadConfigID> => {
        return {} as any;
    },
    GetAllDeviceIDs: (): LuaArray<number> => {
        return {} as any;
    },
    GetCombinedDeviceID: (): number => {
        return 0;
    },
    GetConfig: (configID: GamePadConfigID): GamePadConfig | undefined => {
        return {
            comment: "",
            name: "",
            configID: { vendorID: 0, productID: 0 },
            labelStyle: "",
            rawButtonMappings: {} as any,
            rawAxisMappings: {} as any,
            axisConfigs: {} as any,
            stickConfigs: {} as any,
        };
    },
    GetDeviceMappedState: (
        deviceID: number | undefined
    ): GamePadMappedState | undefined => {
        return {
            name: "",
            labelStyle: "",
            buttonCount: 0,
            axisCount: 0,
            stickCount: 0,
            buttons: {} as any,
            axes: {} as any,
            sticks: {} as any,
        };
    },
    GetDeviceRawState: (deviceID: number): GamePadRawState | undefined => {
        return {
            name: "",
            vendorID: 0,
            productID: 0,
            rawButtonCount: 0,
            rawAxisCount: 0,
            rawButtons: {} as any,
            rawAxes: {} as any,
        };
    },
    IsEnabled: (): boolean => {
        return false;
    },
    SetConfig: (config: GamePadConfig): void => {},
    StickIndexToConfigName: (stickIndex: number): string | undefined => {
        return "";
    },
};
export type GamePadConfigsChangedEvent = (
    frame: UIFrame,
    e: "GAME_PAD_CONFIGS_CHANGED"
) => void;
export type GamePadConnectedEvent = (
    frame: UIFrame,
    e: "GAME_PAD_CONNECTED"
) => void;
export type GamePadDisconnectedEvent = (
    frame: UIFrame,
    e: "GAME_PAD_DISCONNECTED"
) => void;
