import { UIFrame } from "../ui";
export const enum ScriptedAnimationBehavior {
    None = 0,
    TargetShake = 1,
    TargetKnockBack = 2,
    SourceRecoil = 3,
    SourceCollideWithTarget = 4,
    UIParentShake = 5
}
export const enum ScriptedAnimationTrajectory {
    AtSource = 0,
    AtTarget = 1,
    Straight = 2,
    CurveLeft = 3,
    CurveRight = 4,
    CurveRandom = 5,
    HalfwayBetween = 6
}
export interface ScriptedAnimationEffect {
    id: number;
    visual: number;
    visualScale: number;
    duration: number;
    trajectory: ScriptedAnimationTrajectory;
    yawRadians: number;
    pitchRadians: number;
    rollRadians: number;
    offsetX: number;
    offsetY: number;
    offsetZ: number;
    animationSpeed: number;
    startBehavior: ScriptedAnimationBehavior | undefined;
    startSoundKitID: number | undefined;
    finishEffectID: number | undefined;
    finishBehavior: ScriptedAnimationBehavior | undefined;
    finishSoundKitID: number | undefined
}
export const C_ScriptedAnimations = {
    GetAllScriptedAnimationEffects: (): any => {return {} as any},
};
