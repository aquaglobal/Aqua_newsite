'use client';
import { useState, } from 'react';
import WorkCard from '../work/WorkCard';
import { useDisclosure } from '@mantine/hooks';
import { Drawer } from '@mantine/core';
import WorkDrawer from '../work/WorkDrawer';
const TabsComponent=({ categories, items }) => {
    const [selectedTab, setSelectedTab]=useState("All");
    const [opened, { open, close }]=useDisclosure(false);

    const [selectedProject, setSelectedProject]=useState(items[0])

    return (
        <>
            <div className='flex justify-center items-center h-full'>
                <div className=' flex flex-col gap-y-14 max-w-[1000px] w-full h-full'>
                    <div className=' h-[40px]  rounded-lg flex items-center justify-center font-bold text-white'>
                        {categories.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedTab(item)}
                                className={`outline-none h-full max-w-[150px] w-full rounded-lg text-center   ${selectedTab===item? ' bg-white text-blue-600':''
                                    } `}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-20 gap-y-8">
                        {items.map((project, index) => (
                            project.tags?.includes(selectedTab)&&(
                                <WorkCard
                                    title={project.name}
                                    techArr={project.techstack}
                                    smallDescription={project.solution}
                                    files={project.media}
                                    onClick={() => {
                                        setSelectedProject(project);
                                        open();
                                    }}
                                    key={index}
                                />
                            )
                        ))}
                    </div>
                </div>
            </div>
            <Drawer
                withCloseButton={false}
                position='right'
                opened={opened}
                onClose={close}
                size={"md"}
            >
                <WorkDrawer project={selectedProject} close={close} />
            </Drawer>
        </>
    );
};

export default TabsComponent;
