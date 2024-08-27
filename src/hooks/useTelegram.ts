import { useEffect, useState } from "react";

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

    useEffect(() => {
        const webApp = window.Telegram?.WebApp;

        if (webApp) {
            setUser(webApp.initDataUnsafe.user);
        }
    }, []);

    return { user };
}
