import { UIFrame } from "../ui";
export const enum UIFrameType {
    JailersTowerBuffs = 0,
}
export const C_FrameManager = {
    GetFrameVisibilityState: (frameType: UIFrameType): boolean => {
        return false;
    },
};
export type FrameManagerUpdateAllEvent = (
    frame: UIFrame,
    e: "FRAME_MANAGER_UPDATE_ALL"
) => void;
export type FrameManagerUpdateFrameEvent = (
    frame: UIFrame,
    e: "FRAME_MANAGER_UPDATE_FRAME",
    type: UIFrameType,
    show: boolean
) => void;
