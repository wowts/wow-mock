import { UIFrame } from "../ui";
export const enum NavigationState {
    Invalid = 0,
    Occluded = 1,
    InRange = 2
}
export const C_Navigation = {
    GetDistance: (): number => {return 0},
    GetFrame: (): any | undefined => {return {} as any},
    GetTargetState: (): NavigationState => {return NavigationState.Invalid},
    HasValidScreenPosition: (): boolean => {return false},
    WasClampedToScreen: (): boolean => {return false},
};
export type NavigationFrameCreatedEvent = (frame: UIFrame, e: "NAVIGATION_FRAME_CREATED", region: any) => void
export type NavigationFrameDestroyedEvent = (frame: UIFrame, e: "NAVIGATION_FRAME_DESTROYED") => void