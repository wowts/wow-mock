import { CharacterAlternateFormData } from '../mixins';
import { UIFrame } from "../ui";
export interface BarberShopCharacterData {
    raceData: BarberShopRaceData;
    sex: number
}
export interface BarberShopRaceData {
    name: string;
    fileName: string;
    alternateFormRaceData: CharacterAlternateFormData | undefined
}
export const C_BarberShop = {
    ApplyCustomizationChoices: (): boolean => {return false},
    Cancel: (): void => {},
    ClearPreviewChoices: (): void => {},
    GetAvailableCustomizations: (): any => {return {} as any},
    GetCurrentCameraZoom: (): number => {return 0},
    GetCurrentCharacterData: (): BarberShopCharacterData => {return {raceData: {name: '', fileName: '', alternateFormRaceData: {} as any}, sex: 0}},
    GetCurrentCost: (): number => {return 0},
    HasAnyChanges: (): boolean => {return false},
    IsViewingAlteredForm: (): boolean => {return false},
    OldBarberShopLoaded: (): void => {},
    PreviewCustomizationChoice: (optionID: number, choiceID: number): void => {},
    ResetCameraRotation: (): void => {},
    ResetCustomizationChoices: (): void => {},
    RotateCamera: (diffDegrees: number): void => {},
    SetCameraDistanceOffset: (offset: number): void => {},
    SetCameraZoomLevel: (zoomLevel: number, keepCustomZoom: boolean | undefined): void => {},
    SetCustomizationChoice: (optionID: number, choiceID: number): void => {},
    SetModelDressState: (dressedState: boolean): void => {},
    SetSelectedSex: (sex: number): void => {},
    SetViewingAlteredForm: (isViewingAlteredForm: boolean): void => {},
    SetViewingShapeshiftForm: (shapeshiftFormID: number | undefined): void => {},
    ZoomCamera: (zoomAmount: number): void => {},
};
export type BarberShopAppearanceAppliedEvent = (frame: UIFrame, e: "BARBER_SHOP_APPEARANCE_APPLIED") => void
export type BarberShopCameraValuesUpdatedEvent = (frame: UIFrame, e: "BARBER_SHOP_CAMERA_VALUES_UPDATED") => void
export type BarberShopCloseEvent = (frame: UIFrame, e: "BARBER_SHOP_CLOSE") => void
export type BarberShopCostUpdateEvent = (frame: UIFrame, e: "BARBER_SHOP_COST_UPDATE") => void
export type BarberShopForceCustomizationsUpdateEvent = (frame: UIFrame, e: "BARBER_SHOP_FORCE_CUSTOMIZATIONS_UPDATE") => void
export type BarberShopOpenEvent = (frame: UIFrame, e: "BARBER_SHOP_OPEN") => void
export type BarberShopResultEvent = (frame: UIFrame, e: "BARBER_SHOP_RESULT", success: boolean) => void