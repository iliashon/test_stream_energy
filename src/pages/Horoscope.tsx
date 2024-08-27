import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useFetchHoroscope from "../hooks/useFetchHoroscope.ts";
import { THoroscopeItem } from "../types/THoroscopeItem.ts";
import useTelegramBackButton from "../hooks/useTelegramBackButton.ts";
import SkeletonHoroscopePage from "../components/loading/SkeletonHoroscopePage.tsx";

export default function Horoscope() {
    const params = useParams();
    const navigate = useNavigate();
    const { i18n, t } = useTranslation();
    const { loading, data, error } = useFetchHoroscope<THoroscopeItem>({
        sign: params.horoscope,
        language: i18n.language === "ru" ? "original" : "translated",
        period: "today",
    });
    useTelegramBackButton(() => {
        navigate(-1);
    });

    return (
        <main className="container mx-auto min-h-full px-4 py-4">
            {loading && <SkeletonHoroscopePage />}
            {error && <h2>Error {error}</h2>}
            {data && (
                <>
                    <h1 className="text-3xl font-semibold mb-5">
                        {t(`horoscope.${data.sign}.name`)}
                    </h1>
                    <p className="text-xl opacity-50">{data.horoscope}</p>
                </>
            )}
        </main>
    );
}
