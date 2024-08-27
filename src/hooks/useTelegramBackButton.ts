import { useEffect } from "react";

export default function useTelegramBackButton(callback: () => void) {
    useEffect(() => {
        const webApp = window.Telegram?.WebApp;

        if (webApp) {
            webApp.BackButton.show();
            webApp.BackButton.onClick(callback);

            return () => {
                webApp.BackButton.offClick(callback);
                webApp.BackButton.hide();
            };
        }
    }, []);
}
