import { Vector2DMixin } from "../mixins";
import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export interface DigSiteMapInfo {
    researchSiteID: number;
    position: Vector2DMixin;
    name: string;
    textureIndex: number;
}
export const C_ResearchInfo = {
    GetDigSitesForMap: (uiMapID: number): LuaArray<DigSiteMapInfo> => {
        return {} as any;
    },
};
export type ArchaeologyClosedEvent = (
    frame: UIFrame,
    e: "ARCHAEOLOGY_CLOSED"
) => void;
export type ArchaeologyFindCompleteEvent = (
    frame: UIFrame,
    e: "ARCHAEOLOGY_FIND_COMPLETE",
    numFindsCompleted: number,
    totalFinds: number,
    researchBranchID: number
) => void;
export type ArchaeologySurveyCastEvent = (
    frame: UIFrame,
    e: "ARCHAEOLOGY_SURVEY_CAST",
    numFindsCompleted: number,
    totalFinds: number,
    researchBranchID: number,
    successfulFind: number
) => void;
export type ArchaeologyToggleEvent = (
    frame: UIFrame,
    e: "ARCHAEOLOGY_TOGGLE"
) => void;
export type ArtifactDigsiteCompleteEvent = (
    frame: UIFrame,
    e: "ARTIFACT_DIGSITE_COMPLETE",
    researchBranchID: number
) => void;
export type ResearchArtifactCompleteEvent = (
    frame: UIFrame,
    e: "RESEARCH_ARTIFACT_COMPLETE",
    name: string
) => void;
export type ResearchArtifactDigSiteUpdatedEvent = (
    frame: UIFrame,
    e: "RESEARCH_ARTIFACT_DIG_SITE_UPDATED"
) => void;
export type ResearchArtifactHistoryReadyEvent = (
    frame: UIFrame,
    e: "RESEARCH_ARTIFACT_HISTORY_READY"
) => void;
export type ResearchArtifactUpdateEvent = (
    frame: UIFrame,
    e: "RESEARCH_ARTIFACT_UPDATE"
) => void;
