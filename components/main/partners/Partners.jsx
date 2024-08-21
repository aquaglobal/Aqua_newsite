import { ourPartners } from "@/lib/data"
import Image from "next/image"
import DownToUp from "@/components/motion/DownToUp"
import StaggerElement from "@/components/motion/StaggerElement";
import Heading from "@/components/UI/Heading";
const Partners=() => {
    return (
        <div className="flex flex-col items-center justify-center gap-y-16">

            <Heading className={"text-[36px]"}>
                Proud Partners :
            </Heading>
            <div className="flex flex-wrap items-center justify-center md:gap-x-32 sm:gap-x-20 gap-x-10 md:gap-y-0 gap-y-10 max-w-[900px]">
                {ourPartners.map((partner, index) => (
                    <StaggerElement
                        key={index}
                        className="sm:max-w-[200px] max-w-[100px]"
                        index={index}
                    >
                        <Image src={partner.icon} alt="Partners" />
                    </StaggerElement>
                ))}
            </div>
        </div>
    )
}

export default Partners