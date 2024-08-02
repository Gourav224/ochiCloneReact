import { motion } from "framer-motion";

const Marquee = () => {
    return (
        <div
            data-scroll
            data-scroll-speed=".1"
            data-scroll-section
            className="w-full py-20 rounded-t-3xl bg-[#004D43]"
        >
            <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap  overflow-hidden">
                <motion.h1
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{
                        ease: "linear",
                        repeat: Infinity,
                        duration: 10,
                    }}
                    className="text-[24vw] leading-none font-['Founders_Grotesk_X-Condensed'] uppercase -mb-[6vw] pt-10 font-semibold pr-16"
                >
                    We are ochi
                </motion.h1>
                <motion.h1
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{
                        ease: "linear",
                        repeat: Infinity,
                        duration: 10,
                    }}
                    className="text-[24vw] leading-none font-['Founders_Grotesk_X-Condensed'] uppercase -mb-[6vw] pt-10 font-semibold pr-16"
                >
                    We are ochi
                </motion.h1>
            </div>
        </div>
    );
};

export default Marquee;
