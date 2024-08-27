import { Typography } from "@material-tailwind/react";

export default function SkeletonHoroscopeList() {
    return (
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-6">
            {new Array(12).fill(null).map((_, index) => (
                <Typography
                    key={index}
                    as="div"
                    variant="h1"
                    className="rounded-lg h-24 bg-gray-300"
                >
                    &nbsp;
                </Typography>
            ))}
        </div>
    );
}
