import { UIFrame } from "../ui";

export const C_Macro = {

};
export type ExecuteChatLineEvent = (frame: UIFrame, e: "EXECUTE_CHAT_LINE", chatLine: string) => void
export type UpdateMacrosEvent = (frame: UIFrame, e: "UPDATE_MACROS") => void