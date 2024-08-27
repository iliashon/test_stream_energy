import { useTranslation } from "react-i18next";
import HoroscopeList from "../components/HoroscopeList.tsx";
import SkeletonHoroscopeList from "../components/loading/SkeletonHoroscopeList.tsx";
import useFetchHoroscope from "../hooks/useFetchHoroscope.ts";
import { THoroscopeList } from "../types/THoroscopeList.ts";

export default function Home() {
    const { t } = useTranslation();
    const { loading, data, error } = useFetchHoroscope<THoroscopeList>({
        language: "original",
        period: "today",
    });

    return (
        <main className="container mx-auto px-4 py-4">
            <h1 className="text-2xl font-semibold">{t("home.title")}</h1>
            <h2 className="text-base opacity-50 mt-2">{t("home.subTitle")}</h2>
            {loading && <SkeletonHoroscopeList />}
            {error && <h2>Error {error}</h2>}
            {data && <HoroscopeList data={data} />}
        </main>
    );
}
