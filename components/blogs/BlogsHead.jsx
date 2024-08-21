import bgImage from "../../public/blogs/blogsbg1.jpg"
import Image from "next/image"
import Heading from "../UI/Heading"
const BlogsHead=() => {
    return (
        <div className="w-full sm:h-[350px] h-[250px] relative">
            <div className="absolute flex flex-col items-center justify-center w-full h-full">
                <Heading maxWidth={"text-center"} className={"sm:text-6xl text-3xl"}>Discover Stories That Interest You</Heading>
                <p className="sm:text-5xl text-2xl font-[600] text-white text-center">We are hungry for knowledge</p>
            </div>
            <div>
                <Image src={bgImage} className="object-cover sm:max-h-[350px] max-h-[250px] w-full" />
            </div>
        </div>
    )
}

export default BlogsHead