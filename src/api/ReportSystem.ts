import { PlayerLocationMixin } from '../mixins';
import { UIFrame } from "../ui";

export const C_ReportSystem = {
    CanReportPlayer: (playerLocation: PlayerLocationMixin): boolean => {return false},
    CanReportPlayerForLanguage: (playerLocation: PlayerLocationMixin): boolean => {return false},
    InitiateReportPlayer: (complaintType: string, playerLocation: PlayerLocationMixin | undefined): number => {return 0},
    OpenReportPlayerDialog: (reportType: string, playerName: string, playerLocation: PlayerLocationMixin | undefined): void => {},
    ReportServerLag: (): void => {},
    ReportStuckInCombat: (): void => {},
    SendReportPlayer: (token: number, comment: string | undefined): void => {},
    SetPendingReportPetTarget: (target: string | undefined): boolean => {return false},
    SetPendingReportTarget: (target: string | undefined): boolean => {return false},
    SetPendingReportTargetByGuid: (guid: string | undefined): boolean => {return false},
};
export type OpenReportPlayerEvent = (frame: UIFrame, e: "OPEN_REPORT_PLAYER", token: number, reportType: string, playerName: string) => void
export type ReportPlayerResultEvent = (frame: UIFrame, e: "REPORT_PLAYER_RESULT", success: boolean) => void