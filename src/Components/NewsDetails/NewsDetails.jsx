import { useParams } from "react-router-dom";
import Header from "../../Pages/Shared/Header/Header";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import RightSideNav from "../../Pages/Shared/RightSideNav/RightSideNav";

const NewsDetails = () => {
    const {id} = useParams()
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
             <div className="lg:col-span-2 border">
                <h1>hello world</h1>
                <h1>{id}</h1>
            </div>
             <div className="">
                <RightSideNav></RightSideNav>
            </div>
            </div>
        </div>
    );
};

export default NewsDetails;