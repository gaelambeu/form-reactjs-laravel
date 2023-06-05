import { useState } from "react";
import { Link, useNavigate, Await  } from "react-router-dom"
import axios from "../api/axios";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const csrf = () => axios.get('/sanctum/csrf-cookie')


    const handleRegister = async (event) => {
        event.preventDefault();
        await csrf();
        try{
            await axios.post("/register", {name, email, password, password_confirmation })
            setName("");
            setEmail("");
            setPassword("");
            setPasswordConfirmation("");
            navigate("/")
        } catch(e) {
            if(e.response.status = 422){
                setErrors(e.response.data.errors);
            }
        }
    }


    return (
        <section className="bg-[#F4F7FF] py-20 lg:py-[30px]">
            <div className="container mx-auto">
                <div className="-mx-2 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="relative mx-auto max-w-[430px] overflow-hidden rounded-lg bg-white py-5 px-10 text-center sm:px-12 md:px-[35px]">
                            <div className="mb-10 text-center md:mb-5">Laraveller</div>
                            <form onSubmit={handleRegister}>
                            <div className="mb-2">
                                    <input 
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value) }
                                        placeholder="Name"
                                        className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-3 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                    />
                                    {errors.name && <div className="flex">
                                        <span className="text-red-400 text-sm m-1 p-1">{errors.name[0]}</span>
                                    </div>}
                                </div>
                                <div className="mb-2">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value) }
                                        placeholder="Email"
                                        className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-3 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                    />
                                    {errors.email && <div className="flex">
                                        <span className="text-red-400 text-sm m-1 p-1">{errors.email[0]}</span>
                                    </div>}
                                </div>
                                <div className="mb-2">
                                    <input 
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value) }
                                        placeholder="Password"
                                        className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-3 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                    />
                                    {errors.password && <div className="flex">
                                        <span className="text-red-400 text-sm m-1 p-1">{errors.password[0]}</span>
                                    </div>}
                                </div>
                                <div className="mb-2">
                                    <input 
                                        type="password"
                                        value={password_confirmation}
                                        onChange={(e) => setPasswordConfirmation(e.target.value) }
                                        placeholder="Password Confirmation"
                                        className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-3 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none"
                                    />
                        
                                </div>
                                <div className="mb-5">
                                    <button type="submit" className="w-full px-4 py-3 bg-indigo-500 hover:gb-indigo-700 rounded-md text-white">
                                        Register
                                    </button>
                                </div>
                                <Link to="/login" className="text-primary hover:underline">
                                    Sign In
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register;