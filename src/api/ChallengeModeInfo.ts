import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export interface ChallengeModeGuildAttemptMember {
    name: string;
    classFileName: string;
}
export interface ChallengeModeGuildTopAttempt {
    name: string;
    classFileName: string;
    keystoneLevel: number;
    mapChallengeModeID: number;
    isYou: boolean;
    members: LuaArray<ChallengeModeGuildAttemptMember>;
}
export const C_ChallengeMode = {
    ClearKeystone: (): void => {},
    CloseKeystoneFrame: (): void => {},
    GetActiveChallengeMapID: (): number | undefined => {
        return 0;
    },
    GetActiveKeystoneInfo: (): [
        activeKeystoneLevel: number,
        activeAffixIDs: LuaArray<number>,
        wasActiveKeystoneCharged: boolean
    ] => {
        return [0, {} as any, false];
    },
    GetAffixInfo: (
        affixID: number
    ): [name: string, description: string, filedataid: number] => {
        return ["", "", 0];
    },
    GetCompletionInfo: (): [
        mapChallengeModeID: number,
        level: number,
        time: number,
        onTime: boolean,
        keystoneUpgradeLevels: number,
        practiceRun: boolean
    ] => {
        return [0, 0, 0, false, 0, false];
    },
    GetDeathCount: (): [numDeaths: number, timeLost: number] => {
        return [0, 0];
    },
    GetGuildLeaders: (): LuaArray<ChallengeModeGuildTopAttempt> => {
        return {} as any;
    },
    GetMapTable: (): LuaArray<number> => {
        return {} as any;
    },
    GetMapUIInfo: (
        mapChallengeModeID: number
    ): [
        name: string,
        id: number,
        timeLimit: number,
        texture: number | undefined,
        backgroundTexture: number
    ] => {
        return ["", 0, 0, 0, 0];
    },
    GetPowerLevelDamageHealthMod: (
        powerLevel: number
    ): [damageMod: number, healthMod: number] => {
        return [0, 0];
    },
    GetSlottedKeystoneInfo: (): [
        mapChallengeModeID: number,
        affixIDs: LuaArray<number>,
        keystoneLevel: number
    ] => {
        return [0, {} as any, 0];
    },
    HasSlottedKeystone: (): boolean => {
        return false;
    },
    IsChallengeModeActive: (): boolean => {
        return false;
    },
    RemoveKeystone: (): boolean => {
        return false;
    },
    RequestLeaders: (mapChallengeModeID: number): void => {},
    Reset: (): void => {},
    SetKeystoneTooltip: (): void => {},
    SlotKeystone: (): void => {},
    StartChallengeMode: (): boolean => {
        return false;
    },
};
export type ChallengeModeCompletedEvent = (
    frame: UIFrame,
    e: "CHALLENGE_MODE_COMPLETED"
) => void;
export type ChallengeModeDeathCountUpdatedEvent = (
    frame: UIFrame,
    e: "CHALLENGE_MODE_DEATH_COUNT_UPDATED"
) => void;
export type ChallengeModeKeystoneReceptableOpenEvent = (
    frame: UIFrame,
    e: "CHALLENGE_MODE_KEYSTONE_RECEPTABLE_OPEN"
) => void;
export type ChallengeModeKeystoneSlottedEvent = (
    frame: UIFrame,
    e: "CHALLENGE_MODE_KEYSTONE_SLOTTED",
    keystoneID: number
) => void;
export type ChallengeModeLeadersUpdateEvent = (
    frame: UIFrame,
    e: "CHALLENGE_MODE_LEADERS_UPDATE"
) => void;
export type ChallengeModeMapsUpdateEvent = (
    frame: UIFrame,
    e: "CHALLENGE_MODE_MAPS_UPDATE"
) => void;
export type ChallengeModeMemberInfoUpdatedEvent = (
    frame: UIFrame,
    e: "CHALLENGE_MODE_MEMBER_INFO_UPDATED"
) => void;
export type ChallengeModeResetEvent = (
    frame: UIFrame,
    e: "CHALLENGE_MODE_RESET",
    mapID: number
) => void;
export type ChallengeModeStartEvent = (
    frame: UIFrame,
    e: "CHALLENGE_MODE_START",
    mapID: number
) => void;
