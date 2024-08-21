import BgLeftCircle from '@/components/UI/BgLeftCircle'
import BgRightCircle from '@/components/UI/BgRightCircle'
import Careers from '@/components/careers/Careers'
import OpenPositions from '@/components/careers/OpenPositions'
const page=() => {
    return (
        <main className='flex flex-col'>
            <section className='flex justify-center  w-full px-10'>
                <BgLeftCircle position={"mt-[-10rem]"} />
                <Careers />
                <BgRightCircle position={"mt-[20rem]"} />
            </section>
            <section className='flex justify-center  w-full px-10  mb-20'>
                <BgLeftCircle position={"mt-[20rem]"} />
                <OpenPositions />
            </section>
        </main>
    )
}

export default page