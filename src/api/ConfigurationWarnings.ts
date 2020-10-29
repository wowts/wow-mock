import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export const enum ConfigurationWarning {
    ShaderModelWillBeOutdated = 0,
    ShaderModelIsOutdated = 1,
    ConsoleDeviceSseOutdated = 2,
    DriverBlacklisted = 3,
    DriverOutOfDate = 4,
    DeviceBlacklisted = 5,
    GraphicsApiWillBeOutdated = 6,
    OsBitsWillBeOutdated = 7
}
export const C_ConfigurationWarnings = {
    GetConfigurationWarningSeen: (configurationWarning: ConfigurationWarning): boolean => {return false},
    GetConfigurationWarningString: (configurationWarning: ConfigurationWarning): string => {return ''},
    GetConfigurationWarnings: (includeSeenWarnings: boolean): LuaArray<ConfigurationWarning> => {return {} as any},
    SetConfigurationWarningSeen: (configurationWarning: ConfigurationWarning): void => {},
};
