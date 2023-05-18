import Link from "next/link";
import Image from "next/image";
import SocialLoginBtns from "@/components/Buttons/SocialLoginBtns";

const Login = () => {
    return (
        <>
            <section className="h-screen">
                <div className="  h-full">
                    <div className="flex justify-between items-center h-full g-6 text-gray-800">
                        <div className=" w-full md:w-1/2 grow bg-white h-full overflow-y-auto px-4 md:px-[60px] lg:px-[80px] xl:px-[100px] pt-[30px] pb-7 scrollbar ">
                            <div className="max-w-[500px] mx-auto flex items-center justify-center h-full">
                                <div className="w-full">
                                    <div className="mb-10 text-center">
                                        <div className="relative flex items-center justify-center">
                                            <Image
                                                src={"/images/LogoIcon.svg"}
                                                alt={"logo"}
                                                width={40}
                                                height={40}
                                                priority
                                            />
                                        </div>
                                        <h2 className="text-2xl font-semibold text-gray-700 capitalize text-center mt-3 mb-3">
                                            Welcome back, Zeshaan
                                        </h2>
                                    </div>

                                    {/* Social auth */}
                                    <SocialLoginBtns signup={false} />

                                    {/* <div className="flex items-center justify-center mt-4 text-xs text-[#807F88]">
                                        <span className="">
                                            By signing up, you agree to our
                                        </span>
                                        <Link
                                            href=""
                                            className=" text-[#046ED1] ml-1 underline"
                                        >
                                            Terms of use &amp; service
                                        </Link>
                                    </div> */}
                                    <div className="flex items-center justify-center mt-5">
                                        <span className="text-[#807F88]">
                                            Don't have an account?{" "}
                                        </span>
                                        <Link
                                            href="/auth/signup"
                                            className=" text-[#6457EF] ml-2"
                                        >
                                            Sign up
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className=" right w-full md:w-1/2 lg:w-2/5 py-5 md:py-5 md:mb-0  relative hidden md:block h-full bg-slate-400 "
                            style={{
                                backgroundImage: "url(/img/auth-pic.svg)",
                                backgroundPosition: "top center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                            }}
                        >
                            {/* <div className="overlay"></div> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
