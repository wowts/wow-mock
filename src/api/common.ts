import { ColorMixin } from "../mixins";
import { LuaArray } from "@wowts/lua";
export const enum AuctionHouseCommoditySortOrder {
    UnitPrice = 0,
    Quantity = 1,
}
export const enum AuctionHouseFilter {
    UncollectedOnly = 0,
    UsableOnly = 1,
    UpgradesOnly = 2,
    ExactMatch = 3,
    PoorQuality = 4,
    CommonQuality = 5,
    UncommonQuality = 6,
    RareQuality = 7,
    EpicQuality = 8,
    LegendaryQuality = 9,
    ArtifactQuality = 10,
    LegendaryCraftedItemOnly = 11,
}
export const enum AuctionHouseItemSortOrder {
    Bid = 0,
    Buyout = 1,
}
export const enum AuctionHouseSortOrder {
    Price = 0,
    Name = 1,
    Level = 2,
    Bid = 3,
    Buyout = 4,
    TimeRemaining = 5,
}
export const enum AuctionHouseTimeLeftBand {
    Short = 0,
    Medium = 1,
    Long = 2,
    VeryLong = 3,
}
export const enum CalendarCommandType {
    CalendarCommandCreate = 0,
    CalendarCommandInvite = 1,
    CalendarCommandRsvp = 2,
    CalendarCommandRemoveInvite = 3,
    CalendarCommandRemoveEvent = 4,
    CalendarCommandStatus = 5,
    CalendarCommandModeratorStatus = 6,
    CalendarCommandGetCalendar = 7,
    CalendarCommandGetEvent = 8,
    CalendarCommandUpdateEvent = 9,
    CalendarCommandComplain = 10,
    CalendarCommandNotes = 11,
}
export const enum CalendarErrorType {
    CalendarErrorSuccess = 0,
    CalendarErrorCommunityEventsExceeded = 1,
    CalendarErrorEventsExceeded = 2,
    CalendarErrorSelfInvitesExceeded = 3,
    CalendarErrorOtherInvitesExceeded = 4,
    CalendarErrorNoPermission = 5,
    CalendarErrorEventInvalid = 6,
    CalendarErrorNotInvited = 7,
    CalendarErrorUnknownError = 8,
    CalendarErrorNotInGuild = 9,
    CalendarErrorNotInCommunity = 10,
    CalendarErrorTargetAlreadyInvited = 11,
    CalendarErrorNameNotFound = 12,
    CalendarErrorWrongFaction = 13,
    CalendarErrorIgnored = 14,
    CalendarErrorInvitesExceeded = 15,
    CalendarErrorInvalidMaxSize = 16,
    CalendarErrorInvalidDate = 17,
    CalendarErrorInvalidTime = 18,
    CalendarErrorNoInvites = 19,
    CalendarErrorNeedsTitle = 20,
    CalendarErrorEventPassed = 21,
    CalendarErrorEventLocked = 22,
    CalendarErrorDeleteCreatorFailed = 23,
    CalendarErrorDataAlreadySet = 24,
    CalendarErrorCalendarDisabled = 25,
    CalendarErrorRestrictedAccount = 26,
    CalendarErrorArenaEventsExceeded = 27,
    CalendarErrorRestrictedLevel = 28,
    CalendarErrorSquelched = 29,
    CalendarErrorNoInvite = 30,
    CalendarErrorComplaintDisabled = 31,
    CalendarErrorComplaintSelf = 32,
    CalendarErrorComplaintSameGuild = 33,
    CalendarErrorComplaintGm = 34,
    CalendarErrorComplaintLimit = 35,
    CalendarErrorComplaintNotFound = 36,
    CalendarErrorEventWrongServer = 37,
    CalendarErrorNoCommunityInvites = 38,
    CalendarErrorInvalidSignup = 39,
    CalendarErrorNoModerator = 40,
    CalendarErrorModeratorRestricted = 41,
    CalendarErrorInvalidNotes = 42,
    CalendarErrorInvalidTitle = 43,
    CalendarErrorInvalidDescription = 44,
    CalendarErrorInvalidClub = 45,
    CalendarErrorCreatorNotFound = 46,
    CalendarErrorEventThrottled = 47,
    CalendarErrorInviteThrottled = 48,
    CalendarErrorInternal = 49,
    CalendarErrorComplaintAdded = 50,
}
export const enum CalendarEventBits {
    CalendarEventBitPlayer = 1,
    CalendarEventBitGuildDeprecated = 2,
    CalendarEventBitSystem = 4,
    CalendarEventBitHoliday = 8,
    CalendarEventBitLocked = 16,
    CalendarEventBitAutoApprove = 32,
    CalendarEventBitCommunityAnnouncement = 64,
    CalendarEventBitRaidLockout = 128,
    CalendarEventBitArenaDeprecated = 256,
    CalendarEventBitRaidResetDeprecated = 512,
    CalendarEventBitCommunitySignup = 1024,
    CalendarEventBitGuildSignup = 2048,
    CommunityWide = 3136,
    PlayerCreated = 3395,
    CantComplain = 3788,
}
export const enum CalendarEventRepeatOptions {
    CalendarRepeatNever = 0,
    CalendarRepeatWeekly = 1,
    CalendarRepeatBiweekly = 2,
    CalendarRepeatMonthly = 3,
}
export const enum CalendarEventType {
    Raid = 0,
    Dungeon = 1,
    PvP = 2,
    Meeting = 3,
    Other = 4,
    HeroicDeprecated = 5,
}
export const enum CalendarFilterFlags {
    WeeklyHoliday = 1,
    Darkmoon = 2,
    Battleground = 4,
    RaidLockout = 8,
    RaidReset = 16,
}
export const enum CalendarGetEventType {
    Get = 0,
    Add = 1,
    Copy = 2,
    DefaultCalendarGetEventType = 0,
}
export const enum CalendarHolidayFilterType {
    Weekly = 0,
    Darkmoon = 1,
    Battleground = 2,
}
export const enum CalendarInviteBits {
    CalendarInviteBitPendingInvite = 1,
    CalendarInviteBitModerator = 2,
    CalendarInviteBitCreator = 4,
    CalendarInviteBitSignup = 8,
}
export const enum CalendarInviteSortType {
    CalendarInviteSortName = 0,
    CalendarInviteSortLevel = 1,
    CalendarInviteSortClass = 2,
    CalendarInviteSortStatus = 3,
    CalendarInviteSortParty = 4,
    CalendarInviteSortNotes = 5,
}
export const enum CalendarInviteType {
    Normal = 0,
    Signup = 1,
}
export const enum CalendarModeratorStatus {
    CalendarModeratorNone = 0,
    CalendarModeratorModerator = 1,
    CalendarModeratorCreator = 2,
}
export const enum CalendarStatus {
    Invited = 0,
    Available = 1,
    Declined = 2,
    Confirmed = 3,
    Out = 4,
    Standby = 5,
    Signedup = 6,
    NotSignedup = 7,
    Tentative = 8,
}
export const enum CalendarType {
    Player = 0,
    Community = 1,
    RaidLockout = 2,
    RaidResetDeprecated = 3,
    Holiday = 4,
    HolidayWeekly = 5,
    HolidayDarkmoon = 6,
    HolidayBattleground = 7,
}
export const enum CalendarWebActionType {
    Accept = 0,
    Decline = 1,
    Remove = 2,
    ReportSpam = 3,
    Signup = 4,
    Tentative = 5,
    TentativeSignup = 6,
}
export const enum HolidayCalendarFlags {
    Alliance = 1,
    Horde = 2,
}
export const enum HolidayFlags {
    IsRegionwide = 1,
    DontShowInCalendar = 2,
    DontDisplayEnd = 4,
    DontDisplayBanner = 8,
    NotAvailableClientSide = 16,
}
export const enum ChrCustomizationCategoryFlag {
    UndressModel = 1,
}
export const enum ChrCustomizationOptionType {
    SelectionPopout = 0,
    Checkbox = 1,
    Slider = 2,
}
export const enum Unitsex {
    Male = 0,
    Female = 1,
    None = 2,
}
export interface CharCustomizationChoice {
    id: number;
    name: string;
    ineligibleChoice: boolean;
    swatchColor1: ColorMixin | undefined;
    swatchColor2: ColorMixin | undefined;
}
export interface CharCustomizationOption {
    id: number;
    name: string;
    orderIndex: number;
    optionType: ChrCustomizationOptionType;
    choices: LuaArray<CharCustomizationChoice>;
    currentChoiceIndex: number;
}
export const enum ChatChannelRuleset {
    None = 0,
    Mentor = 1,
    Disabled = 2,
}
export const enum ChatChannelType {
    None = 0,
    Custom = 1,
    PrivateParty = 2,
    PublicParty = 3,
    Communities = 4,
}
export const enum CallingStates {
    QuestOffer = 0,
    QuestActive = 1,
    QuestCompleted = 2,
}
export const MaxCallings = 3;
export const enum CurrencyDestroyReason {
    Cheat = 0,
    Spell = 1,
    VersionUpdate = 2,
    QuestTurnin = 3,
    Vendor = 4,
    Trade = 5,
    Capped = 6,
    Garrison = 7,
    DroppedToCorpse = 8,
    BonusRoll = 9,
    FactionConversion = 10,
    Last = 11,
}
export const enum CurrencyFlags {
    CurrencyTradable = 1,
    CurrencyAppearsInLootWindow = 2,
    CurrencyComputedWeeklyMaximum = 4,
    Currency_100_Scaler = 8,
    CurrencyNoLowLevelDrop = 16,
    CurrencyIgnoreMaxQtyOnLoad = 32,
    CurrencyLogOnWorldChange = 64,
    CurrencyTrackQuantity = 128,
    CurrencyResetTrackedQuantity = 256,
    CurrencyUpdateVersionIgnoreMax = 512,
    CurrencySuppressChatMessageOnVersionChange = 1024,
    CurrencySingleDropInLoot = 2048,
    CurrencyHasWeeklyCatchup = 4096,
    CurrencyDoNotCompressChat = 8192,
    CurrencyDoNotLogAcquisitionToBi = 16384,
    CurrencyNoRaidDrop = 32768,
    CurrencyNotPersistent = 65536,
    CurrencyDeprecated = 131072,
    CurrencyDynamicMaximum = 262144,
    CurrencySuppressChatMessages = 524288,
    CurrencyDoNotToast = 1048576,
    CurrencyDestroyExtraOnLoot = 2097152,
    CurrencyDontShowTotalInTooltip = 4194304,
    CurrencyDontCoalesceInLootWindow = 8388608,
    CurrencyAccountWide = 16777216,
    CurrencyAllowOverflowMailer = 33554432,
    CurrencyHideAsReward = 67108864,
    CurrencyHasWarmodeBonus = 134217728,
    CurrencyIsAllianceOnly = 268435456,
    CurrencyIsHordeOnly = 536870912,
    CurrencyLimitWarmodeBonusOncePerTooltip = 1073741824,
    DeprecatedCurrencyFlag = -2147483648,
}
export const enum CurrencyFlagsB {
    CurrencyBUseTotalEarnedForMaxQty = 1,
    CurrencyBShowQuestXpGainInTooltip = 2,
}
export const enum CurrencyGainFlags {
    BonusAward = 1,
    DroppedFromDeath = 2,
    FromAccountServer = 4,
}
export const enum CurrencySource {
    ConvertOldItem = 0,
    ConvertOldPvPCurrency = 1,
    ItemRefund = 2,
    QuestReward = 3,
    Cheat = 4,
    Vendor = 5,
    PvPKillCredit = 6,
    PvPMetaCredit = 7,
    PvPScriptedAward = 8,
    Loot = 9,
    UpdatingVersion = 10,
    LfgReward = 11,
    Trade = 12,
    Spell = 13,
    ItemDeletion = 14,
    RatedBattleground = 15,
    RandomBattleground = 16,
    Arena = 17,
    ExceededMaxQty = 18,
    PvPCompletionBonus = 19,
    Script = 20,
    GuildBankWithdrawal = 21,
    Pushloot = 22,
    GarrisonBuilding = 23,
    PvPDrop = 24,
    GarrisonFollowerActivation = 25,
    GarrisonBuildingRefund = 26,
    GarrisonMissionReward = 27,
    GarrisonResourceOverTime = 28,
    QuestRewardIgnoreCaps = 29,
    GarrisonTalent = 30,
    GarrisonWorldQuestBonus = 31,
    PvPHonorReward = 32,
    BonusRoll = 33,
    AzeriteRespec = 34,
    WorldQuestReward = 35,
    WorldQuestRewardIgnoreCaps = 36,
    FactionConversion = 37,
    DailyQuestReward = 38,
    DailyQuestWarModeReward = 39,
    WeeklyQuestReward = 40,
    WeeklyQuestWarModeReward = 41,
    AccountCopy = 42,
    WeeklyRewardChest = 43,
    GarrisonTalentTreeReset = 44,
    Last = 45,
}
export const enum CurrencyTokenCategoryFlags {
    FlagSortLast = 1,
    FlagPlayerItemAssignment = 2,
    Hidden = 4,
    Virtual = 8,
}
export const enum PlayerCurrencyFlags {
    Incremented = 1,
    Loading = 2,
}
export const enum PlayerCurrencyFlagsDbFlags {
    IgnoreMaxQtyOnload = 1,
    Reuse1 = 2,
    InBackpack = 4,
    UnusedInUI = 8,
    Reuse2 = 16,
}
export const PLAYER_CURRENCY_CLIENT_FLAGS = 3;
export const MAX_CURRENCY_QUANTITY = 100000000;
export const CONQUEST_ARENA_AND_BG_META_CURRENCY_ID = 483;
export const CONQUEST_RATED_BG_META_CURRENCY_ID = 484;
export const CONQUEST_ASHRAN_META_CURRENCY_ID = 692;
export const ACCOUNT_WIDE_HONOR_CURRENCY_ID = 1585;
export const ACCOUNT_WIDE_HONOR_LEVEL_CURRENCY_ID = 1586;
export const CONQUEST_CURRENCY_ID = 1602;
export const HONOR_CURRENCY_ID = 1792;
export const ARTIFACT_KNOWLEDGE_CURRENCY_ID = 1171;
export const WAR_RESOURCES_CURRENCY_ID = 1560;
export const ECHOES_OF_NYALOTHA_CURRENCY_ID = 1803;
export const QUESTIONMARK_INV_ICON = 134400;
export const CURRENCY_ID_RENOWN = 1822;
export const CURRENCY_ID_RENOWN_KYRIAN = 1829;
export const CURRENCY_ID_RENOWN_VENTHYR = 1830;
export const CURRENCY_ID_RENOWN_NIGHT_FAE = 1831;
export const CURRENCY_ID_RENOWN_NECROLORD = 1832;
export const CURRENCY_ID_WILLING_SOUL = 1810;
export const CURRENCY_ID_RESERVOIR_ANIMA = 1813;
export const enum Damageclass {
    Physical = 0,
    Holy = 1,
    Fire = 2,
    Nature = 3,
    Frost = 4,
    Shadow = 5,
    Arcane = 6,
    FirstResist = 2,
    LastResist = 6,
    MaskPhysical = 1,
    MaskHoly = 2,
    MaskFire = 4,
    MaskNature = 8,
    MaskFrost = 16,
    MaskShadow = 32,
    MaskArcane = 64,
    AllPhysical = 1,
    AllMagical = 126,
    All = 127,
    MaskFlamestrike = 5,
    MaskFroststrike = 17,
    MaskSpellstrike = 65,
    MaskShadowstrike = 33,
    MaskStormstrike = 9,
    MaskHolystrike = 3,
    MaskFrostfire = 20,
    MaskSpellfire = 68,
    MaskFirestorm = 12,
    MaskShadowflame = 36,
    MaskHolyfire = 6,
    MaskSpellfrost = 80,
    MaskFroststorm = 24,
    MaskShadowfrost = 48,
    MaskHolyfrost = 18,
    MaskSpellstorm = 72,
    MaskSpellshadow = 96,
    MaskDivine = 66,
    MaskShadowstorm = 40,
    MaskHolystorm = 10,
    MaskTwilight = 34,
    MaskElemental = 28,
    MaskChromatic = 62,
    MaskMagical = 126,
    MaskChaos = 124,
}
export const enum DamageclassType {
    Physical = 0,
    Magical = 1,
}
export const enum EnvironmentalDamageFlags {
    OneTime = 1,
    DmgIsPct = 2,
}
export const enum Environmentaldamagetype {
    Fatigue = 0,
    Drowning = 1,
    Falling = 2,
    Lava = 3,
    Slime = 4,
    Fire = 5,
}
export const enum CovenantType {
    None = 0,
    Kyrian = 1,
    Venthyr = 2,
    NightFae = 3,
    Necrolord = 4,
}
export const enum FollowerAbilityCastResult {
    Success = 0,
    Failure = 1,
    NoPendingCast = 2,
    InvalidTarget = 3,
    InvalidFollowerSpell = 4,
    RerollNotAllowed = 5,
    SingleMissionDuration = 6,
    MustTargetFollower = 7,
    MustTargetTrait = 8,
    InvalidFollowerType = 9,
    MustBeUnique = 10,
    CannotTargetLimitedUseFollower = 11,
    MustTargetLimitedUseFollower = 12,
    AlreadyAtMaxDurability = 13,
    CannotTargetNonAutoMissionFollower = 14,
}
export const enum GarrAutoBoardIndex {
    None = -1,
    AllyLeftBack = 0,
    AllyRightBack = 1,
    AllyLeftFront = 2,
    AllyCenterFront = 3,
    AllyRightFront = 4,
    EnemyLeftFront = 5,
    EnemyCenterLeftFront = 6,
    EnemyCenterRightFront = 7,
    EnemyRightFront = 8,
    EnemyLeftBack = 9,
    EnemyCenterLeftBack = 10,
    EnemyCenterRightBack = 11,
    EnemyRightBack = 12,
}
export const enum GarrAutoCombatSpellTutorialFlag {
    None = 0,
    Single = 1,
    Column = 2,
    Row = 3,
    All = 4,
}
export const enum GarrAutoCombatTutorial {
    SelectMission = 1,
    PlaceCompanion = 2,
    HealCompanion = 4,
    LevelHeal = 8,
    BeneficialEffect = 16,
    AttackSingle = 32,
    AttackColumn = 64,
    AttackRow = 128,
    AttackAll = 256,
    TroopTutorial = 512,
    EnvironmentalEffect = 1024,
}
export const enum GarrAutoCombatantRole {
    None = 0,
    Melee = 1,
    RangedPhysical = 2,
    RangedMagic = 3,
    HealSupport = 4,
    Tank = 5,
}
export const enum GarrAutoEventFlags {
    None = 0,
    AutoAttack = 1,
    Passive = 2,
    Environment = 4,
}
export const enum GarrAutoMissionEventType {
    MeleeDamage = 0,
    RangeDamage = 1,
    SpellMeleeDamage = 2,
    SpellRangeDamage = 3,
    Heal = 4,
    PeriodicDamage = 5,
    PeriodicHeal = 6,
    ApplyAura = 7,
    RemoveAura = 8,
    Died = 9,
}
export const enum GarrAutoPreviewTargetType {
    None = 0,
    Damage = 1,
    Heal = 2,
    Buff = 4,
    Debuff = 8,
}
export const enum GarrFollowerMissionCompleteState {
    Alive = 0,
    KilledByMissionFailure = 1,
    SavedByPreventDeath = 2,
    OutOfDurability = 3,
}
export const enum GarrFollowerQuality {
    Common = 1,
    Uncommon = 2,
    Rare = 3,
    Epic = 4,
    Legendary = 5,
    Title = 6,
}
export const enum GarrTalentCostType {
    Initial = 0,
    Respec = 1,
    MakePermanent = 2,
    TreeReset = 3,
}
export const enum GarrTalentFeatureSubtype {
    Generic = 0,
    Bastion = 1,
    Revendreth = 2,
    Ardenweald = 3,
    Maldraxxus = 4,
}
export const enum GarrTalentFeatureType {
    Generic = 0,
    AnimaDiversion = 1,
    TravelPortals = 2,
    Adventures = 3,
    ReservoirUpgrades = 4,
    SanctumUnique = 5,
    SoulBinds = 6,
    AnimaDiversionMap = 7,
}
export const enum GarrTalentResearchCostSource {
    Talent = 0,
    Tree = 1,
}
export const enum GarrTalentSocketType {
    None = 0,
    Spell = 1,
    Conduit = 2,
}
export const enum GarrTalentTreeType {
    Tiers = 0,
    Classic = 1,
}
export const enum GarrTalentType {
    Standard = 0,
    Minor = 1,
    Major = 2,
    Socket = 3,
}
export const enum GarrTalentUI {
    Generic = 0,
    CovenantSanctum = 1,
    SoulBinds = 2,
    AnimaDiversionMap = 3,
}
export const enum GarrisonFollowerType {
    FollowerType_6_0 = 1,
    FollowerType_6_2 = 2,
    FollowerType_7_0 = 4,
    FollowerType_8_0 = 22,
    FollowerType_9_0 = 123,
}
export const enum GarrisonTalentAvailability {
    Available = 0,
    Unavailable = 1,
    UnavailableAnotherIsResearching = 2,
    UnavailableNotEnoughResources = 3,
    UnavailableNotEnoughGold = 4,
    UnavailableTierUnavailable = 5,
    UnavailablePlayerCondition = 6,
    UnavailableAlreadyHave = 7,
    UnavailableRequiresPrerequisiteTalent = 8,
}
export const enum GarrisonType {
    Type_6_0 = 2,
    Type_7_0 = 3,
    Type_8_0 = 9,
    Type_9_0 = 111,
}
export const GARRISON_AUTO_COMBATANT_FULL_HEAL_COST = 100;
export interface GarrisonAbilityEffect {
    name: string;
    description: string;
    icon: number;
    factor: number;
}
export interface GarrisonFollowerAbilityInfo {
    id: number;
    name: string;
    description: string;
    icon: number;
    isTrait: boolean;
    isSpecialization: boolean;
    temporary: boolean;
    category: string | undefined;
    counters: LuaArray<GarrisonAbilityEffect>;
    isEmptySlot: boolean;
}
export interface GarrisonTalentCurrencyCostInfo {
    currencyType: number;
    currencyQuantity: number;
}
export interface GarrisonTalentInfo {
    id: number;
    ability: GarrisonFollowerAbilityInfo;
    name: string;
    icon: number;
    tier: number;
    uiOrder: number;
    type: number;
    prerequisiteTalentID: number | undefined;
    selected: boolean;
    researched: boolean;
    researchDuration: number;
    startTime: number;
    timeRemaining: number;
    researchGoldCost: number;
    researchCurrencyCosts: LuaArray<GarrisonTalentCurrencyCostInfo>;
    talentAvailability: GarrisonTalentAvailability;
    talentRank: number;
    talentMaxRank: number;
    isBeingResearched: boolean;
    description: string;
    perkSpellID: number;
    researchDescription: string | undefined;
    playerConditionReason: string | undefined;
    socketInfo: GarrisonTalentSocketInfo;
}
export interface GarrisonTalentSocketInfo {
    socketType: number;
    socketSubtype: number;
    misc0: number;
    misc1: number;
}
export const enum InventoryType {
    IndexNonEquipType = 0,
    IndexHeadType = 1,
    IndexNeckType = 2,
    IndexShoulderType = 3,
    IndexBodyType = 4,
    IndexChestType = 5,
    IndexWaistType = 6,
    IndexLegsType = 7,
    IndexFeetType = 8,
    IndexWristType = 9,
    IndexHandType = 10,
    IndexFingerType = 11,
    IndexTrinketType = 12,
    IndexWeaponType = 13,
    IndexShieldType = 14,
    IndexRangedType = 15,
    IndexCloakType = 16,
    Index2HweaponType = 17,
    IndexBagType = 18,
    IndexTabardType = 19,
    IndexRobeType = 20,
    IndexWeaponmainhandType = 21,
    IndexWeaponoffhandType = 22,
    IndexHoldableType = 23,
    IndexAmmoType = 24,
    IndexThrownType = 25,
    IndexRangedrightType = 26,
    IndexQuiverType = 27,
    IndexRelicType = 28,
}
export const enum ItemQuality {
    Poor = 0,
    Common = 1,
    Uncommon = 2,
    Rare = 3,
    Epic = 4,
    Legendary = 5,
    Artifact = 6,
    Heirloom = 7,
    WoWToken = 8,
}
export const enum RuneforgePowerState {
    Available = 0,
    Unavailable = 1,
    Invalid = 2,
}
export const MIN_RES_SICKNESS_LEVEL = 10;
export const enum PlayerMentorshipApplicationResult {
    Success = 0,
    AlreadyMentor = 1,
    Ineligible = 2,
}
export const enum PlayerMentorshipStatus {
    None = 0,
    Newcomer = 1,
    Mentor = 2,
}
export const enum QuestTagType {
    Tag = 0,
    Profession = 1,
    Normal = 2,
    PvP = 3,
    PetBattle = 4,
    Bounty = 5,
    Dungeon = 6,
    Invasion = 7,
    Raid = 8,
    Contribution = 9,
    RatedReward = 10,
    InvasionWrapper = 11,
    FactionAssault = 12,
    Islands = 13,
    Threat = 14,
    CovenantCalling = 15,
}
export const enum RelativeContentDifficulty {
    Trivial = 0,
    Easy = 1,
    Fair = 2,
    Difficult = 3,
    Impossible = 4,
}
export const MAX_QUEST_WATCHES = 25;
export const MAX_WORLD_QUEST_WATCHES_AUTOMATIC = 1;
export const MAX_WORLD_QUEST_WATCHES_MANUAL = 5;
export const enum QuestSessionCommand {
    None = 0,
    Start = 1,
    Stop = 2,
    SessionActiveNoCommand = 3,
}
export const enum QuestSessionResult {
    Ok = 0,
    NotInParty = 1,
    InvalidOwner = 2,
    AlreadyActive = 3,
    NotActive = 4,
    InRaid = 5,
    OwnerRefused = 6,
    Timeout = 7,
    Disabled = 8,
    Started = 9,
    Stopped = 10,
    Joined = 11,
    Left = 12,
    OwnerLeft = 13,
    ReadyCheckFailed = 14,
    PartyDestroyed = 15,
    MemberTimeout = 16,
    AlreadyMember = 17,
    NotOwner = 18,
    AlreadyOwner = 19,
    AlreadyJoined = 20,
    NotMember = 21,
    Busy = 22,
    JoinRejected = 23,
    Logout = 24,
    Empty = 25,
    QuestNotCompleted = 26,
    Resync = 27,
    Restricted = 28,
    InPetBattle = 29,
    InvalidPublicParty = 30,
    Unknown = 31,
    InCombat = 32,
}
export const enum RafLinkType {
    None = 0,
    Recruit = 1,
    Friend = 2,
    Both = 3,
}
export const enum SuperTrackingType {
    Quest = 0,
    UserWaypoint = 1,
    Corpse = 2,
    Scenario = 3,
}
export const enum UIWidgetLayoutDirection {
    Default = 0,
    Vertical = 1,
    Horizontal = 2,
    Overlap = 3,
    HorizontalForceNewRow = 4,
}
export const enum UIWidgetScale {
    OneHundred = 0,
    Ninty = 1,
    Eighty = 2,
    Seventy = 3,
    Sixty = 4,
    Fifty = 5,
}
export const enum UIWidgetSetLayoutDirection {
    Vertical = 0,
    Horizontal = 1,
}
export const enum UIWidgetVisualizationType {
    IconAndText = 0,
    CaptureBar = 1,
    StatusBar = 2,
    DoubleStatusBar = 3,
    IconTextAndBackground = 4,
    DoubleIconAndText = 5,
    StackedResourceTracker = 6,
    IconTextAndCurrencies = 7,
    TextWithState = 8,
    HorizontalCurrencies = 9,
    BulletTextList = 10,
    ScenarioHeaderCurrenciesAndBackground = 11,
    TextureAndText = 12,
    SpellDisplay = 13,
    DoubleStateIconRow = 14,
    TextureAndTextRow = 15,
    ZoneControl = 16,
    CaptureZone = 17,
    TextureWithAnimation = 18,
    DiscreteProgressSteps = 19,
    ScenarioHeaderTimer = 20,
}
