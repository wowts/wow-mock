import { UIFrame } from "../ui";

export const C_Trainer = {

};
export type TrainerClosedEvent = (frame: UIFrame, e: "TRAINER_CLOSED") => void
export type TrainerDescriptionUpdateEvent = (frame: UIFrame, e: "TRAINER_DESCRIPTION_UPDATE") => void
export type TrainerServiceInfoNameUpdateEvent = (frame: UIFrame, e: "TRAINER_SERVICE_INFO_NAME_UPDATE") => void
export type TrainerShowEvent = (frame: UIFrame, e: "TRAINER_SHOW") => void
export type TrainerUpdateEvent = (frame: UIFrame, e: "TRAINER_UPDATE") => void