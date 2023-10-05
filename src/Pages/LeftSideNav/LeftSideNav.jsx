import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
    const [categories,setCategories] = useState([])

    useEffect( ()=>{
        fetch ('categories.json')
        .then(res=> res.json())
        .then(data=> setCategories(data) )
    },[])
    // console.log(categories)
    return (
        <div>
           <div className="p-4">
           <h1 className="text-xl font-semibold mb-5">All categories </h1>
           <div>
            {
                categories.map(category=>( <Link to={`/category/${category.id}`} key={category.id} >
                    <h3 className="py-4 px-10 whitespace-nowrap text-lg font-semibold rounded-lg opacity-70 hover:bg-slate-200 "> {category.name} </h3>
                </Link>
                ))
            }
           </div>
           </div>
        </div>
    );
};

export default LeftSideNav;