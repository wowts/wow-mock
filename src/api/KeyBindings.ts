import { UIFrame } from "../ui";
export const enum CustomBindingType {
    VoicePushToTalk = 0,
}
export const C_KeyBindings = {
    GetCustomBindingType: (
        bindingIndex: number
    ): CustomBindingType | undefined => {
        return CustomBindingType.VoicePushToTalk;
    },
};
export type ModifierStateChangedEvent = (
    frame: UIFrame,
    e: "MODIFIER_STATE_CHANGED",
    key: string,
    down: number
) => void;
export type UpdateBindingsEvent = (
    frame: UIFrame,
    e: "UPDATE_BINDINGS"
) => void;
