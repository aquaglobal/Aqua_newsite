'use client'
import Image from "next/image"
import { CardBody, CardContainer, CardItem } from "../../UI/3d-Card";
import Heading from "@/components/UI/Heading";
const ServiceCard=({ title, content, image }) => {
    return (
        <CardContainer className="inter-var">
            <CardBody className="relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] bg-black border-white/[0.2] w-auto sm:w-[25rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                    translateZ="50"
                    className="text-[28px] w-full text-center "
                >
                    <Heading
                        once={true}
                    >
                        {title}
                    </Heading>
                </CardItem>
                <CardItem translateZ="100" className="w-full flex items-center justify-center">
                    <Image
                        src={image}
                        height="500"
                        width="500"
                        className="max-w-[300px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-white text-[17px] max-w-sm mt-5 text-center w-full"
                >
                    {content}
                </CardItem>
            </CardBody>
        </CardContainer>
    )
}

export default ServiceCard