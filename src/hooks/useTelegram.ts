import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface TelegramUser {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code: string;
}

interface TelegramWebApp {
    initData: string;
    initDataUnsafe: {
        user?: TelegramUser;
    };
    BackButton: {
        isVisible: boolean;
        show: () => void;
        hide: () => void;
        onClick: (callback: () => void) => void;
        offClick: (callback: () => void) => void;
    };
}

declare global {
    interface Window {
        Telegram?: {
            WebApp: TelegramWebApp;
        };
    }
}

export default function useTelegram() {
    const [user, setUser] = useState<TelegramUser | null>();
    const { i18n } = useTranslation();

    useEffect(() => {
        const webApp = window.Telegram?.WebApp;

        if (webApp) {
            setUser(webApp.initDataUnsafe.user);
            i18n.changeLanguage(
                webApp.initDataUnsafe.user?.language_code === "ru"
                    ? "ru"
                    : "en",
            );
        }
    }, []);

    return { user };
}
