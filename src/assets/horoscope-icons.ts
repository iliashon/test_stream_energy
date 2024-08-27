import { IconType } from "react-icons";
import {
    GiAquarius,
    GiAries,
    GiCancer,
    GiCapricorn,
    GiGemini,
    GiLeo,
    GiLibra,
    GiPisces,
    GiSagittarius,
    GiScorpio,
    GiTaurus,
    GiVirgo,
} from "react-icons/gi";

export const HOROSCOPE_ICONS: Record<string, IconType> = {
    aries: GiAries,
    taurus: GiTaurus,
    gemini: GiGemini,
    cancer: GiCancer,
    leo: GiLeo,
    virgo: GiVirgo,
    libra: GiLibra,
    scorpio: GiScorpio,
    sagittarius: GiSagittarius,
    capricorn: GiCapricorn,
    aquarius: GiAquarius,
    pisces: GiPisces,
};
