import BreakingNews from "../../Components/BreakingNews/BreakingNews";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="text-5xl font-bold font-poppins ">Hello world </div>
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
            <div className="border-4">
            <LeftSideNav></LeftSideNav>
            </div>
             <div className="border-4 lg:col-span-2">
                <h1 className="text-4xl font-bold" >Coming soon </h1>
            </div>
             <div className="">
                <RightSideNav></RightSideNav>
            </div>
            </div>
        </div>
    );
};

export default Home;