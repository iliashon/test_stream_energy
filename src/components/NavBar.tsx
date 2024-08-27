import SwitchLang from "./SwitchLang.tsx";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <header className="container mx-auto px-4 py-4 flex justify-between font-mono">
            <Link to="/" className="font-medium text-xl">
                Horoscope.
            </Link>
            <SwitchLang />
        </header>
    );
}
