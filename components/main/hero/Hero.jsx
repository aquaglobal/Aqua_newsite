import { SparklesCore } from "../../UI/Sparkles";
import Link from "next/link";
import { BiConversation } from "react-icons/bi";
import Subheading from "./Subheading";
import CalendlyButton from "@/components/UI/Buttons/CalendlyButton";
const Hero=() => {
    return (
        <div className="relative w-full h-full bg-black flex flex-col items-center justify-center overflow-hidden">
            <div className="w-full absolute inset-0 ">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="#00000"
                    minSize={10}
                    maxSize={30}
                    particleDensity={3}
                    className="w-full h-full"
                    particleColors={["#85c9fe", "#6be297"]}
                    speed={1}
                />
            </div>
            <div className='z-20 relative px-[1rem] flex flex-col sm:gap-y-10 gap-y-10 items-center justify-center'>
                {/* <h1 className="min-[1490px]:text-[100px]  sm:text-[80px] text-[40px] font-[700] text-center tracking-tight text-white sm:leading-[6.5rem] leading-[3.25rem]">
                    Building Bridges Between
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#6be297] via-[#91ffb9] to-[#336d48]">
                        Imagination
                    </span>
                    <br className="lg:hidden " /> & <br className="lg:hidden " />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#85c9fe] via-[#b3dbfa] to-[#2c5d83]">
                        Implementation
                    </span>
                </h1> */}
                <h1 className="min-[1490px]:text-[100px]  sm:text-[80px] text-[35px] font-[700] text-center tracking-tight text-white sm:leading-[6.5rem] leading-[3.25rem]">
                    Brightest minds
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#6be297] via-[#91ffb9] to-[#336d48]">
                        take your business  to
                    </span>
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#85c9fe] via-[#b3dbfa] to-[#2c5d83]">
                        the next level <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#6be297] via-[#91ffb9] to-[#336d48]">!</span>
                    </span>
                    {/* <br className="lg:hidden " /> & <br className="lg:hidden " />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#85c9fe] via-[#b3dbfa] to-[#2c5d83]">
                        Implementation
                    </span> */}
                </h1>
                {/* <p className='sm:text-[30px] text-[20px] font-[500] text-center tracking-tight text-white '>Unlock growth, transformation, and digital presence for your business</p> */}
                {/* <p className='sm:text-[30px] text-[20px] font-[500] text-center tracking-tight  text-white'>Unlock your business growth</p> */}
                <Subheading />
                <div className="flex sm:flex-row flex-col gap-y-5 items-center gap-x-10">
                    <Link
                        href={'/contact'}
                        className="inline-flex space-x-4 text-[20px] font-[600] h-[60px] w-[300px] animate-shimmer items-center justify-center rounded-xl border border-green-300   bg-[length:200%_100%] px-6  text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 bg-gradient-to-r hover:from-[#6be297] via-[#91ffb9] to-[#335e6d]">
                        <p>Contact Us</p>
                        <BiConversation className=" text-2xl font-bold" />
                    </Link>
                    <CalendlyButton className={"h-[60px] w-[300px]"} />
                </div>
            </div>
        </div>
    )
}

export default Hero