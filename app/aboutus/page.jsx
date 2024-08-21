import AboutUs from '@/components/aboutUs/AboutUs'
import Values from '@/components/aboutUs/Values'
import JoinTeam from '@/components/aboutUs/JoinTeam'
import Team from '@/components/main/team/Team'
import BgLeftCircle from '@/components/UI/BgLeftCircle'
import BgRightCircle from '@/components/UI/BgRightCircle'
const page=() => {
    return (
        <main>
            <section className="flex items-center justify-center xl:h-[700px]">
                <BgLeftCircle position={"mb-[35rem]"} />
                <AboutUs />
                <BgRightCircle position={"mt-[35rem]"} />
            </section>
            <section className='bg-gradient-to-r from-[#2c2c2d] to-[#1a1a1e] flex items-center justify-center'>
                <Values />
            </section>
            <section className="flex justify-center items-center sm:px-10 px-5 mb-20">
                <BgLeftCircle position={"mb-[35rem]"} />
                <Team />
                <BgRightCircle position={"mt-[50rem]"} />
            </section>
            <section className=''>
                <BgLeftCircle position={"mt-[8rem]"} />
                <JoinTeam />
            </section>
        </main>
    )
}

export default page