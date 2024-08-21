
import Hero from "@/components/main/hero/Hero";
import Services from "@/components/main/services/Services";
import Team from "@/components/main/team/Team";
import WhoAreWe from "@/components/main/whoAreWe/WhoAreWe";
import Gss from "@/components/main/gss/Gss";
import BgRightCircle from "@/components/UI/BgRightCircle";
import BgLeftCircle from "@/components/UI/BgLeftCircle";
import Reviews from "@/components/main/reviews/Reviews";
import Contact from "@/components/main/contactUs/Contact";
import Partners from "@/components/main/partners/Partners";
import WhyUs from "@/components/services/WhyUs";

export default function Home() {
  return (
    <main className="flex flex-col  gap-y-[7rem]">
      <section className="w-full h-[calc(100vh-100px)]">
        <Hero />
      </section>
      <section className="flex justify-center">
        <BgLeftCircle position={"mt-[45rem]"} />
        <WhoAreWe />
      </section>
      <section className="px-5">
        <Partners />
      </section>
      <section className="flex justify-center  w-full px-10">
        <Services />
        <BgRightCircle position={"mt-[10rem]"} />
      </section>
      <section className="flex justify-center">
        <BgLeftCircle position={"mt-[-20rem]"} />
        <Reviews />
        <BgRightCircle position={"mt-[10rem]"} />
      </section>
      <section className='flex justify-center  sm:px-10 px-5'>
        <BgLeftCircle position={""} />
        <WhyUs />
      </section>
      <section className="flex justify-center mt-10">
        <BgRightCircle position={"mt-[-12rem]"} />
        <Gss />
      </section>
      <section className="flex justify-center  w-full sm:px-10 px-5">
        <BgLeftCircle position={"mt-[-14rem]"} />
        <Team />
        <BgRightCircle position={"mt-[20rem] sm:block hidden"} />
      </section>
      <section id="contact" className="flex justify-center  w-full sm:px-10 px-5">
        <BgLeftCircle position={"mt-[-10rem]"} />
        <Contact />
        <BgRightCircle position={"mt-[30rem]"} />
      </section>
    </main>
  );
}
