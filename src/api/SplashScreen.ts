import { UIFrame } from "../ui";
export const enum SplashScreenType {
    WhatsNew = 0,
    SeasonRollOver = 1,
}
export interface SplashScreenInfo {
    textureKit: string;
    minDisplayCharLevel: number;
    minQuestDisplayLevel: number;
    soundKitID: number;
    allianceQuestID: number | undefined;
    hordeQuestID: number | undefined;
    header: string;
    topLeftFeatureTitle: string;
    topLeftFeatureDesc: string;
    bottomLeftFeatureTitle: string;
    bottomLeftFeatureDesc: string;
    rightFeatureTitle: string;
    rightFeatureDesc: string;
    shouldShowQuest: boolean;
    screenType: SplashScreenType;
}
export const C_SplashScreen = {
    AcknowledgeSplash: (): void => {},
    CanViewSplashScreen: (): boolean => {
        return false;
    },
    RequestLatestSplashScreen: (fromGameMenu: boolean): void => {},
};
export type OpenSplashScreenEvent = (
    frame: UIFrame,
    e: "OPEN_SPLASH_SCREEN",
    info: SplashScreenInfo | undefined
) => void;
