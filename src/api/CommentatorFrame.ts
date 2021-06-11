import { Vector3DMixin, ColorMixin } from "../mixins";
import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export const enum TrackedSpellCategory {
    Offensive = 0,
    Defensive = 1,
    Debuff = 2,
    Count = 3,
}
export interface CommentatorHistory {
    series: LuaArray<CommentatorSeries>;
    teamDirectory: LuaArray<CommentatorTeamDirectoryEntry>;
    overrideNameDirectory: LuaArray<CommentatorOverrideNameEntry>;
}
export interface CommentatorOverrideNameEntry {
    originalName: string;
    newName: string;
}
export interface CommentatorPlayerData {
    unitToken: string;
    name: string;
    faction: number;
    specialization: number;
    damageDone: number;
    damageTaken: number;
    healingDone: number;
    healingTaken: number;
    kills: number;
    deaths: number;
}
export interface CommentatorSeries {
    teams: LuaArray<CommentatorSeriesTeam>;
}
export interface CommentatorSeriesTeam {
    name: string;
    score: number;
}
export interface CommentatorTeamDirectoryEntry {
    playerName: string;
    teamName: string;
}
export interface CommentatorUnitData {
    healthMax: number;
    health: number;
    absorbTotal: number;
    isDeadOrGhost: boolean;
    isFeignDeath: boolean;
    powerTypeToken: string;
    power: number;
    powerMax: number;
}
export interface NameOverrideEntry {
    originalName: string;
    overrideName: string;
}
export const C_Commentator = {
    AddPlayerOverrideName: (
        playerName: string,
        overrideName: string
    ): void => {},
    AddTrackedDefensiveAuras: (spellIDs: LuaArray<number>): void => {},
    AddTrackedOffensiveAuras: (spellIDs: LuaArray<number>): void => {},
    AreTeamsSwapped: (): boolean => {
        return false;
    },
    AssignPlayerToTeam: (playerName: string, teamName: string): void => {},
    AssignPlayersToTeam: (
        playerName: LuaArray<string>,
        teamName: string
    ): void => {},
    AssignPlayersToTeamInCurrentInstance: (
        teamIndex: number,
        teamName: string
    ): void => {},
    CanUseCommentatorCheats: (): boolean => {
        return false;
    },
    ClearCameraTarget: (): void => {},
    ClearFollowTarget: (): void => {},
    ClearLookAtTarget: (lookAtIndex: number | undefined): void => {},
    EnterInstance: (): void => {},
    ExitInstance: (): void => {},
    FindSpectatedUnit: (
        unitToken: string
    ): [playerIndex: number, teamIndex: number, isPet: boolean] => {
        return [0, 0, false];
    },
    FindTeamNameInCurrentInstance: (teamIndex: number): string | undefined => {
        return "";
    },
    FindTeamNameInDirectory: (
        playerNames: LuaArray<string>
    ): string | undefined => {
        return "";
    },
    FlushCommentatorHistory: (): void => {},
    FollowPlayer: (
        factionIndex: number,
        playerIndex: number,
        forceInstantTransition: boolean | undefined
    ): void => {},
    FollowUnit: (token: string): void => {},
    ForceFollowTransition: (): void => {},
    GetAdditionalCameraWeight: (): [teamIndex: number, playerIndex: number] => {
        return [0, 0];
    },
    GetAdditionalCameraWeightByToken: (unitToken: string): number => {
        return 0;
    },
    GetAllPlayerOverrideNames: (): LuaArray<NameOverrideEntry> => {
        return {} as any;
    },
    GetCamera: (): [
        xPos: number,
        yPos: number,
        zPos: number,
        yaw: number,
        pitch: number,
        roll: number,
        fov: number
    ] => {
        return [0, 0, 0, 0, 0, 0, 0];
    },
    GetCameraCollision: (): boolean => {
        return false;
    },
    GetCameraPosition: (): [xPos: number, yPos: number, zPos: number] => {
        return [0, 0, 0];
    },
    GetCommentatorHistory: (): CommentatorHistory => {
        return {
            series: {} as any,
            teamDirectory: {} as any,
            overrideNameDirectory: {} as any,
        };
    },
    GetCurrentMapID: (): number | undefined => {
        return 0;
    },
    GetDampeningPercent: (): number => {
        return 0;
    },
    GetDistanceBeforeForcedHorizontalConvergence: (): number => {
        return 0;
    },
    GetDurationToForceHorizontalConvergence: (): number => {
        return 0;
    },
    GetExcludeDistance: (): number => {
        return 0;
    },
    GetHardlockWeight: (): number => {
        return 0;
    },
    GetHorizontalAngleThresholdToSmooth: (): number => {
        return 0;
    },
    GetIndirectSpellID: (trackedSpellID: number): number => {
        return 0;
    },
    GetInstanceInfo: (
        mapIndex: number,
        instanceIndex: number
    ): [
        mapID: number,
        mapName: string | undefined,
        status: number,
        instanceIDLow: number,
        instanceIDHigh: number
    ] => {
        return [0, "", 0, 0, 0];
    },
    GetLookAtLerpAmount: (): number => {
        return 0;
    },
    GetMapInfo: (
        mapIndex: number
    ): [
        teamSize: number,
        minLevel: number,
        maxLevel: number,
        numInstances: number
    ] => {
        return [0, 0, 0, 0];
    },
    GetMatchDuration: (): number => {
        return 0;
    },
    GetMaxNumPlayersPerTeam: (): number => {
        return 0;
    },
    GetMaxNumTeams: (): number => {
        return 0;
    },
    GetMode: (): number => {
        return 0;
    },
    GetMsToHoldForHorizontalMovement: (): number => {
        return 0;
    },
    GetMsToHoldForVerticalMovement: (): number => {
        return 0;
    },
    GetMsToSmoothHorizontalChange: (): number => {
        return 0;
    },
    GetMsToSmoothVerticalChange: (): number => {
        return 0;
    },
    GetNumMaps: (): number => {
        return 0;
    },
    GetNumPlayers: (factionIndex: number): number => {
        return 0;
    },
    GetOrCreateSeries: (
        teamName1: string,
        teamName2: string
    ): CommentatorSeries => {
        return { teams: {} as any };
    },
    GetPlayerAuraInfo: (
        teamIndex: number,
        playerIndex: number,
        spellID: number
    ): [startTime: number, duration: number, enable: boolean] => {
        return [0, 0, false];
    },
    GetPlayerAuraInfoByUnit: (
        token: string,
        spellID: number
    ): [startTime: number, duration: number, enable: boolean] => {
        return [0, 0, false];
    },
    GetPlayerCooldownInfo: (
        teamIndex: number,
        playerIndex: number,
        spellID: number
    ): [startTime: number, duration: number, enable: boolean] => {
        return [0, 0, false];
    },
    GetPlayerCooldownInfoByUnit: (
        unitToken: string,
        spellID: number
    ): [startTime: number, duration: number, enable: boolean] => {
        return [0, 0, false];
    },
    GetPlayerCrowdControlInfo: (
        teamIndex: number,
        playerIndex: number
    ): [spellID: number, expiration: number, duration: number] => {
        return [0, 0, 0];
    },
    GetPlayerCrowdControlInfoByUnit: (
        token: string
    ): [spellID: number, expiration: number, duration: number] => {
        return [0, 0, 0];
    },
    GetPlayerData: (
        teamIndex: number,
        playerIndex: number
    ): CommentatorPlayerData | undefined => {
        return {
            unitToken: "",
            name: "",
            faction: 0,
            specialization: 0,
            damageDone: 0,
            damageTaken: 0,
            healingDone: 0,
            healingTaken: 0,
            kills: 0,
            deaths: 0,
        };
    },
    GetPlayerFlagInfo: (teamIndex: number, playerIndex: number): boolean => {
        return false;
    },
    GetPlayerFlagInfoByUnit: (unitToken: string): boolean => {
        return false;
    },
    GetPlayerOverrideName: (originalName: string): string => {
        return "";
    },
    GetPlayerSpellCharges: (
        teamIndex: number,
        playerIndex: number,
        spellID: number
    ): [
        charges: number,
        maxCharges: number,
        startTime: number,
        duration: number
    ] => {
        return [0, 0, 0, 0];
    },
    GetPlayerSpellChargesByUnit: (
        unitToken: string,
        spellID: number
    ): [
        charges: number,
        maxCharges: number,
        startTime: number,
        duration: number
    ] => {
        return [0, 0, 0, 0];
    },
    GetPositionLerpAmount: (): number => {
        return 0;
    },
    GetSmoothFollowTransitioning: (): boolean => {
        return false;
    },
    GetSoftlockWeight: (): number => {
        return 0;
    },
    GetSpeedFactor: (): number => {
        return 0;
    },
    GetStartLocation: (mapID: number): Vector3DMixin => {
        return {} as any;
    },
    GetTeamColor: (teamIndex: number): ColorMixin => {
        return {} as any;
    },
    GetTeamColorByUnit: (unitToken: string): ColorMixin => {
        return {} as any;
    },
    GetTimeLeftInMatch: (): number | undefined => {
        return 0;
    },
    GetTrackedSpellID: (indirectSpellID: number): number => {
        return 0;
    },
    GetTrackedSpells: (
        teamIndex: number,
        playerIndex: number,
        category: TrackedSpellCategory
    ): LuaArray<number> | undefined => {
        return {} as any;
    },
    GetTrackedSpellsByUnit: (
        unitToken: string,
        category: TrackedSpellCategory
    ): LuaArray<number> | undefined => {
        return {} as any;
    },
    GetUnitData: (unitToken: string): CommentatorUnitData => {
        return {
            healthMax: 0,
            health: 0,
            absorbTotal: 0,
            isDeadOrGhost: false,
            isFeignDeath: false,
            powerTypeToken: "",
            power: 0,
            powerMax: 0,
        };
    },
    GetWargameInfo: (
        listID: number
    ): [
        name: string,
        minPlayers: number,
        maxPlayers: number,
        isArena: boolean
    ] => {
        return ["", 0, 0, false];
    },
    HasTrackedAuras: (
        token: string
    ): [hasOffensiveAura: boolean, hasDefensiveAura: boolean] => {
        return [false, false];
    },
    IsSmartCameraLocked: (): boolean => {
        return false;
    },
    IsSpectating: (): boolean => {
        return false;
    },
    IsTrackedDefensiveAura: (spellID: number): boolean => {
        return false;
    },
    IsTrackedOffensiveAura: (spellID: number): boolean => {
        return false;
    },
    IsTrackedSpell: (
        teamIndex: number,
        playerIndex: number,
        spellID: number,
        category: TrackedSpellCategory
    ): boolean => {
        return false;
    },
    IsTrackedSpellByUnit: (
        unitToken: string,
        spellID: number,
        category: TrackedSpellCategory
    ): boolean => {
        return false;
    },
    IsUsingSmartCamera: (): boolean => {
        return false;
    },
    LookAtPlayer: (
        factionIndex: number,
        playerIndex: number,
        lookAtIndex: number | undefined
    ): void => {},
    RemoveAllOverrideNames: (): void => {},
    RemovePlayerOverrideName: (originalPlayerName: string): void => {},
    RequestPlayerCooldownInfo: (
        teamIndex: number,
        playerIndex: number
    ): void => {},
    ResetFoVTarget: (): void => {},
    ResetSeriesScores: (teamName1: string, teamName2: string): void => {},
    ResetSettings: (): void => {},
    ResetTrackedAuras: (): void => {},
    SetAdditionalCameraWeight: (
        teamIndex: number,
        playerIndex: number,
        weight: number
    ): void => {},
    SetAdditionalCameraWeightByToken: (
        unitToken: string,
        weight: number
    ): void => {},
    SetBlacklistedAuras: (spellIDs: LuaArray<number>): void => {},
    SetBlacklistedCooldowns: (
        specID: number,
        spellIDs: LuaArray<number>
    ): void => {},
    SetCamera: (
        xPos: number,
        yPos: number,
        zPos: number,
        yaw: number,
        pitch: number,
        roll: number,
        fov: number
    ): void => {},
    SetCameraCollision: (collide: boolean): void => {},
    SetCameraPosition: (
        xPos: number,
        yPos: number,
        zPos: number,
        snapToLocation: boolean
    ): void => {},
    SetCheatsEnabled: (enableCheats: boolean): void => {},
    SetCommentatorHistory: (history: CommentatorHistory): void => {},
    SetDistanceBeforeForcedHorizontalConvergence: (
        distance: number
    ): void => {},
    SetDurationToForceHorizontalConvergence: (ms: number): void => {},
    SetExcludeDistance: (excludeDistance: number): void => {},
    SetFollowCameraSpeeds: (elasticSpeed: number, minSpeed: number): void => {},
    SetHardlockWeight: (weight: number): void => {},
    SetHorizontalAngleThresholdToSmooth: (angle: number): void => {},
    SetLookAtLerpAmount: (amount: number): void => {},
    SetMapAndInstanceIndex: (
        mapIndex: number,
        instanceIndex: number
    ): void => {},
    SetMouseDisabled: (disabled: boolean): void => {},
    SetMoveSpeed: (newSpeed: number): void => {},
    SetMsToHoldForHorizontalMovement: (ms: number): void => {},
    SetMsToHoldForVerticalMovement: (ms: number): void => {},
    SetMsToSmoothHorizontalChange: (ms: number): void => {},
    SetMsToSmoothVerticalChange: (ms: number): void => {},
    SetPositionLerpAmount: (amount: number): void => {},
    SetRequestedDebuffCooldowns: (
        specID: number,
        spellIDs: LuaArray<number>
    ): void => {},
    SetRequestedDefensiveCooldowns: (
        specID: number,
        spellIDs: LuaArray<number>
    ): void => {},
    SetRequestedOffensiveCooldowns: (
        specID: number,
        spellIDs: LuaArray<number>
    ): void => {},
    SetSeriesScore: (
        teamName1: string,
        teamName2: string,
        scoringTeamName: string,
        score: number
    ): void => {},
    SetSeriesScores: (
        teamName1: string,
        teamName2: string,
        score1: number,
        score2: number
    ): void => {},
    SetSmartCameraLocked: (locked: boolean): void => {},
    SetSmoothFollowTransitioning: (enabled: boolean): void => {},
    SetSoftlockWeight: (weight: number): void => {},
    SetSpeedFactor: (factor: number): void => {},
    SetTargetHeightOffset: (offset: number): void => {},
    SetUseSmartCamera: (useSmartCamera: boolean): void => {},
    SnapCameraLookAtPoint: (): void => {},
    StartWargame: (
        listID: number,
        teamSize: number,
        tournamentRules: boolean,
        teamOneCaptain: string,
        teamTwoCaptain: string
    ): void => {},
    SwapTeamSides: (): void => {},
    ToggleCheats: (): void => {},
    UpdateMapInfo: (targetPlayer: string | undefined): void => {},
    UpdatePlayerInfo: (): void => {},
    ZoomIn: (): void => {},
    ZoomOut: (): void => {},
};
export type CommentatorEnterWorldEvent = (
    frame: UIFrame,
    e: "COMMENTATOR_ENTER_WORLD"
) => void;
export type CommentatorHistoryFlushedEvent = (
    frame: UIFrame,
    e: "COMMENTATOR_HISTORY_FLUSHED"
) => void;
export type CommentatorImmediateFovUpdateEvent = (
    frame: UIFrame,
    e: "COMMENTATOR_IMMEDIATE_FOV_UPDATE",
    fov: number
) => void;
export type CommentatorMapUpdateEvent = (
    frame: UIFrame,
    e: "COMMENTATOR_MAP_UPDATE"
) => void;
export type CommentatorPlayerNameOverrideUpdateEvent = (
    frame: UIFrame,
    e: "COMMENTATOR_PLAYER_NAME_OVERRIDE_UPDATE",
    nameToOverride: string,
    overrideName: string | undefined
) => void;
export type CommentatorPlayerUpdateEvent = (
    frame: UIFrame,
    e: "COMMENTATOR_PLAYER_UPDATE"
) => void;
export type CommentatorResetSettingsEvent = (
    frame: UIFrame,
    e: "COMMENTATOR_RESET_SETTINGS"
) => void;
export type CommentatorTeamNameUpdateEvent = (
    frame: UIFrame,
    e: "COMMENTATOR_TEAM_NAME_UPDATE",
    teamName: string
) => void;
export type CommentatorTeamsSwappedEvent = (
    frame: UIFrame,
    e: "COMMENTATOR_TEAMS_SWAPPED",
    swapped: boolean
) => void;
