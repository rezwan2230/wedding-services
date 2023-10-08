import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

const Login = () => {

    return (
        <div className="w-full h-screen font-sans bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/d65tcPb/update.jpg)', backgroundSize:'cover',  backgroundPosition: 'center', objectFit:"top left" }}>
            <div className="container flex items-center justify-center flex-1 h-full mx-auto">

                <div className="w-full max-w-lg lg:ml-[600px] -mt-44">
                    <div className="leading-loose">
                        <form className="max-w-sm p-10 m-auto rounded shadow-2xl bg-white/20">
                            <p className="mb-8 text-3xl font-semibold  text-center ">
                                Login
                            </p>
                            <div className="mb-2">
                                <div className=" relative ">
                                    <input type="text" id="login-with-bg-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="email" name="email" />
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className=" relative ">
                                    <input type="password" id="login-with-bg-password" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="password" name="password"/>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-6">
                                <button type="submit" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Login
                                </button>
                            </div>
                            <div className="text-center">
                                <div className="mt-5">
                                    <p className=" flex justify-center items-center"><span className="border-1 border-black w-[20px] mr-3"><hr /></span>Login with social accounts <span className="border-1 w-[20px] ml-3"><hr /></span></p>
                                </div>

                                <div className="flex justify-center items-center gap-6 mt-2">
                                    <FcGoogle className="text-3xl"></FcGoogle>
                                    <BsGithub className="text-[26px]"></BsGithub>
                                </div>
                            </div>

                            <div className="flex justify-center mt-4">
                            <p>Don't have an account?<span className="font-semibold"><Link className="text-indigo-700" to="/register"> sign up</Link></span></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;