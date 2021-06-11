import { UIFrame } from "../ui";

export const C_CVar = {
    GetCVar: (name: string): string | undefined => {
        return "";
    },
    GetCVarBitfield: (name: string, index: number): boolean | undefined => {
        return false;
    },
    GetCVarBool: (name: string): boolean | undefined => {
        return false;
    },
    GetCVarDefault: (name: string): string | undefined => {
        return "";
    },
    RegisterCVar: (name: string, value: string | undefined): void => {},
    ResetTestCVars: (): void => {},
    SetCVar: (
        name: string,
        value: string | undefined,
        scriptCVar: string | undefined
    ): boolean => {
        return false;
    },
    SetCVarBitfield: (
        name: string,
        index: number,
        value: boolean,
        scriptCVar: string | undefined
    ): boolean => {
        return false;
    },
};
