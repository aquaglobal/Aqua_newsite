'use client'
import ValueCard from '../services/ValueCard'
import HeadingLeft from '../UI/HeadingLeft'
import { FaBalanceScale } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import StaggerElement from '../motion/StaggerElement';
import { FaPeopleGroup } from "react-icons/fa6";

export const aboutUsvalues=[
    {
        title: "Integrity",
        description: "We uphold the highest standards of integrity and ethics, ensuring transparency, honesty, and trustworthiness in every interaction.",
        color: '#9b51e0',
        icon: <FaBalanceScale />

    },
    {
        title: "Client-Centric",
        description: "At the core of our values lies a commitment to delivering on our clients' expectations. Every action we take is driven by the goal of exceeding them.",
        color: '#56ccf2',
        icon: <FaHandHoldingHeart />
    },
    {
        title: "Innovation",
        description: "Embracing a spirit of innovation. We continuously seek creative and practical solutions to address the evolving needs of our clients.",
        color: '#ebb512',
        icon: <FaBrain />
    },
    {
        title: "Diversity",
        description: "We thrive on the richness of our diverse backgrounds, experiences, and ideas. This variety fuels creativity and strengthens our team.",
        color: '#FF5733',
        icon: <FaPeopleGroup />
    },

]
const Values=() => {
    return (
        <div className=' h-full flex flex-col gap-y-[1rem] items-center justify-center sm:px-10 sm:py-20 py-10 '>
            <div className='flex flex-col items-center justify-center gap-y-20'>
                <div className=' text-center'>
                    <HeadingLeft
                        underlineWidth={"300px"}
                        heading={"Our Core Values"}
                    />
                </div>
                <div className='flex flex-wrap gap-x-20 gap-y-10 items-center justify-center'>
                    {
                        aboutUsvalues.map((value, index) => (
                            <StaggerElement
                                key={index}
                                index={index}
                                once={true}
                            >
                                <ValueCard
                                    color={value.color}
                                    key={index}
                                    description={value.description}
                                    icon={value.icon}
                                    title={value.title}
                                />
                            </StaggerElement>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Values