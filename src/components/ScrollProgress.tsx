'use client'
import { motion, useScroll, useSpring } from "framer-motion"

export default function ScrollYProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });


    return (
        <motion.div
            style={{
                scaleX: scaleX,
                transformOrigin: "left",
                position: 'fixed',
                zIndex: '999',
                top: 0,
                width: "100vw",
                height: '5px',
            }}
            className="
            rounded-r-lg
            bg-neutral-content
            " />
    )
}