import { UIFrame } from "../ui";

export const C_CompactUnitFrames = {};
export type CompactUnitFrameProfilesLoadedEvent = (
    frame: UIFrame,
    e: "COMPACT_UNIT_FRAME_PROFILES_LOADED"
) => void;
