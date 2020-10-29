import { Vector2DMixin } from '../mixins';
import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export const enum AnimaDiversionNodeState {
    Unavailable = 0,
    Available = 1,
    SelectedTemporary = 2,
    SelectedPermanent = 3,
    Cooldown = 4
}
export interface AnimaDiversionCostInfo {
    currencyID: number;
    quantity: number
}
export interface AnimaDiversionFrameInfo {
    textureKit: string;
    title: string;
    mapID: number
}
export interface AnimaDiversionNodeInfo {
    talentID: number;
    name: string;
    description: string;
    costs: LuaArray<AnimaDiversionCostInfo>;
    currencyID: number;
    icon: number;
    normalizedPosition: Vector2DMixin;
    state: AnimaDiversionNodeState
}
export const C_AnimaDiversion = {
    CloseUI: (): void => {},
    GetAnimaDiversionNodes: (): LuaArray<AnimaDiversionNodeInfo> => {return {} as any},
    GetOriginPosition: (): Vector2DMixin | undefined => {return {} as any},
    GetReinforceProgress: (): number => {return 0},
    GetTextureKit: (): string => {return ''},
    OpenAnimaDiversionUI: (): void => {},
    SelectAnimaNode: (talentID: number, temporary: boolean): void => {},
};
export type AnimaDiversionCloseEvent = (frame: UIFrame, e: "ANIMA_DIVERSION_CLOSE") => void
export type AnimaDiversionOpenEvent = (frame: UIFrame, e: "ANIMA_DIVERSION_OPEN", info: AnimaDiversionFrameInfo) => void
export type AnimaDiversionTalentUpdatedEvent = (frame: UIFrame, e: "ANIMA_DIVERSION_TALENT_UPDATED") => void