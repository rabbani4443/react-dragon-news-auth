import { useLoaderData } from "react-router-dom";
import BreakingNews from "../../Components/BreakingNews/BreakingNews";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import NewsCard from "../../Components/NewsCard/NewsCard";

const Home = () => {

    const news = useLoaderData()
    // console.log(news)

    return (
        <div>
            <Header></Header>
            <BreakingNews ></BreakingNews>
            <Navbar></Navbar>
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
            <div className="">
            <LeftSideNav></LeftSideNav>
            </div>
             <div className="lg:col-span-2">
                {
                    news?.map(aNews=>( 
                        <NewsCard key={aNews._id}  aNews={aNews} > </NewsCard> 
                    ))
                }
            </div>
             <div className="">
                <RightSideNav></RightSideNav>
            </div>
            </div>
        </div>
    );
};

export default Home