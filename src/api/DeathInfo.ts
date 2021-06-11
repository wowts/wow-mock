import { Vector2DMixin } from "../mixins";
import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export const enum SelfResurrectOptionType {
    Spell = 0,
    Item = 1,
}
export interface GraveyardMapInfo {
    areaPoiID: number;
    position: Vector2DMixin;
    name: string;
    textureIndex: number;
    graveyardID: number;
    isGraveyardSelectable: boolean;
}
export interface SelfResurrectOption {
    name: string;
    optionType: SelfResurrectOptionType;
    id: number;
    canUse: boolean;
    isLimited: boolean;
    priority: number;
}
export const C_DeathInfo = {
    GetCorpseMapPosition: (uiMapID: number): Vector2DMixin | undefined => {
        return {} as any;
    },
    GetDeathReleasePosition: (uiMapID: number): Vector2DMixin | undefined => {
        return {} as any;
    },
    GetGraveyardsForMap: (uiMapID: number): LuaArray<GraveyardMapInfo> => {
        return {} as any;
    },
    GetSelfResurrectOptions: (): LuaArray<SelfResurrectOption> => {
        return {} as any;
    },
    UseSelfResurrectOption: (
        optionType: SelfResurrectOptionType,
        id: number
    ): void => {},
};
export type AreaSpiritHealerInRangeEvent = (
    frame: UIFrame,
    e: "AREA_SPIRIT_HEALER_IN_RANGE"
) => void;
export type AreaSpiritHealerOutOfRangeEvent = (
    frame: UIFrame,
    e: "AREA_SPIRIT_HEALER_OUT_OF_RANGE"
) => void;
export type CemeteryPreferenceUpdatedEvent = (
    frame: UIFrame,
    e: "CEMETERY_PREFERENCE_UPDATED"
) => void;
export type ConfirmXpLossEvent = (frame: UIFrame, e: "CONFIRM_XP_LOSS") => void;
export type CorpseInInstanceEvent = (
    frame: UIFrame,
    e: "CORPSE_IN_INSTANCE"
) => void;
export type CorpseInRangeEvent = (frame: UIFrame, e: "CORPSE_IN_RANGE") => void;
export type CorpseOutOfRangeEvent = (
    frame: UIFrame,
    e: "CORPSE_OUT_OF_RANGE"
) => void;
export type PlayerAliveEvent = (frame: UIFrame, e: "PLAYER_ALIVE") => void;
export type PlayerDeadEvent = (frame: UIFrame, e: "PLAYER_DEAD") => void;
export type PlayerSkinnedEvent = (
    frame: UIFrame,
    e: "PLAYER_SKINNED",
    hasFreeRepop: number
) => void;
export type PlayerUnghostEvent = (frame: UIFrame, e: "PLAYER_UNGHOST") => void;
export type RequestCemeteryListResponseEvent = (
    frame: UIFrame,
    e: "REQUEST_CEMETERY_LIST_RESPONSE",
    isGossipTriggered: boolean
) => void;
export type ResurrectRequestEvent = (
    frame: UIFrame,
    e: "RESURRECT_REQUEST",
    inviter: string
) => void;
export type SelfResSpellChangedEvent = (
    frame: UIFrame,
    e: "SELF_RES_SPELL_CHANGED"
) => void;
