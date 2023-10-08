import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

const Register = () => {


    return (
        <div className="w-full h-screen font-sans bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/mSwgLbb/pexels-freestocksorg-70737.jpg)', backgroundSize: 'cover', backgroundPosition: 'right' }}>
            <div className="container flex items-center justify-center flex-1 h-full mx-auto">

                <div className="w-full max-w-lg -mt-28">
                    <div className="leading-loose">
                        <form className=" p-10 m-auto rounded shadow-2xl bg-white/20">
                            <p className="mb-8 text-3xl font-semibold  text-center ">
                                Register
                            </p>
                            <div className="mb-2">
                                <div className=" relative ">
                                    <input type="text" id="login-with-bg-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="name" name="name" />
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className=" relative ">
                                    <input type="email" id="login-with-bg-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="email" name="email" />
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className=" relative ">
                                    <input type="text" id="login-with-bg-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="photo url" name="photo" />
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className=" relative ">
                                    <input type="password" id="login-with-bg-password" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="password" name="password" />
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-6">
                                <button type="submit" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Register
                                </button>
                            </div>
                            <div className="text-center text-white">
                                <div className="mt-5">
                                    <p className="flex justify-center items-center"><span className="border-1 border-black w-[100px] mr-3"><hr /></span>Register with social accounts <span className="border-1 w-[100px] ml-3"><hr /></span></p>
                                </div>

                                <div className="mt-4 ">  
                                    <div className="mb-4 px-10 flex justify-center items-center w-full ">
                                        <button className="btn btn-outline rounded-3xl flex normal-case w-[300px] ">
                                            <FcGoogle className="text-2xl"></FcGoogle>
                                            Continue with Google    
                                        </button>
                                    </div>  
                                    <div className="mb-4 px-10 flex justify-center items-center w-full">
                                        <button className="btn btn-outline rounded-3xl flex normal-case w-[300px]">
                                            <BsGithub className="text-2xl"></BsGithub>
                                            Continue with GitHub
                                        </button>
                                    </div>
                                    
                                </div>  
                            </div>

                            <div className="flex justify-center mt-4 text-white">
                                <p>Already have an account?<span className="font-semibold"><Link className="text-indigo-700" to='/login'> sign in</Link></span></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;