import { UIFrame } from "../ui";

export const C_Sound = {};
export type SoundDeviceUpdateEvent = (
    frame: UIFrame,
    e: "SOUND_DEVICE_UPDATE"
) => void;
export type SoundkitFinishedEvent = (
    frame: UIFrame,
    e: "SOUNDKIT_FINISHED",
    soundHandle: number
) => void;
