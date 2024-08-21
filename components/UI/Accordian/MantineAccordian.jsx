'use client'
import { Accordion } from '@mantine/core';
import AccordianHeading from './AccordianHeading';
import AccordianPanel from './AccordianPanel';
import { IoIosArrowDown } from "react-icons/io";
import './accordian.css'

const MantineAccordian=({ data, ...props }) => {
    const items=data.map((dat) => (
        <Accordion.Item
            key={dat._id}
            value={dat._id}
        >
            <Accordion.Control>
                <AccordianHeading
                    name={dat.position}
                // place={dat.location}
                />
            </Accordion.Control>
            <Accordion.Panel>
                <AccordianPanel
                    heading={dat.heading}
                    description={dat.description}
                    requirements={dat.requirements}
                    responsibilities={dat.responsibilities}
                />
            </Accordion.Panel>
        </Accordion.Item>
    ));

    return (
        <Accordion
            chevronSize={40}
            chevron={<IoIosArrowDown className='text-white text-[30px]' />}
            {...props}
        >
            {items}
        </Accordion>
    )
}

export default MantineAccordian