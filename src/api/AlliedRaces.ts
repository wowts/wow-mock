import { ColorMixin } from "../mixins";
import { LuaArray } from "@wowts/lua";
import { UIFrame } from "../ui";
export interface AlliedRaceInfo {
    raceID: number;
    maleModelID: number;
    femaleModelID: number;
    achievementIds: LuaArray<number>;
    maleName: string;
    femaleName: string;
    description: string;
    raceFileString: string;
    crestAtlas: string;
    modelBackgroundAtlas: string;
    bannerColor: ColorMixin;
}
export interface AlliedRaceRacialAbility {
    description: string;
    name: string;
    icon: number;
}
export const C_AlliedRaces = {
    ClearAlliedRaceDetailsGiver: (): void => {},
    GetAllRacialAbilitiesFromID: (
        raceID: number
    ): LuaArray<AlliedRaceRacialAbility> => {
        return {} as any;
    },
    GetRaceInfoByID: (raceID: number): AlliedRaceInfo => {
        return {
            raceID: 0,
            maleModelID: 0,
            femaleModelID: 0,
            achievementIds: {} as any,
            maleName: "",
            femaleName: "",
            description: "",
            raceFileString: "",
            crestAtlas: "",
            modelBackgroundAtlas: "",
            bannerColor: {} as any,
        };
    },
};
export type AlliedRaceCloseEvent = (
    frame: UIFrame,
    e: "ALLIED_RACE_CLOSE"
) => void;
export type AlliedRaceOpenEvent = (
    frame: UIFrame,
    e: "ALLIED_RACE_OPEN",
    raceID: number
) => void;
