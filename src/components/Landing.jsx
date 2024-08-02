import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

const Landing = () => {
    return (
        <div
            data-scroll
            data-scroll-speed="-.3"
            data-scroll-section
            className="w-full h-screen bg-zinc-900 pt-1"
        >
            <div className="textstructure px-20 mt-52 ">
                {["We Create", "Eye opening", "Presentations"].map(
                    (item, ind) => {
                        return (
                            <div key={ind} className="masker uppercase">
                                <div className="w-fit flex items-end overflow-hidden">
                                    {ind == 1 && (
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: "7vw" }}
                                            transition={{
                                                ease: [0.45, 0, 0.55, 1],
                                                duration: 1,
                                            }}
                                            className="mr-[1vw] w-[7vw] h-[4vw] bg-red-500 relative rounded-md -top-[1vw]"
                                        ></motion.div>
                                    )}
                                    <h1 className="pt-[1vw] -mb-[.5vw]uppercase text-[6vw] font-['Founders Grotesk X-Condensed'] leading-[.85] font-bold ">
                                        {item}
                                    </h1>
                                </div>
                            </div>
                        );
                    }
                )}
            </div>
            <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
                {[
                    "For Public and private companies",
                    "From the pitch to IPO",
                ].map((item, index) => (
                    <p
                        key={index}
                        className="text-md font-light tracking-tight leading-none"
                    >
                        {item}
                    </p>
                ))}
                <div className="start flex items-start gap-5">
                    <div className="px-5 py-2 border-[1px] border-zinc-400 rounded-full font-light text-md uppercase">
                        start the project
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full ">
                        <span className="rotate-[45deg]">
                            <FaArrowUpLong />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
