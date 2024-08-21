import { IoChevronBackCircleOutline } from "react-icons/io5";
import Image from "next/image";
const WorkDrawer=({ close, project }) => {
    return (
        <div className='space-y-10  '>
            <div className="space-y-4 sticky top-0 w-full z-30">
                <div className='flex justify-between items-center h-[40px]'>
                    <IoChevronBackCircleOutline className="text-3xl cursor-pointer" onClick={close} />
                    <p className="font-bold hover:underline cursor-pointer" onClick={close}>Back To Projects.</p>
                </div>
                <div className="w-full h-[1px] bg-slate-300"></div>
            </div>
            <div className="space-y-3">
                <div className="space-y-2">
                    <h2 className="text-3xl font-bold ">{project.name}</h2>
                    {/* <p className="text-md">Simplifies the use of React Query by offering a streamlined and centralized approach to managing queries and mutations. lore</p> */}
                </div>
                <div className="w-full flex justify-center">
                    <Image className="object-cover max-h-[400px] sm:max-w-[400px] rounded-lg" src={project.media.img[1]} alt={project.name} />
                </div>
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold ">Challenge</h2>
                    <p className="text-md">{project.challenge}</p>
                </div>
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold ">Solution</h2>
                    <p className="text-md">{project.solution}</p>
                </div>
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold ">Result</h2>
                    <p className="text-md">{project.result}</p>
                </div>

                <div className="space-y-2">
                    <h2 className="text-2xl font-bold ">Technologies</h2>
                    <div className="flex flex-wrap gap-3">
                        {project.techstack.map((tech, index) => (
                            <div key={index} className="p-2 bg-customGreen rounded-md flex items-center justify-center text-sm font-bold">
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkDrawer