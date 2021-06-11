import { ItemLocationMixin } from "../mixins";
import { UIFrame } from "../ui";
export const enum UICursorType {
    Default = 0,
    Item = 1,
    Money = 2,
    Spell = 3,
    PetAction = 4,
    Merchant = 5,
    ActionBar = 6,
    Macro = 7,
    AmmoObsolete = 8,
    Pet = 9,
    GuildBank = 10,
    GuildBankMoney = 11,
    EquipmentSet = 12,
    Currency = 13,
    Flyout = 14,
    VoidItem = 15,
    BattlePet = 16,
    Mount = 17,
    Toy = 18,
    CommunitiesStream = 19,
    ConduitCollectionItem = 20,
}
export const C_Cursor = {
    DropCursorCommunitiesStream: (): void => {},
    GetCursorCommunitiesStream: (): [clubId: string, streamId: string] => {
        return ["", ""];
    },
    GetCursorItem: (): ItemLocationMixin => {
        return {} as any;
    },
    SetCursorCommunitiesStream: (clubId: string, streamId: string): void => {},
};
export type BattlePetCursorClearEvent = (
    frame: UIFrame,
    e: "BATTLE_PET_CURSOR_CLEAR"
) => void;
export type CommunitiesStreamCursorClearEvent = (
    frame: UIFrame,
    e: "COMMUNITIES_STREAM_CURSOR_CLEAR"
) => void;
export type CursorChangedEvent = (
    frame: UIFrame,
    e: "CURSOR_CHANGED",
    isDefault: boolean,
    newCursorType: UICursorType,
    oldCursorType: UICursorType,
    oldCursorVirtualID: number
) => void;
export type CursorUpdateEvent = (frame: UIFrame, e: "CURSOR_UPDATE") => void;
export type MountCursorClearEvent = (
    frame: UIFrame,
    e: "MOUNT_CURSOR_CLEAR"
) => void;
