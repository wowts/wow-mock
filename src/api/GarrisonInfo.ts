import {
    GarrisonTalentInfo,
    GarrisonTalentAvailability,
    GarrisonTalentCurrencyCostInfo,
} from "./common";
import { Vector2DMixin, GarrisonTalentTreeInfo } from "../mixins";
import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export interface AutoCombatDamageClassString {
    damageClassValue: number;
    locString: string;
}
export interface AutoCombatResult {
    winner: boolean;
    combatLog: LuaArray<AutoMissionRound>;
}
export interface AutoCombatSpellInfo {
    autoCombatSpellID: number;
    name: string;
    description: string;
    cooldown: number;
    duration: number;
    schoolMask: number;
    previewMask: number;
    icon: number;
    spellTutorialFlag: number;
    hasThornsEffect: boolean;
}
export interface AutoCombatTroopInfo {
    name: string;
    followerID: string;
    garrFollowerID: string;
    followerTypeID: number;
    displayIDs: LuaArray<FollowerDisplayID>;
    level: number;
    quality: number;
    levelXP: number;
    maxXP: number;
    height: number;
    scale: number;
    displayScale: number | undefined;
    displayHeight: number | undefined;
    classSpec: number | undefined;
    className: string | undefined;
    flavorText: string | undefined;
    classAtlas: string;
    portraitIconID: number;
    textureKit: string;
    isTroop: boolean;
    raceID: number;
    health: number;
    maxHealth: number;
    role: number;
    isAutoTroop: boolean;
    isSoulbind: boolean;
    isCollected: boolean;
    autoCombatStats: FollowerAutoCombatStatsInfo;
}
export interface AutoMissionCombatEventInfo {
    boardIndex: number;
    oldHealth: number;
    newHealth: number;
    maxHealth: number;
    points: number | undefined;
}
export interface AutoMissionEnvironmentEffect {
    name: string;
    autoCombatSpellInfo: AutoCombatSpellInfo;
}
export interface AutoMissionEvent {
    type: number;
    spellID: number;
    schoolMask: number;
    effectIndex: number;
    casterBoardIndex: number;
    auraType: number;
    targetInfo: LuaArray<AutoMissionCombatEventInfo>;
}
export interface AutoMissionRound {
    events: LuaArray<AutoMissionEvent>;
}
export interface AutoMissionTargetingInfo {
    targetIndex: number;
    previewType: number;
    spellID: number;
    effectIndex: number;
}
export interface FollowerAutoCombatStatsInfo {
    currentHealth: number;
    maxHealth: number;
    attack: number;
    healingTimestamp: number;
    healCost: number;
    minutesHealingRemaining: number;
}
export interface FollowerDisplayID {
    id: number;
    followerPageScale: number;
    showWeapon: boolean;
}
export interface FollowerMissionCompleteInfo {
    name: string;
    displayIDs: LuaArray<FollowerDisplayID>;
    level: number;
    quality: number;
    currentXP: number;
    maxXP: number;
    height: number;
    scale: number;
    movementType: number | undefined;
    impactDelay: number | undefined;
    castID: number | undefined;
    castSoundID: number | undefined;
    impactID: number | undefined;
    impactSoundID: number | undefined;
    targetImpactID: number | undefined;
    targetImpactSoundID: number | undefined;
    className: string | undefined;
    classAtlas: string;
    portraitIconID: number;
    textureKit: string;
    isTroop: boolean;
    boardIndex: number;
    health: number;
    maxHealth: number;
    role: number;
}
export interface GarrisonAbilityCounterInfo {
    id: number;
    icon: number;
    name: string;
    factor: number;
    description: string;
}
export interface GarrisonAbilityInfo {
    id: number;
    name: string;
    description: string;
    icon: number;
    isTrait: boolean;
    isSpecialization: boolean;
    temporary: boolean;
    category: string | undefined;
    counters: LuaArray<GarrisonAbilityCounterInfo>;
    isEmptySlot: boolean;
}
export interface GarrisonEnemyEncounterInfo {
    name: string;
    displayID: number;
    portraitFileDataID: number;
    textureKit: string;
    scale: number;
    height: number;
    mechanics: LuaArray<GarrisonMechanicInfo>;
    autoCombatSpells: LuaArray<AutoCombatSpellInfo>;
    autoCombatAutoAttack: AutoCombatSpellInfo | undefined;
    role: number;
    health: number;
    maxHealth: number;
    attack: number;
    boardIndex: number;
    isElite: boolean;
}
export interface GarrisonFollowerDeathInfo {
    followerID: string;
    state: number;
}
export interface GarrisonMechanicInfo {
    mechanicTypeID: number;
    icon: number;
    name: string;
    factor: number;
    description: string;
    ability: GarrisonAbilityInfo | undefined;
}
export interface GarrisonPlotInstanceMapInfo {
    buildingPlotInstanceID: number;
    position: Vector2DMixin;
    name: string;
    atlasName: string;
}
export interface MissionDeploymentInfo {
    location: string;
    xp: number;
    environment: string | undefined;
    environmentDesc: string | undefined;
    environmentTexture: number;
    locTextureKit: string;
    isExhausting: boolean;
    enemies: LuaArray<GarrisonEnemyEncounterInfo>;
}
export interface MissionEncounterIconInfo {
    portraitFileDataID: number;
    missionScalar: number;
    isElite: boolean;
    isRare: boolean;
}
export const C_Garrison = {
    AddFollowerToMission: (
        missionID: number,
        followerID: string,
        boardIndex: number | undefined
    ): boolean => {
        return false;
    },
    GetAutoCombatDamageClassValues:
        (): LuaArray<AutoCombatDamageClassString> => {
            return {} as any;
        },
    GetAutoMissionBoardState: (
        missionID: number
    ): LuaArray<AutoMissionTargetingInfo> => {
        return {} as any;
    },
    GetAutoMissionEnvironmentEffect: (
        missionID: number
    ): AutoMissionEnvironmentEffect | undefined => {
        return {
            name: "",
            autoCombatSpellInfo: {
                autoCombatSpellID: 0,
                name: "",
                description: "",
                cooldown: 0,
                duration: 0,
                schoolMask: 0,
                previewMask: 0,
                icon: 0,
                spellTutorialFlag: 0,
                hasThornsEffect: false,
            },
        };
    },
    GetAutoMissionTargetingInfo: (
        missionID: number,
        followerID: string,
        casterBoardIndex: number
    ): LuaArray<AutoMissionTargetingInfo> => {
        return {} as any;
    },
    GetAutoMissionTargetingInfoForSpell: (
        missionID: number,
        autoCombatSpellID: number,
        casterBoardIndex: number
    ): LuaArray<AutoMissionTargetingInfo> => {
        return {} as any;
    },
    GetAutoTroops: (followerType: number): LuaArray<AutoCombatTroopInfo> => {
        return {} as any;
    },
    GetCombatLogSpellInfo: (
        autoCombatSpellID: number
    ): AutoCombatSpellInfo | undefined => {
        return {
            autoCombatSpellID: 0,
            name: "",
            description: "",
            cooldown: 0,
            duration: 0,
            schoolMask: 0,
            previewMask: 0,
            icon: 0,
            spellTutorialFlag: 0,
            hasThornsEffect: false,
        };
    },
    GetCurrentGarrTalentTreeFriendshipFactionID: (): number | undefined => {
        return 0;
    },
    GetCurrentGarrTalentTreeID: (): number | undefined => {
        return 0;
    },
    GetFollowerAutoCombatSpells: (
        garrFollowerID: string,
        followerLevel: number
    ): [
        autoCombatSpells: LuaArray<AutoCombatSpellInfo>,
        autoCombatAutoAttack: AutoCombatSpellInfo | undefined
    ] => {
        return [
            {} as any,
            {
                autoCombatSpellID: 0,
                name: "",
                description: "",
                cooldown: 0,
                duration: 0,
                schoolMask: 0,
                previewMask: 0,
                icon: 0,
                spellTutorialFlag: 0,
                hasThornsEffect: false,
            },
        ];
    },
    GetFollowerAutoCombatStats: (
        garrFollowerID: string
    ): FollowerAutoCombatStatsInfo | undefined => {
        return {
            currentHealth: 0,
            maxHealth: 0,
            attack: 0,
            healingTimestamp: 0,
            healCost: 0,
            minutesHealingRemaining: 0,
        };
    },
    GetFollowerMissionCompleteInfo: (
        followerID: string
    ): FollowerMissionCompleteInfo => {
        return {
            name: "",
            displayIDs: {} as any,
            level: 0,
            quality: 0,
            currentXP: 0,
            maxXP: 0,
            height: 0,
            scale: 0,
            movementType: 0,
            impactDelay: 0,
            castID: 0,
            castSoundID: 0,
            impactID: 0,
            impactSoundID: 0,
            targetImpactID: 0,
            targetImpactSoundID: 0,
            className: "",
            classAtlas: "",
            portraitIconID: 0,
            textureKit: "",
            isTroop: false,
            boardIndex: 0,
            health: 0,
            maxHealth: 0,
            role: 0,
        };
    },
    GetGarrisonPlotsInstancesForMap: (
        uiMapID: number
    ): LuaArray<GarrisonPlotInstanceMapInfo> => {
        return {} as any;
    },
    GetGarrisonTalentTreeCurrencyTypes: (
        garrTalentTreeID: number
    ): number | undefined => {
        return 0;
    },
    GetGarrisonTalentTreeType: (garrTalentTreeID: number): number => {
        return 0;
    },
    GetMissionCompleteEncounters: (
        missionID: number
    ): LuaArray<GarrisonEnemyEncounterInfo> => {
        return {} as any;
    },
    GetMissionDeploymentInfo: (missionID: number): MissionDeploymentInfo => {
        return {
            location: "",
            xp: 0,
            environment: "",
            environmentDesc: "",
            environmentTexture: 0,
            locTextureKit: "",
            isExhausting: false,
            enemies: {} as any,
        };
    },
    GetMissionEncounterIconInfo: (
        missionID: number
    ): MissionEncounterIconInfo => {
        return {
            portraitFileDataID: 0,
            missionScalar: 0,
            isElite: false,
            isRare: false,
        };
    },
    GetTalentInfo: (talentID: number): GarrisonTalentInfo => {
        return {
            id: 0,
            ability: {
                id: 0,
                name: "",
                description: "",
                icon: 0,
                isTrait: false,
                isSpecialization: false,
                temporary: false,
                category: "",
                counters: {} as any,
                isEmptySlot: false,
            },
            name: "",
            icon: 0,
            tier: 0,
            uiOrder: 0,
            type: 0,
            prerequisiteTalentID: 0,
            selected: false,
            researched: false,
            researchDuration: 0,
            startTime: 0,
            timeRemaining: 0,
            researchGoldCost: 0,
            researchCurrencyCosts: {} as any,
            talentAvailability: GarrisonTalentAvailability.Available,
            talentRank: 0,
            talentMaxRank: 0,
            isBeingResearched: false,
            description: "",
            perkSpellID: 0,
            researchDescription: "",
            playerConditionReason: "",
            socketInfo: { socketType: 0, socketSubtype: 0, misc0: 0, misc1: 0 },
        };
    },
    GetTalentPointsSpentInTalentTree: (garrTalentTreeID: number): number => {
        return 0;
    },
    GetTalentTreeIDsByClassID: (
        garrType: number,
        classID: number
    ): LuaArray<number> => {
        return {} as any;
    },
    GetTalentTreeInfo: (treeID: number): GarrisonTalentTreeInfo => {
        return {} as any;
    },
    GetTalentTreeResetInfo: (
        garrTalentTreeID: number
    ): [
        goldCost: number,
        currencyCosts: LuaArray<GarrisonTalentCurrencyCostInfo>
    ] => {
        return [0, {} as any];
    },
    GetTalentTreeTalentPointResearchInfo: (
        garrTalentTreeID: number,
        talentPointIndex: number,
        isRespec: number
    ): [
        goldCost: number,
        currencyCosts: LuaArray<GarrisonTalentCurrencyCostInfo>,
        durationSecs: number
    ] => {
        return [0, {} as any, 0];
    },
    GetTalentUnlockWorldQuest: (talentID: number): number => {
        return 0;
    },
    HasAdventures: (): boolean => {
        return false;
    },
    IsAtGarrisonMissionNPC: (): boolean => {
        return false;
    },
    IsEnvironmentCountered: (missionID: number): boolean => {
        return false;
    },
    IsFollowerOnCompletedMission: (followerID: string): boolean => {
        return false;
    },
    IsTalentConditionMet: (
        talentID: number
    ): [isMet: boolean, failureString: string | undefined] => {
        return [false, ""];
    },
    RegenerateCombatLog: (missionID: number): boolean => {
        return false;
    },
    RemoveFollowerFromMission: (
        missionID: number,
        followerID: string,
        boardIndex: number | undefined
    ): void => {},
    RushHealAllFollowers: (followerType: number): void => {},
    RushHealFollower: (garrFollowerID: string): void => {},
    SetAutoCombatSpellFastForward: (state: boolean): void => {},
};
export type GarrisonArchitectClosedEvent = (
    frame: UIFrame,
    e: "GARRISON_ARCHITECT_CLOSED"
) => void;
export type GarrisonArchitectOpenedEvent = (
    frame: UIFrame,
    e: "GARRISON_ARCHITECT_OPENED",
    followerTypeID: number
) => void;
export type GarrisonBuildingActivatableEvent = (
    frame: UIFrame,
    e: "GARRISON_BUILDING_ACTIVATABLE",
    buildingName: string,
    garrisonType: number
) => void;
export type GarrisonBuildingActivatedEvent = (
    frame: UIFrame,
    e: "GARRISON_BUILDING_ACTIVATED",
    garrisonPlotInstanceID: number,
    garrisonBuildingID: number
) => void;
export type GarrisonBuildingErrorEvent = (
    frame: UIFrame,
    e: "GARRISON_BUILDING_ERROR"
) => void;
export type GarrisonBuildingListUpdateEvent = (
    frame: UIFrame,
    e: "GARRISON_BUILDING_LIST_UPDATE",
    categoryID: number
) => void;
export type GarrisonBuildingPlacedEvent = (
    frame: UIFrame,
    e: "GARRISON_BUILDING_PLACED",
    garrisonPlotInstanceID: number,
    newPlacement: boolean
) => void;
export type GarrisonBuildingRemovedEvent = (
    frame: UIFrame,
    e: "GARRISON_BUILDING_REMOVED",
    garrPlotInstanceID: number,
    garrBuildingID: number
) => void;
export type GarrisonBuildingUpdateEvent = (
    frame: UIFrame,
    e: "GARRISON_BUILDING_UPDATE",
    garrisonBuildingID: number,
    garrPlotInstanceID: number | undefined
) => void;
export type GarrisonFollowerAddedEvent = (
    frame: UIFrame,
    e: "GARRISON_FOLLOWER_ADDED",
    followerDbID: string,
    followerName: string,
    followerClassName: string,
    followerLevel: number,
    followerQuality: number,
    isUpgraded: boolean,
    textureKit: string,
    followerTypeID: number
) => void;
export type GarrisonFollowerCategoriesUpdatedEvent = (
    frame: UIFrame,
    e: "GARRISON_FOLLOWER_CATEGORIES_UPDATED"
) => void;
export type GarrisonFollowerDurabilityChangedEvent = (
    frame: UIFrame,
    e: "GARRISON_FOLLOWER_DURABILITY_CHANGED",
    garrFollowerTypeID: number,
    followerDbID: string,
    followerDurability: number
) => void;
export type GarrisonFollowerHealedEvent = (
    frame: UIFrame,
    e: "GARRISON_FOLLOWER_HEALED",
    followerID: string
) => void;
export type GarrisonFollowerListUpdateEvent = (
    frame: UIFrame,
    e: "GARRISON_FOLLOWER_LIST_UPDATE",
    followerTypeID: number
) => void;
export type GarrisonFollowerRemovedEvent = (
    frame: UIFrame,
    e: "GARRISON_FOLLOWER_REMOVED",
    followerTypeID: number
) => void;
export type GarrisonFollowerUpgradedEvent = (
    frame: UIFrame,
    e: "GARRISON_FOLLOWER_UPGRADED",
    followerDbID: string
) => void;
export type GarrisonFollowerXpChangedEvent = (
    frame: UIFrame,
    e: "GARRISON_FOLLOWER_XP_CHANGED",
    garrFollowerTypeID: number,
    followerDbID: string,
    xpChange: number,
    oldFollowerXp: number,
    oldFollowerLevel: number,
    oldFollowerQuality: number
) => void;
export type GarrisonHideLandingPageEvent = (
    frame: UIFrame,
    e: "GARRISON_HIDE_LANDING_PAGE"
) => void;
export type GarrisonInvasionAvailableEvent = (
    frame: UIFrame,
    e: "GARRISON_INVASION_AVAILABLE"
) => void;
export type GarrisonInvasionUnavailableEvent = (
    frame: UIFrame,
    e: "GARRISON_INVASION_UNAVAILABLE"
) => void;
export type GarrisonLandingpageShipmentsEvent = (
    frame: UIFrame,
    e: "GARRISON_LANDINGPAGE_SHIPMENTS"
) => void;
export type GarrisonMissionAreaBonusAddedEvent = (
    frame: UIFrame,
    e: "GARRISON_MISSION_AREA_BONUS_ADDED",
    garrisonMissonBonusAbilityID: number
) => void;
export type GarrisonMissionBonusRollCompleteEvent = (
    frame: UIFrame,
    e: "GARRISON_MISSION_BONUS_ROLL_COMPLETE",
    missionID: number,
    success: boolean
) => void;
export type GarrisonMissionCompleteResponseEvent = (
    frame: UIFrame,
    e: "GARRISON_MISSION_COMPLETE_RESPONSE",
    missionID: number,
    canComplete: boolean,
    success: boolean,
    bonusRollSuccess: boolean,
    followerDeaths: LuaArray<GarrisonFollowerDeathInfo>,
    autoCombatResult: AutoCombatResult | undefined
) => void;
export type GarrisonMissionFinishedEvent = (
    frame: UIFrame,
    e: "GARRISON_MISSION_FINISHED",
    followerTypeID: number,
    missionID: number
) => void;
export type GarrisonMissionListUpdateEvent = (
    frame: UIFrame,
    e: "GARRISON_MISSION_LIST_UPDATE",
    garrFollowerTypeID: number
) => void;
export type GarrisonMissionNpcClosedEvent = (
    frame: UIFrame,
    e: "GARRISON_MISSION_NPC_CLOSED"
) => void;
export type GarrisonMissionNpcOpenedEvent = (
    frame: UIFrame,
    e: "GARRISON_MISSION_NPC_OPENED",
    followerTypeID: number
) => void;
export type GarrisonMissionRewardInfoEvent = (
    frame: UIFrame,
    e: "GARRISON_MISSION_REWARD_INFO",
    missionID: number,
    followerDbID: string
) => void;
export type GarrisonMissionStartedEvent = (
    frame: UIFrame,
    e: "GARRISON_MISSION_STARTED",
    garrFollowerTypeID: number,
    missionID: number
) => void;
export type GarrisonMonumentCloseUiEvent = (
    frame: UIFrame,
    e: "GARRISON_MONUMENT_CLOSE_UI"
) => void;
export type GarrisonMonumentListLoadedEvent = (
    frame: UIFrame,
    e: "GARRISON_MONUMENT_LIST_LOADED",
    success: boolean
) => void;
export type GarrisonMonumentReplacedEvent = (
    frame: UIFrame,
    e: "GARRISON_MONUMENT_REPLACED",
    success: boolean
) => void;
export type GarrisonMonumentSelectedTrophyIdLoadedEvent = (
    frame: UIFrame,
    e: "GARRISON_MONUMENT_SELECTED_TROPHY_ID_LOADED",
    success: boolean
) => void;
export type GarrisonMonumentShowUiEvent = (
    frame: UIFrame,
    e: "GARRISON_MONUMENT_SHOW_UI"
) => void;
export type GarrisonRandomMissionAddedEvent = (
    frame: UIFrame,
    e: "GARRISON_RANDOM_MISSION_ADDED",
    followerTypeID: number,
    missionID: number
) => void;
export type GarrisonRecallPortalLastUsedTimeEvent = (
    frame: UIFrame,
    e: "GARRISON_RECALL_PORTAL_LAST_USED_TIME",
    success: boolean,
    recallPortalLastUsedTime: number
) => void;
export type GarrisonRecallPortalUsedEvent = (
    frame: UIFrame,
    e: "GARRISON_RECALL_PORTAL_USED",
    success: boolean
) => void;
export type GarrisonRecruitFollowerResultEvent = (
    frame: UIFrame,
    e: "GARRISON_RECRUIT_FOLLOWER_RESULT"
) => void;
export type GarrisonRecruitmentFollowersGeneratedEvent = (
    frame: UIFrame,
    e: "GARRISON_RECRUITMENT_FOLLOWERS_GENERATED"
) => void;
export type GarrisonRecruitmentNpcClosedEvent = (
    frame: UIFrame,
    e: "GARRISON_RECRUITMENT_NPC_CLOSED"
) => void;
export type GarrisonRecruitmentNpcOpenedEvent = (
    frame: UIFrame,
    e: "GARRISON_RECRUITMENT_NPC_OPENED",
    followerTypeID: number
) => void;
export type GarrisonRecruitmentReadyEvent = (
    frame: UIFrame,
    e: "GARRISON_RECRUITMENT_READY"
) => void;
export type GarrisonShipmentReceivedEvent = (
    frame: UIFrame,
    e: "GARRISON_SHIPMENT_RECEIVED"
) => void;
export type GarrisonShipyardNpcClosedEvent = (
    frame: UIFrame,
    e: "GARRISON_SHIPYARD_NPC_CLOSED"
) => void;
export type GarrisonShipyardNpcOpenedEvent = (
    frame: UIFrame,
    e: "GARRISON_SHIPYARD_NPC_OPENED",
    followerTypeID: number
) => void;
export type GarrisonShowLandingPageEvent = (
    frame: UIFrame,
    e: "GARRISON_SHOW_LANDING_PAGE"
) => void;
export type GarrisonSpecGroupUpdatedEvent = (
    frame: UIFrame,
    e: "GARRISON_SPEC_GROUP_UPDATED",
    garrTypeID: number,
    specID: number
) => void;
export type GarrisonSpecGroupsClearedEvent = (
    frame: UIFrame,
    e: "GARRISON_SPEC_GROUPS_CLEARED",
    garrTypeID: number
) => void;
export type GarrisonTalentCompleteEvent = (
    frame: UIFrame,
    e: "GARRISON_TALENT_COMPLETE",
    garrTypeID: number,
    doAlert: boolean
) => void;
export type GarrisonTalentEventUpdateEvent = (
    frame: UIFrame,
    e: "GARRISON_TALENT_EVENT_UPDATE",
    eventType: number,
    eventID: number
) => void;
export type GarrisonTalentNpcClosedEvent = (
    frame: UIFrame,
    e: "GARRISON_TALENT_NPC_CLOSED"
) => void;
export type GarrisonTalentNpcOpenedEvent = (
    frame: UIFrame,
    e: "GARRISON_TALENT_NPC_OPENED",
    garrisonTypeID: number,
    garrisonTalentTreeID: number
) => void;
export type GarrisonTalentResearchStartedEvent = (
    frame: UIFrame,
    e: "GARRISON_TALENT_RESEARCH_STARTED",
    garrTypeID: number,
    garrisonTalentTreeID: number,
    garrTalentID: number
) => void;
export type GarrisonTalentUnlocksResultEvent = (
    frame: UIFrame,
    e: "GARRISON_TALENT_UNLOCKS_RESULT"
) => void;
export type GarrisonTalentUpdateEvent = (
    frame: UIFrame,
    e: "GARRISON_TALENT_UPDATE",
    garrTypeID: number
) => void;
export type GarrisonTradeskillNpcClosedEvent = (
    frame: UIFrame,
    e: "GARRISON_TRADESKILL_NPC_CLOSED"
) => void;
export type GarrisonUpdateEvent = (
    frame: UIFrame,
    e: "GARRISON_UPDATE"
) => void;
export type GarrisonUpgradeableResultEvent = (
    frame: UIFrame,
    e: "GARRISON_UPGRADEABLE_RESULT",
    garrisonUpgradeable: boolean
) => void;
export type GarrisonUsePartyGarrisonChangedEvent = (
    frame: UIFrame,
    e: "GARRISON_USE_PARTY_GARRISON_CHANGED"
) => void;
export type ShipmentCrafterClosedEvent = (
    frame: UIFrame,
    e: "SHIPMENT_CRAFTER_CLOSED"
) => void;
export type ShipmentCrafterInfoEvent = (
    frame: UIFrame,
    e: "SHIPMENT_CRAFTER_INFO",
    success: number,
    shipmentCount: number,
    maxShipments: number,
    ownedShipments: number,
    plotInstanceID: number
) => void;
export type ShipmentCrafterOpenedEvent = (
    frame: UIFrame,
    e: "SHIPMENT_CRAFTER_OPENED",
    charShipmentContainerID: number
) => void;
export type ShipmentCrafterReagentUpdateEvent = (
    frame: UIFrame,
    e: "SHIPMENT_CRAFTER_REAGENT_UPDATE"
) => void;
export type ShipmentUpdateEvent = (
    frame: UIFrame,
    e: "SHIPMENT_UPDATE",
    shipmentStarted: boolean | undefined,
    hasAttachedFollower: boolean | undefined
) => void;
