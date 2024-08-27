import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Horoscope from "./pages/Horoscope.tsx";
import NavBar from "./components/NavBar.tsx";
import "./i18n.ts";
import { useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { useTranslation } from "react-i18next";
import useTelegram from "./hooks/useTelegram.ts";

function App() {
    const navigate = useNavigate();
    const { user } = useTelegram();
    const { i18n } = useTranslation();
    const { ref } = useSwipeable({
        onSwipedRight: () => navigate(-1),
        delta: 200,
        preventScrollOnSwipe: true,
        swipeDuration: 200,
    });
    useEffect(() => {
        i18n.changeLanguage(user?.language_code === "ru" ? "ru" : "en");
        ref(document.body);
        return () => ref(document.body);
    }, []);

    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:horoscope" element={<Horoscope />} />
            </Routes>
        </>
    );
}

export default App;
