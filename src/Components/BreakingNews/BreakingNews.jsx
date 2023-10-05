import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div>
            <div className="flex items-center w-10/12 mx-auto bg-slate-200 p-4 rounded-sm">
            <button className=" bg-rose-700  py-1 px-4 text-white font-medium text-xl mr-4"> Latest </button>
            <div className="text-lg font-semibold">
            <Marquee pauseOnHover={true} speed={40}> I can be a React component, multiple React components, or just some text. </Marquee>
            </div>
            </div>
        </div>
    );
};

export default BreakingNews;