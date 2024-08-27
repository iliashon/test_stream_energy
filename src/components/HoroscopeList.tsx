import { THoroscopeList } from "../types/THoroscopeList.ts";
import HoroscopeItem from "./HoroscopeItem.tsx";

export default function HoroscopeList({ data }: { data: THoroscopeList }) {
    return (
        <section className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-6">
            {Object.keys(data.horoscope).map((item, index) => {
                return <HoroscopeItem horoscopeName={item} key={index} />;
            })}
        </section>
    );
}
