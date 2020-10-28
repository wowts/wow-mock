import { UIFrame } from "../ui";
export interface PartyPoseInfo {
    partyPoseID: number;
    mapID: number;
    widgetSetID: number | undefined;
    victoryModelSceneID: number;
    defeatModelSceneID: number;
    victorySoundKitID: number;
    defeatSoundKitID: number
}
export const C_PartyPose = {
    GetPartyPoseInfoByMapID: (mapID: number): PartyPoseInfo => {return {partyPoseID: 0, mapID: 0, widgetSetID: 0, victoryModelSceneID: 0, defeatModelSceneID: 0, victorySoundKitID: 0, defeatSoundKitID: 0}},
};
