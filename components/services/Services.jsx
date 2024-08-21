import HeadingLeft from '../UI/HeadingLeft'
import BgHeading from '../UI/BgHeading'
import Heading from '../UI/Heading'
import CustomLink from '../UI/CustomLink'
import CalendlyButton from '../UI/Buttons/CalendlyButton'
const Services=() => {
    return (
        <div className="flex items-center justify-center sm:p-16 p-5 z-20 ">
            <div className='flex lg:flex-row lg:gap-y-0 gap-y-10 flex-col justify-between items-center'>
                <div className=''>
                    <HeadingLeft
                        content={"Customized solutions on web & application development, digital marketing & business consultation. "}
                        heading={"Services"}
                        heading2={"We Offer :"}
                    />
                </div>
                <div className='rounded-lg bg-gradient-to-r from-[#2c2c2d] to-[#1a1a1e] md:p-[30px] p-[25px] max-w-[45rem] w-full relative'>
                    <div className='flex flex-col gap-y-7'>
                        <div className='flex flex-col gap-y-2 max-w-[640px]'>
                            <Heading maxWidth={""} className='text-[30px] '>Software Development – Our Passion !</Heading>
                            {/* <p className='text-[20px] text-white '> We tailor to meet your entire web, mobile and app development needs that include all custom software requirements.
                                Explore our wide range of IT services to get an exceptional result.    </p> */}
                            <p className='text-[20px] text-white '> We meet all your business requirements.  </p>
                        </div>
                        <div className='flex flex-col gap-y-2 max-w-[640px]'>
                            <Heading maxWidth={""} className='text-[30px] '>Digital Marketing – Our Inspiration !</Heading>
                            <p className='text-[20px] text-white '> Our digital marketing solutions are crafted with cutting edge strategies and techniques.</p>
                            {/* Our digital marketing solutions are crafted with cutting- edge strategies and techniques. We focus on website design, SEO, digital advertising, high-quality visuals, crunchy contents, branding and scalability. We are expert in creating informative slides, engaging social media marketing campaigns to reach your digital aim. */}
                        </div>
                        <div className='flex flex-col gap-y-2 max-w-[640px]'>
                            <Heading maxWidth={""} className='text-[30px] '>Business Consultation - Our Motivation !</Heading>
                            <p className='text-[20px] text-white '> We take pride in assisting our client's business growth.</p>
                        </div>
                        <div className='flex items-center gap-x-10'>
                            {/* <CustomLink
                                href={"/contact"}>
                                Schedule a meeting
                            </CustomLink> */}
                            <CalendlyButton />
                        </div>
                    </div>
                </div>
                <div className='absolute left-0 sm:top-10 top-16'>
                    <BgHeading heading={"SERVICES"} />
                </div>
            </div>
        </div>
    )
}

export default Services