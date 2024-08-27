import { useEffect, useState } from "react";
import axios from "axios";
import { TPostDataHoroscope } from "../types/TPostDataHoroscope.ts";

const API_ENDPOINT = "https://poker247tech.ru/get_horoscope/";

export default function useFetchHoroscope<HoroscopeType>(
    postData: TPostDataHoroscope,
) {
    const [data, setData] = useState<HoroscopeType | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.post<HoroscopeType>(
                    API_ENDPOINT,
                    postData,
                );
                setData(response.data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        })();
    }, [postData.language]);

    return { data, loading, error };
}
