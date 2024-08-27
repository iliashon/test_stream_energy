import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HOROSCOPE_ICONS } from "../assets/horoscope-icons.ts";

export default function HoroscopeItem({
    horoscopeName,
}: {
    horoscopeName: string;
}) {
    const { t } = useTranslation();
    const IconComponent = HOROSCOPE_ICONS[horoscopeName];

    return (
        <Link
            to={`/${horoscopeName}`}
            className="border flex justify-between border-gray-300 rounded-lg active:bg-gray-300 duration-100 px-4 py-6"
        >
            <div>
                <p className="font-semibold">
                    {t(`horoscope.${horoscopeName}.name`)}
                </p>
                <p className="opacity-50">
                    {t(`horoscope.${horoscopeName}.date`)}
                </p>
            </div>
            <IconComponent size={30} />
        </Link>
    );
}
