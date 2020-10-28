import { UIFrame } from "../ui";

export const C_ToyBoxInfo = {
    ClearFanfare: (itemID: number): void => {},
    NeedsFanfare: (itemID: number): boolean => {return false},
};
export type NewToyAddedEvent = (frame: UIFrame, e: "NEW_TOY_ADDED", itemID: number) => void
export type ToysUpdatedEvent = (frame: UIFrame, e: "TOYS_UPDATED", itemID: number | undefined, isNew: boolean | undefined, hasFanfare: boolean | undefined) => void