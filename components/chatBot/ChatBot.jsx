'use client'
import ChatIcon from "./ChatIcon"
import { Menu, Button, Text, rem } from '@mantine/core';
import aqua from "../../public/aquaEarth.svg"
import Image from "next/image";
import Message from "./Message";
import { useEffect, useState, useRef } from "react";
import { IoMdSend } from "react-icons/io";
import { postLead } from "@/lib/apis/ContactForm";
import loading from "../../public/lottieAnimations/loading.json"
import Lottie from "lottie-react";

const ChatBot=() => {
    const containerRef=useRef(null);
    const [message, setMessage]=useState("");
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [index, setIndex]=useState(0);
    const [currValue, setValue]=useState("")
    const [placeholder, setPlaceholder]=useState("your name")

    const [isLoading, setIsLoading]=useState(false);

    const isValidEmail=(email) => {
        const emailRegex=/^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    const setData=(index, value) => {
        if (index===0) {
            setName(value);
            setIndex(1);
            setPlaceholder("email@gmail.com");
        } else if (index===1) {
            if (isValidEmail(value)) {
                setEmail(value);
                setIndex(2);
                setPlaceholder("message...");
            } else {
                alert("Invalid email address");
                return; // Don't proceed further
            }
        } else {
            setMessage(value);
            setIsLoading(true);
            setPlaceholder("");
        }
        setValue("");
    }

    const submitForm=async () => {
        try {
            console.log("inside the submitform: ", message)
            const data=await postLead({ name: name, email: email, message: message });
            if (!data.error) {
                setIndex(3);
                setIsLoading(false);
            } else {
                setIsLoading(false);
                alert("Something Went wrong");
            }
        } catch (error) {
            alert("Something Went wrong");
        }
    }

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop=containerRef.current.scrollHeight;
        }
        if (index===2) {
            submitForm();
        }
    }, [message])

    return (
        <Menu shadow="md">
            <Menu.Target>
                <button>
                    <ChatIcon />
                </button>
            </Menu.Target>
            <Menu.Dropdown className="!p-0 !border-0">
                <div className="w-[300px]">
                    <div className="h-14 bg-[#000000bf] nav flex items-center gap-x-3 px-2">
                        <div className="max-w-[40px]" >
                            <Image className="max-w-[40px]" src={aqua} alt="aqua support" />
                        </div>
                        <div className=" text-white">
                            <p className="text-md">Aqua Global Systems</p>
                            <p className="text-sm font-bold ">Support</p>
                        </div>
                    </div>
                    <div ref={containerRef} className="p-1 overflow-y-auto space-y-2 h-[400px] flex flex-col">
                        <Message>
                            Welcome to Aqua Global Systems.
                            I am here to assist you.
                        </Message>
                        <Message>
                            May I please have your name?
                        </Message>
                        {(index>=1)&&(
                            <Message byUser={true}>
                                {name}
                            </Message>
                        )}
                        {(index>=1)&&name&&(
                            <Message>
                                Please enter your email.
                            </Message>
                        )}
                        {(index>=2)&&(
                            <Message byUser={true}>
                                {email}
                            </Message>
                        )}
                        {(index>=2)&&email&&(
                            <Message>
                                Please describe your requirement
                            </Message>
                        )}
                        {index===3&&message&&(
                            <Message byUser={true}>
                                {message}
                            </Message>
                        )}
                        {isLoading&&(
                            <Lottie className="w-14 text-6xl" animationData={loading} loop={true} />
                        )}
                        {index===3&&message&&(
                            <Message>
                                Thankyou for your query. We will contact you as soon as possible. &#x1F60A;
                            </Message>
                        )}
                    </div>
                    <div className="flex items-center ">
                        <input
                            disabled={index===3}
                            value={currValue}
                            onChange={(e) => setValue(e.target.value)}
                            className="w-full p-2 focus:outline-none focus:border-transparent"
                            placeholder={placeholder}
                            type="text"
                            onKeyDown={(event) => {
                                if (event.key==="Enter") {
                                    setData(index, currValue)
                                }
                            }}
                        />
                        <button
                            disabled={index===3}
                            onClick={() => setData(index, currValue)}
                        ><IoMdSend className="text-2xl" /></button>
                    </div>
                </div>
            </Menu.Dropdown>
        </Menu>
    )
}

export default ChatBot