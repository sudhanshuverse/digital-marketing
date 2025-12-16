import { useEffect, useState } from "react";

const clamp = (value, min, max) =>
    Math.min(Math.max(value, min), max);

export function useParallax({
    speed = 0.1,
    min = -80,
    max = 80
} = {}) {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY * speed;
            setOffset(clamp(y, min, max));
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [speed, min, max]);

    return offset;
}
