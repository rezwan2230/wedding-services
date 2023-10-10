import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {

    const navigate = useNavigate()
    const { signIn, signInWithGoogle, signInWithGitHub} = useContext(AuthContext)
    const location = useLocation()


    const handleLogin = (e)=>{
        e.preventDefault()   
        const email = e.target.email.value
        const password = e.target.password.value

        console.log(email, password);

        signIn(email, password)
        .then(result=>{
            navigate(location?.state ? location.state : '/')
            console.log(result.user);
        })
        .catch(error=>{
            toast.error('Not Match', {
                position: "bottom-right",
                autoClose: 2000,
                });
            console.log(error.message);
        })

    }

    const handleGoogleSignIn = ()=>{
        signInWithGoogle()
        navigate(location?.state ? location.state : '/')
    }
    const handleGithubSignIn = ()=>{
        signInWithGitHub()
        navigate(location?.state ? location.state : '/')
    }

    return (
        <div className="w-full h-screen font-sans bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/d65tcPb/update.jpg)', backgroundSize:'cover',  backgroundPosition: 'center', objectFit:"top left" }}>
            <div className="container flex items-center justify-center flex-1 h-full mx-auto">

                <div className="w-full max-w-lg lg:ml-[600px] md:-mt-44 mt-20">
                    <div className="leading-loose">
                        <form onSubmit={handleLogin} className="max-w-sm p-10 m-auto rounded shadow-2xl bg-white/20">
                            <p className="mb-8 text-3xl font-semibold  text-center ">
                                Login
                            </p>
                            <div className="mb-2">
                                <div className=" relative ">
                                    <input type="text" id="login-with-bg-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="email" name="email" required />
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className=" relative ">
                                    <input type="password" id="login-with-bg-password" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="password" name="password" required/>
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
                                    <FcGoogle onClick={handleGoogleSignIn} className="text-3xl"></FcGoogle>
                                    <BsGithub onClick={handleGithubSignIn} className="text-[26px]"></BsGithub>
                                </div>
                            </div>

                            <div className="flex justify-center mt-4">
                            <p>Dont have an account?<span className="font-semibold"><Link className="text-indigo-700" to="/register"> sign up</Link></span></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>  
    );
};

export default Login;