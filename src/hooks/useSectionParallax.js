import { useEffect, useRef, useState } from "react";

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);

// Linear interpolation
const lerp = (start, end, factor) =>
    start + (end - start) * factor;

export function useSectionParallax({
    speed = 1,
    maxOffset = 60,
    smoothness = 0.08 // smaller = smoother
} = {}) {
    const ref = useRef(null);

    const current = useRef(0);
    const target = useRef(0);

    const [, forceRender] = useState(0);

    useEffect(() => {
        let rafId;

        const update = () => {
            current.current = lerp(
                current.current,
                target.current,
                smoothness
            );

            forceRender(v => v + 1);
            rafId = requestAnimationFrame(update);
        };

        const handleScroll = () => {
            if (!ref.current) return;

            const rect = ref.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            const progress =
                (rect.top + rect.height / 2 - windowHeight / 2) /
                (windowHeight / 2);

            target.current = clamp(
                progress * speed * maxOffset,
                -maxOffset,
                maxOffset
            );
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        update();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            cancelAnimationFrame(rafId);
        };
    }, [speed, maxOffset, smoothness]);

    return {
        ref,
        offset: current.current
    };
}
