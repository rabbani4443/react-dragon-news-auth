import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {

    const {createUser} =useContext(AuthContext)

    const handelRegister = e =>{
        e.preventDefault()
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const url = form.get('url')
        const password = form.get('password')
        const email = form.get('email')
        console.log(name,url,password,email)

        createUser(email,password)
        .then(result=>{
            console.log(result.user)
        })
        .catch(error=>{
            console.log(error.massage)
        })

    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="w-2/4 mx-auto shadow-2xl rounded-lg  ">
                <form onSubmit={handelRegister} className="card-body ">
                    <div className="form-control">
                        <label className="label ">
                            <span className="text-xl font-semibold">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className=" text-xl font-semibold">Photo URL</span>
                        </label>
                        <input type="url" name="url" placeholder="Photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label ">
                            <span className="text-xl font-semibold">Email address</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email address" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className=" text-xl font-semibold">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" />
                    </div>
                    <div className="">
                        <input type="checkbox" name="" id="" /> <samp>Accept Term & Conditions</samp>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <div className="text-center pb-8 font-semibold">
                    <h3>Already Have An Account ? <Link to={'/login'} className="text-red-500">Login</Link></h3>
                </div>
            </div>
        </div>
    );
};

export default Register;