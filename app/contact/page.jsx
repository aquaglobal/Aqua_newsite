import ContactUs from '@/components/contact/ContactUs'
import GetInToch from '@/components/contact/GetInToch'
import BgLeftCircle from '@/components/UI/BgLeftCircle'
import BgRightCircle from '@/components/UI/BgRightCircle'
const page=() => {
    return (
        <main className='flex flex-col'>
            <section className='flex justify-center  w-full px-10'>
                <BgLeftCircle position={"mt-[-10rem]"} />
                <ContactUs />
            </section>
            <section></section>
            <section id='' className='pb-20 px-8 flex justify-center'>
                <GetInToch />
                <BgRightCircle position={"mt-[20rem]"} />
            </section>
            {/* <section className='max-w-[1800px]  sm:h-[calc(100vh-100px)] w-full flex items-center justify-center bg-[#394867]'>
                <ContactForm />
            </section> */}
        </main>
    )
}

export default page