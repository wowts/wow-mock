import { Vector2DMixin } from "../mixins";
import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export const enum GossipOptionRewardType {
    Item = 0,
    Currency = 1,
}
export const enum GossipOptionStatus {
    Available = 0,
    Unavailable = 1,
    Locked = 2,
    AlreadyComplete = 3,
}
export interface GossipOptionRewardInfo {
    id: number;
    quantity: number;
    rewardType: GossipOptionRewardType;
}
export interface GossipOptionUIInfo {
    name: string;
    type: string;
    rewards: LuaArray<GossipOptionRewardInfo>;
    status: GossipOptionStatus;
    spellID: number | undefined;
}
export interface GossipPoiInfo {
    name: string;
    textureIndex: number;
    position: Vector2DMixin;
    inBattleMap: boolean;
}
export interface GossipQuestUIInfo {
    title: string;
    questLevel: number;
    isTrivial: boolean;
    frequency: number | undefined;
    repeatable: boolean | undefined;
    isComplete: boolean | undefined;
    isLegendary: boolean;
    isIgnored: boolean;
    questID: number;
}
export const C_GossipInfo = {
    CloseGossip: (): void => {},
    ForceGossip: (): boolean => {
        return false;
    },
    GetActiveQuests: (): LuaArray<GossipQuestUIInfo> => {
        return {} as any;
    },
    GetAvailableQuests: (): LuaArray<GossipQuestUIInfo> => {
        return {} as any;
    },
    GetCustomGossipDescriptionString: (): string | undefined => {
        return "";
    },
    GetNumActiveQuests: (): number => {
        return 0;
    },
    GetNumAvailableQuests: (): number => {
        return 0;
    },
    GetNumOptions: (): number => {
        return 0;
    },
    GetOptions: (): LuaArray<GossipOptionUIInfo> => {
        return {} as any;
    },
    GetPoiForUiMapID: (uiMapID: number): number | undefined => {
        return 0;
    },
    GetPoiInfo: (
        uiMapID: number,
        gossipPoiID: number
    ): GossipPoiInfo | undefined => {
        return {
            name: "",
            textureIndex: 0,
            position: {} as any,
            inBattleMap: false,
        };
    },
    GetText: (): string => {
        return "";
    },
    RefreshOptions: (): void => {},
    SelectActiveQuest: (index: number): void => {},
    SelectAvailableQuest: (index: number): void => {},
    SelectOption: (
        index: number,
        text: string | undefined,
        confirmed: boolean | undefined
    ): void => {},
};
export type DynamicGossipPoiUpdatedEvent = (
    frame: UIFrame,
    e: "DYNAMIC_GOSSIP_POI_UPDATED"
) => void;
export type GossipClosedEvent = (frame: UIFrame, e: "GOSSIP_CLOSED") => void;
export type GossipConfirmEvent = (
    frame: UIFrame,
    e: "GOSSIP_CONFIRM",
    gossipIndex: number,
    text: string,
    cost: number
) => void;
export type GossipConfirmCancelEvent = (
    frame: UIFrame,
    e: "GOSSIP_CONFIRM_CANCEL"
) => void;
export type GossipEnterCodeEvent = (
    frame: UIFrame,
    e: "GOSSIP_ENTER_CODE",
    gossipIndex: number
) => void;
export type GossipOptionsRefreshedEvent = (
    frame: UIFrame,
    e: "GOSSIP_OPTIONS_REFRESHED"
) => void;
export type GossipShowEvent = (
    frame: UIFrame,
    e: "GOSSIP_SHOW",
    uiTextureKit: string | undefined
) => void;
