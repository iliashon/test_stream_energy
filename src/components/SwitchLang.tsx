import { Switch } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function SwitchLang() {
    const { i18n } = useTranslation();
    const [checked, setChecked] = useState<boolean>(false);

    useEffect(() => {
        i18n.language === "ru" && setChecked(true);
    }, []);

    const changeLang = () => {
        setChecked(!checked);
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    };

    return (
        <>
            <Switch
                onChange={changeLang}
                checked={checked}
                label={i18n.language === "ru" ? "RU" : "EN"}
            />
        </>
    );
}
