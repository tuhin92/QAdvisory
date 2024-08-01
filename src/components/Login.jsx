import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <div>
                <div className="mb-24">
                    <form className="md:w-1/3 lg:w-1/3 mx-auto bg-slate-400 p-12 rounded-2xl my-4 md:8 lg:my-26">
                        <img
                            className="h-12"
                            src="https://i.ibb.co/TW1kgB4/photo-2024-07-15-23-25-24-removebg-preview.png"
                            alt=""
                        />
                        <h2 className="text-3xl text-center font-bold text-[#a00d63]">
                            Login
                        </h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type='password'
                                placeholder="Password"
                                name="password"
                                className="input input-bordered pr-10"
                                required
                            />
                        </div>
                        <label className="label">
                        </label>
                        <div className="form-control mt-6 gap-4">
                            <button className="btn bg-[#a00d63] text-white border-none">Login</button>

                            <p className="text-center mt-6">
                                Don't have an account?
                                <Link to="" className='text-blue-600 font-bold ml-1'>Register</Link>
                            </p>
                            {/* <button className="btn  bg-green-600"><FaGoogle className='text-2xl'></FaGoogle>Sign in with Google</button>
                            <button  className="btn bg-orange-600"><FaGithub className='text-2xl'></FaGithub> Sign in with Github</button> */}
                        </div>
                    </form>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;