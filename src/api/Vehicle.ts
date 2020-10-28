import { UIFrame } from "../ui";

export const C_Vehicle = {

};
export type PlayerGainsVehicleDataEvent = (frame: UIFrame, e: "PLAYER_GAINS_VEHICLE_DATA", unitTarget: string, vehicleUIIndicatorID: number) => void
export type PlayerLosesVehicleDataEvent = (frame: UIFrame, e: "PLAYER_LOSES_VEHICLE_DATA", unitTarget: string) => void
export type UnitEnteredVehicleEvent = (frame: UIFrame, e: "UNIT_ENTERED_VEHICLE", unitTarget: string, showVehicleFrame: boolean, isControlSeat: boolean, vehicleUIIndicatorID: number, vehicleGUID: string, mayChooseExit: boolean, hasPitch: boolean) => void
export type UnitEnteringVehicleEvent = (frame: UIFrame, e: "UNIT_ENTERING_VEHICLE", unitTarget: string, showVehicleFrame: boolean, isControlSeat: boolean, vehicleUIIndicatorID: number, vehicleGUID: string, mayChooseExit: boolean, hasPitch: boolean) => void
export type UnitExitedVehicleEvent = (frame: UIFrame, e: "UNIT_EXITED_VEHICLE", unitTarget: string) => void
export type UnitExitingVehicleEvent = (frame: UIFrame, e: "UNIT_EXITING_VEHICLE", unitTarget: string) => void
export type VehicleAngleShowEvent = (frame: UIFrame, e: "VEHICLE_ANGLE_SHOW", shouldShow: number | undefined) => void
export type VehiclePassengersChangedEvent = (frame: UIFrame, e: "VEHICLE_PASSENGERS_CHANGED") => void
export type VehiclePowerShowEvent = (frame: UIFrame, e: "VEHICLE_POWER_SHOW", shouldShow: number | undefined) => void
export type VehicleUpdateEvent = (frame: UIFrame, e: "VEHICLE_UPDATE") => void