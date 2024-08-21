import BgLeftCircle from '@/components/UI/BgLeftCircle'
import BgRightCircle from '@/components/UI/BgRightCircle'
import WorkHead from '@/components/work/WorkHead'
import WorkTabs from '@/components/work/WorkTabs'
const page=() => {
    return (
        <main className='flex flex-col'>
            <section className='flex justify-center  w-full px-5'>
                <BgLeftCircle position={"mt-[-10rem]"} />
                <WorkHead />
                <BgRightCircle position={"mt-[20rem]"} />
            </section>
            <section className='flex justify-center  w-full px-10  mb-20 mt-10'>
                <BgLeftCircle position={"mt-[20rem]"} />
                <WorkTabs />
            </section>
        </main>
    )
}

export default page