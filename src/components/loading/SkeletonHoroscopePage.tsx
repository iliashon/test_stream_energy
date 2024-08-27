import { Typography } from "@material-tailwind/react";

export default function SkeletonHoroscopePage() {
    return (
        <div className="max-w-full animate-pulse">
            <Typography
                as="div"
                variant="h1"
                className="mb-8 h-10 w-56 rounded-lg bg-gray-300"
            >
                &nbsp;
            </Typography>
            {new Array(10).fill(null).map((_, index) => (
                <Typography
                    key={index}
                    as="div"
                    variant="paragraph"
                    className="mb-2 h-6 w-full rounded-full bg-gray-300"
                >
                    &nbsp;
                </Typography>
            ))}
        </div>
    );
}
