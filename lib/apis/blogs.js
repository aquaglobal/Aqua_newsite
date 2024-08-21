import axios from "axios";

export async function getBlogs(page) {
    try {
        const data=await axios.get(`${process.env.BACKEND_URL}/api/blog/?published=true&page=${page}`);
        return data.data;
    } catch (error) {
        throw ('Error Getting Blogs')
    }
}

export async function getBlog(blogName) {
    try {
        const data=await axios.get(`${process.env.BACKEND_URL}/api/blog/slug/${blogName}`);
        return data.data;
    } catch (error) {
        throw ('Error Getting Blogs')
    }
}