import { IoStarSharp } from "react-icons/io5";
import Heading from "@/components/UI/Heading";
const ReviewCard=({ name, review }) => {
    return (
        <div className='w-[250px] max-h-[400px]  rounded-lg shadow-2xl bg-gradient-to-r from-[#2c2c2d] to-[#1a1a1e] flex justify-center flex-col gap-y-5 p-5'>
            <Heading once={true} className='sm:text-[25px] text-[20px] '>{name}</Heading>
            <div className="flex gap-x-2">
                {[1, 2, 3, 4, 5].map((start, index) => (
                    <IoStarSharp
                        className="text-xl text-black bg-gradient-to-r from-customGreen via-blue-400 to-customBlue rounded-full"
                        key={index}
                    />
                ))}
            </div>
            <p className="break-words text-white ">
                {review}
            </p>
        </div>
    )
}

export default ReviewCard