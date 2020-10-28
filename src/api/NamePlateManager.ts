import { UIFrame } from "../ui";

export const C_NamePlateManager = {

};
export type ForbiddenNamePlateCreatedEvent = (frame: UIFrame, e: "FORBIDDEN_NAME_PLATE_CREATED", namePlateFrame: any) => void
export type ForbiddenNamePlateUnitAddedEvent = (frame: UIFrame, e: "FORBIDDEN_NAME_PLATE_UNIT_ADDED", unitToken: string) => void
export type ForbiddenNamePlateUnitRemovedEvent = (frame: UIFrame, e: "FORBIDDEN_NAME_PLATE_UNIT_REMOVED", unitToken: string) => void
export type NamePlateCreatedEvent = (frame: UIFrame, e: "NAME_PLATE_CREATED", namePlateFrame: any) => void
export type NamePlateUnitAddedEvent = (frame: UIFrame, e: "NAME_PLATE_UNIT_ADDED", unitToken: string) => void
export type NamePlateUnitRemovedEvent = (frame: UIFrame, e: "NAME_PLATE_UNIT_REMOVED", unitToken: string) => void