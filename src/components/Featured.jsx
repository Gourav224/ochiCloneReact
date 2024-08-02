import { motion, useAnimation } from "framer-motion";

const Featured = () => {
    const cards = [useAnimation(), useAnimation()];
    return (
        <div className="w-full py-20 bg-zinc-200">
            <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
                <h1 className="text-[6vw] font-['Neue_Montreal'] tracking-tight">
                    Featured projects
                </h1>
            </div>
            <div className="px-20">
                <div className="cards w-full flex gap-10 mt-10">
                    <motion.div
                        onHoverStart={() => cards[0].start({ y: "0" })}
                        onHoverEnd={() => cards[0].start({ y: "100%" })}
                        className="cardcontainer w-1/2  h-[70vh] relative"
                    >
                        <h1 className="absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-6xl font-['Founders Grotesk X-Condensed'] leading-none tracking-tighter text-[#CDEA68] flex   overflow-hidden">
                            {"FYDE".split("").map((item, index) => (
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={cards[0]}
                                    transition={{
                                        ease: [0.22, 1, 0.36, 1],
                                        delay: index * 0.06,
                                    }}
                                    className="inline-block font-bold text-7xl"
                                    key={index}
                                >
                                    {" "}
                                    {item}
                                </motion.span>
                            ))}
                        </h1>
                        <div className="w-full h-full rounded-xl overflow-hidden">
                            <img
                                className="w-full h-full object-cover rounded-xl"
                                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                                alt=""
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        onHoverStart={() => cards[1].start({ y: "0" })}
                        onHoverEnd={() => cards[1].start({ y: "100%" })}
                        className="cardcontainer w-1/2 relative h-[70vh] "
                    >
                        <h1 className="absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] text-6xl font-['Founders Grotesk X-Condensed'] leading-none tracking-tighter text-[#CDEA68] flex   overflow-hidden">
                            {"VISE".split("").map((item, index) => (
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={cards[1]}
                                    transition={{
                                        ease: [0.22, 1, 0.36, 1],
                                        delay: index * 0.06,
                                    }}
                                    className="inline-block font-bold text-7xl"
                                    key={index}
                                >
                                    {" "}
                                    {item}
                                </motion.span>
                            ))}
                        </h1>
                        <div className="w-full h-full rounded-xl  overflow-hidden">
                            <img
                                className="w-full h-full object-cover"
                                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                                alt=""
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
