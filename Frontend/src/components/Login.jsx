import React from "react";
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <section className="bg-[#F4F7FF] py-20 lg:py-[80px]">
            <div className="container mx-auto">
                <div className="-mx-2 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="relative mx-auto max-w-[430px] overflow-hidden rounded-lg bg-white py-5 px-10 text-center sm:px-12 md:px-[35px]">
                            <div className="mb-10 text-center md:mb-5">Laraveller</div>
                            <form action="">
                                <div className="mb-2">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-3 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                    />
                                    <div className="flex">
                                        <span className="text-red-400 text-sm m-1 p-1">error</span>
                                    </div>
                                </div>
                                <div className="mb-2">
                                    <input 
                                        type="password"
                                        placeholder="Password"
                                        className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-3 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                    />
                                    <div className="flex">
                                        <span className="text-red-400 text-sm m-1 p-1">error</span>
                                    </div>
                                </div>
                                <div className="mb-5">
                                    <button type="submit" className="w-full px-4 py-3 bg-indigo-500 hover:gb-indigo-700 rounded-md text-white">
                                        Login
                                    </button>
                                </div>
                                <Link to="/register" className="text-primary hover:underline">
                                    Sign Up
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login;