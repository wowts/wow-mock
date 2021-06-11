import { Vector3DMixin } from "../mixins";
import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export const enum ItemTryOnReason {
    Success = 0,
    WrongRace = 1,
    NotEquippable = 2,
    DataPending = 3,
}
export const enum ModelSceneSetting {
    AlignLightToOrbitDelta = 1,
}
export const enum ModelSceneType {
    MountJournal = 0,
    PetJournalCard = 1,
    ShopCard = 2,
    EncounterJournal = 3,
    PetJournalLoadout = 4,
    ArtifactTier2 = 5,
    ArtifactTier2ForgingScene = 6,
    ArtifactTier2SlamEffect = 7,
    CommentatorVictoryFanfare = 8,
    ArtifactRelicTalentEffect = 9,
    PvPWarModeOrb = 10,
    PvPWarModeFire = 11,
    PartyPose = 12,
    AzeriteItemLevelUpToast = 13,
    AzeritePowers = 14,
    AzeriteRewardGlow = 15,
    HeartOfAzeroth = 16,
    WorldMapThreat = 17,
    Soulbinds = 18,
    JailersTowerAnimaGlow = 19,
}
export interface UIModelSceneActorDisplayInfo {
    animation: number;
    animationVariation: number;
    animSpeed: number;
    animationKitID: number | undefined;
    spellVisualKitID: number | undefined;
    alpha: number;
    scale: number;
}
export interface UIModelSceneActorInfo {
    modelActorID: number;
    scriptTag: string;
    position: Vector3DMixin;
    yaw: number;
    pitch: number;
    roll: number;
    normalizeScaleAggressiveness: number | undefined;
    useCenterForOriginX: boolean;
    useCenterForOriginY: boolean;
    useCenterForOriginZ: boolean;
    modelActorDisplayID: number | undefined;
}
export interface UIModelSceneCameraInfo {
    modelSceneCameraID: number;
    scriptTag: string;
    cameraType: string;
    target: Vector3DMixin;
    yaw: number;
    pitch: number;
    roll: number;
    zoomDistance: number;
    minZoomDistance: number;
    maxZoomDistance: number;
    zoomedTargetOffset: Vector3DMixin;
    zoomedYawOffset: number;
    zoomedPitchOffset: number;
    zoomedRollOffset: number;
    flags: ModelSceneSetting;
}
export const C_ModelInfo = {
    AddActiveModelScene: (
        modelSceneFrame: any,
        modelSceneID: number
    ): void => {},
    AddActiveModelSceneActor: (
        modelSceneFrameActor: any,
        modelSceneActorID: number
    ): void => {},
    ClearActiveModelScene: (modelSceneFrame: any): void => {},
    ClearActiveModelSceneActor: (modelSceneFrameActor: any): void => {},
    GetModelSceneActorDisplayInfoByID: (
        modelActorDisplayID: number
    ): UIModelSceneActorDisplayInfo => {
        return {
            animation: 0,
            animationVariation: 0,
            animSpeed: 0,
            animationKitID: 0,
            spellVisualKitID: 0,
            alpha: 0,
            scale: 0,
        };
    },
    GetModelSceneActorInfoByID: (
        modelActorID: number
    ): UIModelSceneActorInfo => {
        return {
            modelActorID: 0,
            scriptTag: "",
            position: {} as any,
            yaw: 0,
            pitch: 0,
            roll: 0,
            normalizeScaleAggressiveness: 0,
            useCenterForOriginX: false,
            useCenterForOriginY: false,
            useCenterForOriginZ: false,
            modelActorDisplayID: 0,
        };
    },
    GetModelSceneCameraInfoByID: (
        modelSceneCameraID: number
    ): UIModelSceneCameraInfo => {
        return {
            modelSceneCameraID: 0,
            scriptTag: "",
            cameraType: "",
            target: {} as any,
            yaw: 0,
            pitch: 0,
            roll: 0,
            zoomDistance: 0,
            minZoomDistance: 0,
            maxZoomDistance: 0,
            zoomedTargetOffset: {} as any,
            zoomedYawOffset: 0,
            zoomedPitchOffset: 0,
            zoomedRollOffset: 0,
            flags: ModelSceneSetting.AlignLightToOrbitDelta,
        };
    },
    GetModelSceneInfoByID: (
        modelSceneID: number
    ): [
        modelSceneType: ModelSceneType,
        modelCameraIDs: LuaArray<number>,
        modelActorsIDs: LuaArray<number>
    ] => {
        return [ModelSceneType.MountJournal, {} as any, {} as any];
    },
};
export type UiModelSceneInfoUpdatedEvent = (
    frame: UIFrame,
    e: "UI_MODEL_SCENE_INFO_UPDATED"
) => void;
