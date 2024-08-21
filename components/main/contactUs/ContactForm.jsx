'use client'
import { Input } from '@mantine/core';
import { Textarea } from '@mantine/core';
import { useState } from 'react';
import { useFormik } from 'formik';
import { postLead } from '@/lib/apis/ContactForm';
import { Loader } from '@mantine/core';
import Button from '@/components/UI/Buttons/Button';
import toast from 'react-hot-toast';
const ContactForm=() => {

    const [loading, setLoading]=useState(false);
    const initialValues={
        name: "",
        email: "",
        message: ""
    }

    const formik=useFormik({
        initialValues,
        onSubmit: async (values) => {
            try {
                setLoading(true);
                const data=await postLead(values);
                if (!data.error) {
                    setLoading(false);
                    formik.handleReset();
                    toast.success("We will contact you soon!");
                } else {
                    setLoading(false);
                    toast.error("Something Went wrong");
                }
            } catch (error) {
                setLoading(false);
                toast.error("Something Went wrong");
            }
        }
    })

    return (
        <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col  gap-y-5 w-full ">
            <div className='flex sm:flex-row flex-col sm:gap-y-0 gap-y-5 gap-x-10'>
                <div className="flex w-full flex-col gap-y-3">
                    <label className='text-white' htmlFor="name">Full Name</label>
                    <Input
                        size="md"
                        className=''
                        name='name'
                        placeholder="Your Name"
                        id='name'
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                    />
                </div>
                <div className="flex w-full flex-col gap-y-3 ">
                    <label className='text-white' htmlFor="email">Email Address</label>
                    <Input
                        size="md"
                        type='email'
                        className=''
                        placeholder="Your@mail.com"
                        id='email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        required
                    />
                </div>
            </div>
            <div className="flex flex-col gap-y-3 ">
                <label
                    className='text-white '
                    htmlFor="message">Your Message</label>
                <Textarea
                    id='message'
                    name='message'
                    // className='bg-[#616467]'
                    rows={8}
                    placeholder="Write Your Message Here"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    required
                />
            </div>
            <div className='flex items-center justify-center'>
                <Button
                    width={"w-[200px]"}
                    disabled={loading}
                    type='submit'>
                    {loading? <Loader color="#FFFFFF" size={'sm'} />:"Lets Talk"}
                </Button>
            </div>
        </form>
    )
}

export default ContactForm