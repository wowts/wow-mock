import { AppearanceSourceInfo } from '../mixins';
import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";

export const C_TransmogCollection = {
    GetAppearanceSources: (appearanceID: number, categoryID: number | undefined): LuaArray<AppearanceSourceInfo> => {return {} as any},
    GetIllusionSourceInfo: (sourceID: number): [visualID: number, name: string, hyperlink: string, icon: number] => {return [0, '', '', 0]},
    GetSourceIcon: (itemModifiedAppearanceID: number): number => {return 0},
    GetSourceInfo: (sourceID: number): AppearanceSourceInfo => {return {} as any},
};
