export type THoroscopeList = {
    language: "original" | "translated";
    period: "today";
    horoscope: Record<string, string>;
};
