const About = () => {
    return (
        <div
            data-scroll
            data-scroll-speed="-0.3"
            className="w-full p-20 bg-[#CDEA68] rounded-t-3xl text-black"
        >
            <h1 className="font-['Neue_Montreal'] text-[4vw]  leading-[3.5vw] tracking-tight ">
                Ochi is a strategic partner for fast-growing tech businesses
                that need to raise funds, sell products, explain complex ideas,
                and hire great people.
            </h1>

            <div className=" w-full mt-20 border-t-[1px] border-[#a1b562] flex gap-5">
                <div className="w-1/2 mt-10">
                    <h1 className="text-7xl">Our approach:</h1>
                    <button className="px-10 py-6 bg-zinc-900 text-white mt-10 rounded-full uppercase flex gap-10 items-center  ">
                        Read More
                        <div className="w-2 h-2 bg-zinc-100 rounded-full   hover:scale-[5] "></div>
                    </button>
                </div>
                <div className="w-1/2 h-[60vh] rounded-3xl bg-[#b0c859] ml-8 mt-10"></div>
            </div>
        </div>
    );
};

export default About;
