import { Loader } from "@mantine/core"
const Loading=() => {
    return (
        <div className='text-[10rem] text-white h-[calc(100vh-300px)] flex items-center justify-center '>
            <Loader color="#57b46a" size={'xl'} />
        </div>
    )
}

export default Loading