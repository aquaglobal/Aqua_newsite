'use client'
import React from 'react'
import { menuVars, containerVars } from '@/lib/motionVariants'
import { motion } from "framer-motion";
import { RxCross1 } from "react-icons/rx";
import MobileNavLink from './MobileNavLink';
import { mobilelinks } from '@/lib/data';
const MobileNav=({ toggleMenu }) => {
    return (
        <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-0 w-full h-screen origin-top bg-black text-primary p-10 z-10 flex justify-center"
        >
            <div className='flex flex-col '>
                <div
                    onClick={toggleMenu}
                    className='absolute right-4'>
                    <RxCross1 className='w-7 h-7 text-primary' />
                </div>
                <motion.div
                    variants={containerVars}
                    initial="initial"
                    animate="open"
                    exit="initial"
                    className="flex flex-col h-full justify-center font-[Raleway] items-center gap-4 "
                >
                    <div
                        onClick={toggleMenu}
                        className="overflow-hidden">
                        <MobileNavLink
                            title={"Home"}
                            href={"/"}
                        />
                    </div>
                    {mobilelinks.map((link, index) => (

                        <div
                            onClick={toggleMenu}
                            key={index} className="overflow-hidden">
                            <MobileNavLink
                                key={index}
                                title={link.text}
                                href={link.href}
                            />
                        </div>

                    ))}

                </motion.div>
            </div>
        </motion.div>
    )
}

export default MobileNav