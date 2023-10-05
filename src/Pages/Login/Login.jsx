import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {

    const{login}=useContext(AuthContext)

    const location = useLocation()

    const navigate = useNavigate()

    const handelLogin = e =>{
        e.preventDefault()
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const password = form.get('password')
        const email = form.get('email')
        // console.log(password,email)

        login(email,password)
        .then(result=>{
            console.log(result.user)
            navigate(location?.state ? location?.state : '/' )
        })
        .catch(error=>{
            console.log(error.massage)
        })

    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-2/4 mx-auto shadow-2xl rounded-lg  ">
            <form onSubmit={handelLogin} className="card-body ">
                <div className="form-control">
                    <label className="label ">
                        <span className="text-xl font-semibold">Email address</span>
                    </label>
                    <input type="email" name="email" placeholder="Enter your email address"  className="input input-bordered"  />
                </div>
                <div className="form-control">
                <label className="label">
                        <span className=" text-xl font-semibold">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Enter your password" className="input input-bordered"  />
                    <label className="label">
                        <a href="#" className=" text-lg font-medium link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </form>
            <div className="text-center pb-8 font-semibold">
                <h3>Dont’t Have An Account ? <Link to={'/register'} className="text-red-500">Register</Link></h3>
            </div>
            </div>
        </div>
    );
};

export default Login;