import { SoulbindConduitType, SoulbindNodeState, SoulbindConduitTransactionType } from '../mixins';
import { UIFrame } from "../ui";
export interface ConduitCollectionData {
    conduitID: number;
    conduitRank: number;
    conduitItemLevel: number;
    conduitType: SoulbindConduitType;
    conduitSpecSetID: number;
    conduitSpecIDs: any;
    conduitSpecName: string | undefined;
    covenantID: number | undefined;
    conduitItemID: number
}
export interface SoulbindConduitData {
    conduitID: number;
    conduitRank: number
}
export interface SoulbindData {
    ID: number;
    covenantID: number;
    name: string;
    description: string;
    textureKit: string;
    unlocked: boolean;
    cvarIndex: number;
    tree: SoulbindTree;
    modelSceneData: SoulbindModelSceneData;
    activationSoundKitID: number
}
export interface SoulbindModelSceneData {
    creatureDisplayInfoID: number;
    modelSceneActorID: number
}
export interface SoulbindNode {
    ID: number;
    row: number;
    column: number;
    icon: number;
    spellID: number;
    playerConditionReason: string | undefined;
    conduitID: number;
    conduitRank: number;
    state: SoulbindNodeState;
    conduitType: SoulbindConduitType | undefined;
    parentNodeIDs: any
}
export interface SoulbindTree {
    editable: boolean;
    nodes: any
}
export const C_Soulbinds = {
    ActivateSoulbind: (soulbindID: number): void => {},
    CanActivateSoulbind: (soulbindID: number): [result: boolean, errorDescription: string | undefined] => {return [false, '']},
    CanModifySoulbind: (): boolean => {return false},
    CanResetConduitsInSoulbind: (soulbindID: number): [result: boolean, errorDescription: string | undefined] => {return [false, '']},
    CanSwitchActiveSoulbindTreeBranch: (): boolean => {return false},
    CloseUI: (): void => {},
    CommitPendingConduitsInSoulbind: (soulbindID: number): void => {},
    FindNodeIDActuallyInstalled: (soulbindID: number, conduitID: number): number => {return 0},
    FindNodeIDAppearingInstalled: (soulbindID: number, conduitID: number): number => {return 0},
    FindNodeIDPendingInstall: (soulbindID: number, conduitID: number): number => {return 0},
    FindNodeIDPendingUninstall: (soulbindID: number, conduitID: number): number => {return 0},
    GetActiveSoulbindID: (): number => {return 0},
    GetConduitCharges: (): number => {return 0},
    GetConduitChargesCapacity: (): number => {return 0},
    GetConduitCollection: (conduitType: SoulbindConduitType): any => {return {} as any},
    GetConduitCollectionCount: (): number => {return 0},
    GetConduitCollectionData: (conduitID: number): ConduitCollectionData | undefined => {return {conduitID: 0, conduitRank: 0, conduitItemLevel: 0, conduitType: {} as any, conduitSpecSetID: 0, conduitSpecIDs: {} as any, conduitSpecName: '', covenantID: 0, conduitItemID: 0}},
    GetConduitCollectionDataAtCursor: (): ConduitCollectionData | undefined => {return {conduitID: 0, conduitRank: 0, conduitItemLevel: 0, conduitType: {} as any, conduitSpecSetID: 0, conduitSpecIDs: {} as any, conduitSpecName: '', covenantID: 0, conduitItemID: 0}},
    GetConduitCollectionDataByVirtualID: (virtualID: number): ConduitCollectionData | undefined => {return {conduitID: 0, conduitRank: 0, conduitItemLevel: 0, conduitType: {} as any, conduitSpecSetID: 0, conduitSpecIDs: {} as any, conduitSpecName: '', covenantID: 0, conduitItemID: 0}},
    GetConduitDisplayed: (nodeID: number): number => {return 0},
    GetConduitHyperlink: (conduitID: number, rank: number): string => {return ''},
    GetConduitIDPendingInstall: (nodeID: number): number => {return 0},
    GetConduitItemLevel: (conduitID: number, rank: number): number => {return 0},
    GetConduitQuality: (conduitID: number, rank: number): number => {return 0},
    GetConduitRankFromCollection: (conduitID: number): number => {return 0},
    GetConduitSpellID: (conduitID: number, conduitRank: number): number => {return 0},
    GetInstalledConduitID: (nodeID: number): number => {return 0},
    GetNode: (nodeID: number): SoulbindNode => {return {ID: 0, row: 0, column: 0, icon: 0, spellID: 0, playerConditionReason: '', conduitID: 0, conduitRank: 0, state: {} as any, conduitType: {} as any, parentNodeIDs: {} as any}},
    GetSoulbindData: (soulbindID: number): SoulbindData => {return {ID: 0, covenantID: 0, name: '', description: '', textureKit: '', unlocked: false, cvarIndex: 0, tree: {editable: false, nodes: {} as any}, modelSceneData: {creatureDisplayInfoID: 0, modelSceneActorID: 0}, activationSoundKitID: 0}},
    GetTotalConduitChargesPending: (): number => {return 0},
    GetTotalConduitChargesPendingInSoulbind: (soulbindID: number): number => {return 0},
    GetTree: (treeID: number): SoulbindTree => {return {editable: false, nodes: {} as any}},
    HasAnyInstalledConduitInSoulbind: (soulbindID: number): boolean => {return false},
    HasAnyPendingConduits: (): boolean => {return false},
    HasPendingConduitsInSoulbind: (soulbindID: number): boolean => {return false},
    IsConduitInstalled: (nodeID: number): boolean => {return false},
    IsConduitInstalledInSoulbind: (soulbindID: number, conduitID: number): boolean => {return false},
    IsItemConduitByItemInfo: (itemInfo: string): boolean => {return false},
    IsNodePendingModify: (nodeID: number): boolean => {return false},
    IsUnselectedConduitPendingInSoulbind: (soulbindID: number): boolean => {return false},
    ModifyNode: (nodeID: number, conduitID: number, type: SoulbindConduitTransactionType): void => {},
    SelectNode: (nodeID: number): void => {},
    UnmodifyNode: (nodeID: number): void => {},
};
export type SoulbindActivatedEvent = (frame: UIFrame, e: "SOULBIND_ACTIVATED", soulbindID: number) => void
export type SoulbindConduitChargesUpdatedEvent = (frame: UIFrame, e: "SOULBIND_CONDUIT_CHARGES_UPDATED", charges: number) => void
export type SoulbindConduitCollectionClearedEvent = (frame: UIFrame, e: "SOULBIND_CONDUIT_COLLECTION_CLEARED") => void
export type SoulbindConduitCollectionRemovedEvent = (frame: UIFrame, e: "SOULBIND_CONDUIT_COLLECTION_REMOVED", conduitID: number) => void
export type SoulbindConduitCollectionUpdatedEvent = (frame: UIFrame, e: "SOULBIND_CONDUIT_COLLECTION_UPDATED", collectionData: ConduitCollectionData) => void
export type SoulbindConduitInstalledEvent = (frame: UIFrame, e: "SOULBIND_CONDUIT_INSTALLED", nodeID: number, data: SoulbindConduitData) => void
export type SoulbindConduitUninstalledEvent = (frame: UIFrame, e: "SOULBIND_CONDUIT_UNINSTALLED", nodeID: number, data: SoulbindConduitData) => void
export type SoulbindForgeInteractionEndedEvent = (frame: UIFrame, e: "SOULBIND_FORGE_INTERACTION_ENDED") => void
export type SoulbindForgeInteractionStartedEvent = (frame: UIFrame, e: "SOULBIND_FORGE_INTERACTION_STARTED") => void
export type SoulbindNodeLearnedEvent = (frame: UIFrame, e: "SOULBIND_NODE_LEARNED", nodeID: number) => void
export type SoulbindNodeUnlearnedEvent = (frame: UIFrame, e: "SOULBIND_NODE_UNLEARNED", nodeID: number) => void
export type SoulbindNodeUpdatedEvent = (frame: UIFrame, e: "SOULBIND_NODE_UPDATED", nodeID: number) => void
export type SoulbindPathChangedEvent = (frame: UIFrame, e: "SOULBIND_PATH_CHANGED") => void
export type SoulbindPendingConduitChangedEvent = (frame: UIFrame, e: "SOULBIND_PENDING_CONDUIT_CHANGED", nodeID: number, conduitID: number) => void