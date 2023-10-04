import { Link, NavLink } from "react-router-dom";
import userDefault from '../../../assets/user.png';


const Navbar = () => {
    const navLink = <>
        <NavLink to={'/'}> <li className="text-lg opacity-90 "> Home </li> </NavLink>
        <NavLink to={'/about'}> <li className="text-lg opacity-90 mx-8"> About </li> </NavLink>
        <NavLink to={'/career'}> <li className="text-lg opacity-90"> Career </li> </NavLink>

    </>
    return (
        <div className="py-4">
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <p className="text-lg font-bold">News</p>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={userDefault} />
                        </div>
                    </label>
                    <Link> 
                    <button className="bg-slate-700 text-white text-lg font-semibold py-1 px-6">Login</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;