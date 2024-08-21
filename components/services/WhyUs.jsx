import Image from 'next/image'
import box1 from '../../public/services/box1.svg'
import box2 from '../../public/services/box2.svg'
import DownToUp from '../motion/DownToUp'
import megaphone from "../../public/services/megaphon.svg"
import time from "../../public/services/time.svg"
import aqua from "../../public/aquaEarth.svg"
import Heading from '../UI/Heading'
const WhyUs=() => {
    return (
        <div className='space-y-10 z-20'>
            <div className='w-full text-center'>
                <Heading className={"text-center text-6xl"}>
                    Why us?
                </Heading>
            </div>
            <div className="flex items-center justify-center  z-20 w-full max-w-[1480px]">
                <div className="flex min-[900px]:flex-row flex-col min-[900px]:gap-y-0 gap-y-20 gap-x-[5rem] justify-between w-full ">
                    <div className="flex flex-col gap-y-20">
                        <div className="min-[1299px]:w-[400px] min-[900px]:w-[300px] bg-gradient-to-r from-[#2c2c2d] to-[#1a1a1e] rounded-lg p-5 flex">
                            <DownToUp once={true} className="flex flex-col gap-y-5 min-[900px]:max-w-[250px] relative">
                                <Heading className="text-[24px] ">Customized Services</Heading>
                                <p className="text-[16px] text-white font-[500] ">We build your success with latest technologies for website and all types of complex mobile and software solutions.  </p>
                            </DownToUp>
                            <div
                                className="w-[120px] h-[120px] lg:flex hidden bg-[#eb5757] rounded-lg min-[1299px]:ml-[20rem] ml-[16rem] mt-[2.2rem] absolute  items-center justify-center p-3">
                                <Image src={box1} alt="icon" />
                            </div>
                        </div>
                        <div className="min-[1299px]:w-[400px] min-[900px]:w-[300px] bg-gradient-to-r from-[#2c2c2d] to-[#1a1a1e] rounded-lg p-5 flex">
                            <DownToUp once={true} className="flex flex-col gap-y-5 min-[900px]:max-w-[250px]">
                                <Heading className="text-[24px]  ">Latest Techniques</Heading>
                                <div>
                                    <p className="text-[16px] text-white font-[500] ">We are skilled to design user-friendly, reliable and cost-efficient solutions for products and services and unique digital marketing strategies. </p>
                                    <br />
                                </div>
                            </DownToUp>
                            <div
                                className="w-[120px] h-[120px] lg:flex hidden bg-[#56ccf2] rounded-lg min-[1299px]:ml-[20rem] ml-[16rem] mt-[2.2rem] absolute  items-center justify-center p-3">
                                <Image src={box2} alt="icon" />
                            </div>
                        </div>
                    </div>
                    <div className=" lg:flex hidden items-center justify-center rounded-full w-[300px] h-[300px] mt-[7.6rem] ">
                        <Image src={aqua} alt='aqua globe' />
                        {/* <span className='min-[1088px]:text-[60px] text-[40px]  uppercase   font-[600] text-[#2c2c2d]'>Why Us?</span> */}
                    </div>
                    <div className="flex flex-col gap-y-20">
                        <div className="min-[1299px]:w-[400px] min-[900px]:w-[300px] bg-gradient-to-r from-[#2c2c2d] to-[#1a1a1e] rounded-lg p-4 flex">
                            <DownToUp once={true} className="flex flex-col min-[900px]:ml-auto gap-y-5 min-[900px]:max-w-[250px]">
                                <Heading className="text-[24px] ">Marketing Excellence</Heading>
                                <p className="text-[16px] text-white font-[500] ">We are expert in running innovative marketing campaigns using top class contents and visuals with perfect use of analytics. </p>

                            </DownToUp>
                            <div
                                className="w-[120px] h-[120px] bg-[#9b51e0] rounded-lg min-[1299px]:ml-[-5rem] ml-[-7.5rem] mt-[2.2rem] absolute lg:flex hidden items-center justify-center p-3">
                                <Image src={megaphone} alt="Megaphone icon" />
                            </div>
                        </div>
                        <div className="min-[1299px]:w-[400px] min-[900px]:w-[300px] bg-gradient-to-r from-[#2c2c2d] to-[#1a1a1e] rounded-lg p-5 flex">
                            <DownToUp once={true} className="flex flex-col min-[900px]:ml-auto gap-y-5 min-[900px]:max-w-[250px]">
                                <Heading className="text-[24px]  ">Time Bound Projects</Heading>
                                <div>
                                    <p className="text-[16px] text-white font-[500] ">We rank on top in meeting deadlines for all our projects. We offer best quality product at competitive cost.   </p>
                                    <br />
                                </div>
                            </DownToUp>
                            <div
                                className="w-[120px] h-[120px] bg-[#ebb512] rounded-lg min-[1299px]:ml-[-5rem] ml-[-7.5rem] mt-[2.2rem] absolute lg:flex hidden items-center justify-center p-3">
                                <Image src={time} alt="Time Icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUs