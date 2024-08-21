import ComingSoon from "@/components/ComingSoon"
import BlogsHead from "@/components/blogs/BlogsHead"
import AllBlogs from "@/components/blogs/AllBlogs"
const page=() => {
    return (
        <main>
            {/* <div className="flex justify-center sm:px-10 px-5 py-10">
                <ComingSoon />
            </div> */}
            <BlogsHead />
            <AllBlogs />
        </main>
    )
}

export default page