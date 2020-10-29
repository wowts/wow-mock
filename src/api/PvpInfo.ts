import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export const enum BrawlType {
    None = 0,
    Battleground = 1,
    Arena = 2,
    Lfg = 3
}
export const enum PvPMatchState {
    Inactive = 0,
    Active = 1,
    Complete = 2
}
export interface BattlefieldCurrencyReward {
    id: number;
    quantity: number
}
export interface BattlefieldItemReward {
    id: number;
    name: string;
    texture: number;
    quantity: number
}
export interface BattlefieldVehicleInfo {
    x: number;
    y: number;
    name: string;
    isOccupied: boolean;
    atlas: string;
    textureWidth: number;
    textureHeight: number;
    facing: number;
    isPlayer: boolean;
    isAlive: boolean;
    shouldDrawBelowPlayerBlips: boolean
}
export interface BattlemasterListInfo {
    name: string;
    instanceType: number;
    minPlayers: number;
    maxPlayers: number;
    icon: number;
    longDescription: string;
    shortDescription: string
}
export interface HonorRewardInfo {
    honorLevelName: string;
    badgeFileDataID: number;
    achievementRewardedID: number
}
export interface LevelUpBattlegroundInfo {
    id: number;
    icon: number;
    name: string;
    isEpic: boolean
}
export interface MatchPVPStatColumn {
    pvpStatID: number;
    columnHeaderID: number;
    orderIndex: number;
    name: string;
    tooltip: string
}
export interface PvpBrawlInfo {
    name: string;
    shortDescription: string;
    longDescription: string;
    canQueue: boolean;
    timeLeftUntilNextChange: number;
    brawlType: BrawlType;
    mapNames: LuaArray<string>
}
export interface PVPPersonalRatedInfo {
    personalRating: number;
    bestSeasonRating: number;
    bestWeeklyRating: number;
    seasonPlayed: number;
    seasonWon: number;
    weeklyPlayed: number;
    weeklyWon: number;
    lastWeeksBestRating: number;
    hasWonBracketToday: boolean;
    tier: number;
    ranking: number | undefined
}
export interface PVPPostMatchCurrencyReward {
    currencyType: number;
    quantityChanged: number
}
export interface PVPPostMatchItemReward {
    type: string;
    link: string;
    quantity: number;
    specID: number;
    sex: number;
    isUpgraded: boolean
}
export interface PvpScalingData {
    scalingDataID: number;
    specializationID: number;
    name: string;
    value: number
}
export interface PVPScoreInfo {
    name: string;
    guid: string;
    killingBlows: number;
    honorableKills: number;
    deaths: number;
    honorGained: number;
    faction: number;
    raceName: string;
    className: string;
    classToken: string;
    damageDone: number;
    healingDone: number;
    rating: number;
    ratingChange: number;
    prematchMMR: number;
    mmrChange: number;
    talentSpec: string;
    honorLevel: number;
    stats: LuaArray<PVPStatInfo>
}
export interface PVPStatInfo {
    pvpStatID: number;
    pvpStatValue: number;
    orderIndex: number;
    name: string;
    tooltip: string;
    iconName: string
}
export interface PVPTeamInfo {
    name: string;
    size: number;
    rating: number;
    ratingNew: number;
    ratingMMR: number
}
export interface PvpTierInfo {
    name: string;
    descendRating: number;
    ascendRating: number;
    descendTier: number;
    ascendTier: number;
    pvpTierEnum: number;
    tierIconID: number
}
export interface RandomBGInfo {
    canQueue: boolean;
    bgID: number;
    hasRandomWinToday: boolean;
    minLevel: number;
    maxLevel: number
}
export interface SpecialEventDetails {
    name: string;
    shortDescription: string;
    longDescription: string;
    achievementID: number;
    isActive: boolean
}
export const C_PvP = {
    CanDisplayDeaths: (): boolean => {return false},
    CanDisplayHonorableKills: (): boolean => {return false},
    CanPlayerUseRatedPVPUI: (): [canUse: boolean, failureReason: string] => {return [false, '']},
    CanToggleWarMode: (toggle: boolean): boolean => {return false},
    CanToggleWarModeInArea: (): boolean => {return false},
    DoesMatchOutcomeAffectRating: (): boolean => {return false},
    GetActiveBrawlInfo: (): PvpBrawlInfo | undefined => {return {name: '', shortDescription: '', longDescription: '', canQueue: false, timeLeftUntilNextChange: 0, brawlType: BrawlType.None, mapNames: {} as any}},
    GetActiveMatchBracket: (): number => {return 0},
    GetActiveMatchDuration: (): number => {return 0},
    GetActiveMatchState: (): PvPMatchState => {return PvPMatchState.Inactive},
    GetActiveMatchWinner: (): number => {return 0},
    GetArenaCrowdControlInfo: (playerToken: string): [spellID: number, startTime: number, duration: number] => {return [0, 0, 0]},
    GetArenaRewards: (teamSize: number): [honor: number, experience: number, itemRewards: LuaArray<BattlefieldItemReward> | undefined, currencyRewards: LuaArray<BattlefieldCurrencyReward> | undefined] => {return [0, 0, {} as any, {} as any]},
    GetArenaSkirmishRewards: (): [honor: number, experience: number, itemRewards: LuaArray<BattlefieldItemReward> | undefined, currencyRewards: LuaArray<BattlefieldCurrencyReward> | undefined] => {return [0, 0, {} as any, {} as any]},
    GetAvailableBrawlInfo: (): PvpBrawlInfo | undefined => {return {name: '', shortDescription: '', longDescription: '', canQueue: false, timeLeftUntilNextChange: 0, brawlType: BrawlType.None, mapNames: {} as any}},
    GetBattlefieldVehicleInfo: (vehicleIndex: number, uiMapID: number): BattlefieldVehicleInfo => {return {x: 0, y: 0, name: '', isOccupied: false, atlas: '', textureWidth: 0, textureHeight: 0, facing: 0, isPlayer: false, isAlive: false, shouldDrawBelowPlayerBlips: false}},
    GetBattlefieldVehicles: (uiMapID: number): LuaArray<BattlefieldVehicleInfo> => {return {} as any},
    GetBrawlRewards: (brawlType: BrawlType): [honor: number, experience: number, itemRewards: LuaArray<BattlefieldItemReward> | undefined, currencyRewards: LuaArray<BattlefieldCurrencyReward> | undefined, hasWon: boolean] => {return [0, 0, {} as any, {} as any, false]},
    GetGlobalPvpScalingInfoForSpecID: (specializationID: number): LuaArray<PvpScalingData> => {return {} as any},
    GetHonorRewardInfo: (honorLevel: number): HonorRewardInfo | undefined => {return {honorLevelName: '', badgeFileDataID: 0, achievementRewardedID: 0}},
    GetLevelUpBattlegrounds: (level: number): LuaArray<LevelUpBattlegroundInfo> => {return {} as any},
    GetMatchPVPStatColumn: (pvpStatID: number): MatchPVPStatColumn | undefined => {return {pvpStatID: 0, columnHeaderID: 0, orderIndex: 0, name: '', tooltip: ''}},
    GetMatchPVPStatColumns: (): LuaArray<MatchPVPStatColumn> => {return {} as any},
    GetNextHonorLevelForReward: (honorLevel: number): number | undefined => {return 0},
    GetOutdoorPvPWaitTime: (uiMapID: number): number => {return 0},
    GetPVPActiveMatchPersonalRatedInfo: (): PVPPersonalRatedInfo | undefined => {return {personalRating: 0, bestSeasonRating: 0, bestWeeklyRating: 0, seasonPlayed: 0, seasonWon: 0, weeklyPlayed: 0, weeklyWon: 0, lastWeeksBestRating: 0, hasWonBracketToday: false, tier: 0, ranking: 0}},
    GetPostMatchCurrencyRewards: (): LuaArray<PVPPostMatchCurrencyReward> => {return {} as any},
    GetPostMatchItemRewards: (): LuaArray<PVPPostMatchItemReward> => {return {} as any},
    GetPvpTierID: (tierEnum: number, bracketEnum: number): number | undefined => {return 0},
    GetPvpTierInfo: (tierID: number): PvpTierInfo | undefined => {return {name: '', descendRating: 0, ascendRating: 0, descendTier: 0, ascendTier: 0, pvpTierEnum: 0, tierIconID: 0}},
    GetRandomBGInfo: (): RandomBGInfo => {return {canQueue: false, bgID: 0, hasRandomWinToday: false, minLevel: 0, maxLevel: 0}},
    GetRandomBGRewards: (): [honor: number, experience: number, itemRewards: LuaArray<BattlefieldItemReward> | undefined, currencyRewards: LuaArray<BattlefieldCurrencyReward> | undefined] => {return [0, 0, {} as any, {} as any]},
    GetRandomEpicBGInfo: (): RandomBGInfo => {return {canQueue: false, bgID: 0, hasRandomWinToday: false, minLevel: 0, maxLevel: 0}},
    GetRandomEpicBGRewards: (): [honor: number, experience: number, itemRewards: LuaArray<BattlefieldItemReward> | undefined, currencyRewards: LuaArray<BattlefieldCurrencyReward> | undefined] => {return [0, 0, {} as any, {} as any]},
    GetRatedBGRewards: (): [honor: number, experience: number, itemRewards: LuaArray<BattlefieldItemReward> | undefined, currencyRewards: LuaArray<BattlefieldCurrencyReward> | undefined] => {return [0, 0, {} as any, {} as any]},
    GetRewardItemLevelsByTierEnum: (pvpTierEnum: number): [activityItemLevel: number, weeklyItemLevel: number] => {return [0, 0]},
    GetScoreInfo: (offsetIndex: number): PVPScoreInfo | undefined => {return {name: '', guid: '', killingBlows: 0, honorableKills: 0, deaths: 0, honorGained: 0, faction: 0, raceName: '', className: '', classToken: '', damageDone: 0, healingDone: 0, rating: 0, ratingChange: 0, prematchMMR: 0, mmrChange: 0, talentSpec: '', honorLevel: 0, stats: {} as any}},
    GetScoreInfoByPlayerGuid: (guid: string): PVPScoreInfo | undefined => {return {name: '', guid: '', killingBlows: 0, honorableKills: 0, deaths: 0, honorGained: 0, faction: 0, raceName: '', className: '', classToken: '', damageDone: 0, healingDone: 0, rating: 0, ratingChange: 0, prematchMMR: 0, mmrChange: 0, talentSpec: '', honorLevel: 0, stats: {} as any}},
    GetSeasonBestInfo: (): [tierID: number, nextTierID: number | undefined] => {return [0, 0]},
    GetSkirmishInfo: (pvpBracket: number): BattlemasterListInfo => {return {name: '', instanceType: 0, minPlayers: 0, maxPlayers: 0, icon: 0, longDescription: '', shortDescription: ''}},
    GetSpecialEventDetails: (): SpecialEventDetails | undefined => {return {name: '', shortDescription: '', longDescription: '', achievementID: 0, isActive: false}},
    GetSpecialEventInfo: (): RandomBGInfo => {return {canQueue: false, bgID: 0, hasRandomWinToday: false, minLevel: 0, maxLevel: 0}},
    GetTeamInfo: (factionIndex: number): PVPTeamInfo | undefined => {return {name: '', size: 0, rating: 0, ratingNew: 0, ratingMMR: 0}},
    GetWarModeRewardBonus: (): number => {return 0},
    GetWarModeRewardBonusDefault: (): number => {return 0},
    GetWeeklyChestInfo: (): [rewardAchieved: boolean, lastWeekRewardAchieved: boolean, lastWeekRewardClaimed: boolean, pvpTierMaxFromWins: number] => {return [false, false, false, 0]},
    HasArenaSkirmishWinToday: (): boolean => {return false},
    IsActiveBattlefield: (): boolean => {return false},
    IsActiveMatchRegistered: (): boolean => {return false},
    IsArena: (): boolean => {return false},
    IsBattleground: (): boolean => {return false},
    IsBattlegroundEnlistmentBonusActive: (): [battlegroundActive: boolean, brawlActive: boolean] => {return [false, false]},
    IsInBrawl: (): boolean => {return false},
    IsMatchConsideredArena: (): boolean => {return false},
    IsMatchFactional: (): boolean => {return false},
    IsPVPMap: (): boolean => {return false},
    IsRatedArena: (): boolean => {return false},
    IsRatedBattleground: (): boolean => {return false},
    IsRatedMap: (): boolean => {return false},
    IsWarModeActive: (): boolean => {return false},
    IsWarModeDesired: (): boolean => {return false},
    IsWarModeFeatureEnabled: (): boolean => {return false},
    JoinBrawl: (): void => {},
    RequestCrowdControlSpell: (playerToken: string): void => {},
    SetWarModeDesired: (warModeDesired: boolean): void => {},
    ToggleWarMode: (): void => {},
};
export type ArenaOpponentUpdateEvent = (frame: UIFrame, e: "ARENA_OPPONENT_UPDATE", unitToken: string, updateReason: string) => void
export type ArenaPrepOpponentSpecializationsEvent = (frame: UIFrame, e: "ARENA_PREP_OPPONENT_SPECIALIZATIONS") => void
export type ArenaSeasonWorldStateEvent = (frame: UIFrame, e: "ARENA_SEASON_WORLD_STATE") => void
export type BattlefieldQueueTimeoutEvent = (frame: UIFrame, e: "BATTLEFIELD_QUEUE_TIMEOUT") => void
export type BattlefieldsClosedEvent = (frame: UIFrame, e: "BATTLEFIELDS_CLOSED") => void
export type BattlefieldsShowEvent = (frame: UIFrame, e: "BATTLEFIELDS_SHOW", isArena: boolean | undefined, battleMasterListID: number | undefined) => void
export type BattlegroundObjectivesUpdateEvent = (frame: UIFrame, e: "BATTLEGROUND_OBJECTIVES_UPDATE") => void
export type BattlegroundPointsUpdateEvent = (frame: UIFrame, e: "BATTLEGROUND_POINTS_UPDATE") => void
export type GdfSimCompleteEvent = (frame: UIFrame, e: "GDF_SIM_COMPLETE") => void
export type HonorLevelUpdateEvent = (frame: UIFrame, e: "HONOR_LEVEL_UPDATE", isHigherLevel: boolean) => void
export type NotifyPvpAfkResultEvent = (frame: UIFrame, e: "NOTIFY_PVP_AFK_RESULT", offender: string, numBlackMarksOnOffender: number, numPlayersIHaveReported: number) => void
export type PlayerEnteringBattlegroundEvent = (frame: UIFrame, e: "PLAYER_ENTERING_BATTLEGROUND") => void
export type PostMatchCurrencyRewardUpdateEvent = (frame: UIFrame, e: "POST_MATCH_CURRENCY_REWARD_UPDATE", reward: PVPPostMatchCurrencyReward) => void
export type PostMatchItemRewardUpdateEvent = (frame: UIFrame, e: "POST_MATCH_ITEM_REWARD_UPDATE") => void
export type PvpBrawlInfoUpdatedEvent = (frame: UIFrame, e: "PVP_BRAWL_INFO_UPDATED") => void
export type PvpMatchActiveEvent = (frame: UIFrame, e: "PVP_MATCH_ACTIVE") => void
export type PvpMatchCompleteEvent = (frame: UIFrame, e: "PVP_MATCH_COMPLETE", winner: number, duration: number) => void
export type PvpMatchInactiveEvent = (frame: UIFrame, e: "PVP_MATCH_INACTIVE") => void
export type PvpRatedStatsUpdateEvent = (frame: UIFrame, e: "PVP_RATED_STATS_UPDATE") => void
export type PvpRewardsUpdateEvent = (frame: UIFrame, e: "PVP_REWARDS_UPDATE") => void
export type PvpRoleUpdateEvent = (frame: UIFrame, e: "PVP_ROLE_UPDATE") => void
export type PvpSpecialEventInfoUpdatedEvent = (frame: UIFrame, e: "PVP_SPECIAL_EVENT_INFO_UPDATED") => void
export type PvpTypesEnabledEvent = (frame: UIFrame, e: "PVP_TYPES_ENABLED", wargameBattlegrounds: boolean, ratedBattlegrounds: boolean, ratedArenas: boolean) => void
export type PvpVehicleInfoUpdatedEvent = (frame: UIFrame, e: "PVP_VEHICLE_INFO_UPDATED") => void
export type PvpWorldstateUpdateEvent = (frame: UIFrame, e: "PVP_WORLDSTATE_UPDATE") => void
export type PvpqueueAnywhereShowEvent = (frame: UIFrame, e: "PVPQUEUE_ANYWHERE_SHOW") => void
export type PvpqueueAnywhereUpdateAvailableEvent = (frame: UIFrame, e: "PVPQUEUE_ANYWHERE_UPDATE_AVAILABLE") => void
export type UpdateActiveBattlefieldEvent = (frame: UIFrame, e: "UPDATE_ACTIVE_BATTLEFIELD") => void
export type UpdateBattlefieldScoreEvent = (frame: UIFrame, e: "UPDATE_BATTLEFIELD_SCORE") => void
export type UpdateBattlefieldStatusEvent = (frame: UIFrame, e: "UPDATE_BATTLEFIELD_STATUS", battleFieldIndex: number) => void
export type WarModeStatusUpdateEvent = (frame: UIFrame, e: "WAR_MODE_STATUS_UPDATE", warModeEnabled: boolean) => void
export type WargameRequestedEvent = (frame: UIFrame, e: "WARGAME_REQUESTED", opposingPartyMemberName: string, battlegroundName: string, timeoutSeconds: number, tournamentRules: boolean) => void