import HeadingLeft from '@/components/UI/HeadingLeft'
import ReviewSwiper from './ReviewSwiper'
const Reviews=() => {
    return (
        <div className='flex xl:flex-row flex-col xl:gap-y-0 gap-y-10 justify-center  sm:px-10 px-5 max-w-[1300px] w-full z-10 gap-x-10'>
            <div className='flex flex-col gap-y-10 max-w-[600px] '>
                <HeadingLeft
                    heading={"Testimonials"}
                    heading2={"Winning Hearts"}
                    content={"Satisfied clients make all the difference !"}
                />
                {/* <DownToUp once={true} className='rounded-lg bg-gradient-to-r from-[#2c2c2d] to-[#1a1a1e] md:p-[20px] p-[25px] xl:max-w-full max-w-[600px]'>
                    <p className='sm:text-[20px] text-[16px] text-white '>We avoid the ordinary! We blend playfulness with a serious approach to create impactful projects, all tailored to give your company a unique voice.  From branding and digital ads to stunning websites and captivating visuals, we've got everything to elevate your story, design, and reach.</p>
                </DownToUp> */}
            </div>
            <div className='xl:max-w-[700px] max-w-[1200px]'>
                <ReviewSwiper />
            </div>
        </div>
    )
}

export default Reviews