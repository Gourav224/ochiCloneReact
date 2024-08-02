const Cards = () => {
    return (
        <div className="w-full min-h-screen bg-zinc-900 grid grid-cols-1 md:grid-cols-2 gap-5 items-center px-16 pb-24">
            <div className="cardcontainer h-[50vh] w-full">
                <div className="card relative flex items-center justify-center w-full h-full bg-[#004D43] rounded-xl">
                    <img
                        className="w-32"
                        src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
                        alt=""
                    />
                    <button className="absolute left-10 bottom-10 px-5 rounded-full py-1 border-2 font-['Neue_Montreal'] text-sm">
                        &copy;2019-2024
                    </button>
                </div>
            </div>
            <div className="cardcontainer h-[50vh] w-full flex gap-5">
                <div className="card relative w-1/2 h-full rounded-xl bg-[#212121]  flex items-center justify-center ">
                    <img
                        className="w-32"
                        src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
                        alt=""
                    />
                    <button className="absolute left-10 bottom-10 px-5 rounded-full py-1 border-2 font-['Neue_Montreal'] text-sm">
                        RATING 5.0 ON CLUTCH
                    </button>
                </div>
                <div className="card relative w-1/2 h-full rounded-xl bg-[#212121]  flex items-center justify-center ">
                    <img
                        className="w-32"
                        src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
                        alt=""
                    />
                    <button className="absolute left-10 bottom-10 px-5 rounded-full py-1 border-2 font-['Neue_Montreal'] text-sm">
                        BUSINESS BOOTCAMP ALUMNI
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cards;
