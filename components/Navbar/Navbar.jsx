'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from "framer-motion";
import { links } from '@/lib/data'
import { RxHamburgerMenu } from "react-icons/rx";
import { useState, useEffect } from 'react'
import MobileNav from './MobileNav'
import logo from '../../public/logo.svg'
import CustomLink from '../UI/CustomLink';
import CalendlyButton from '../UI/Buttons/CalendlyButton';
const Navbar=() => {
    const pathname=usePathname();
    const [open, setOpen]=useState(false);

    const toggleMenu=() => {
        setOpen((prevOpen) => !prevOpen);
    };


    // const [isScrolled, setIsScrolled]=useState(pathname==='/'? false:true);

    // const handleScroll=() => {
    //     if (pathname==='/') {
    //         setIsScrolled(window.scrollY>0); // Update state based on scroll position
    //     } else {
    //         setIsScrolled(true);
    //     }
    // };

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, [isScrolled]);

    // useEffect(() => {
    //     pathname=='/'? setIsScrolled(() => false):setIsScrolled(() => true);
    // }, [pathname])

    return (
        <nav
            className={`nav flex items-center justify-center sticky top-0 z-30 bg-[#000000bf] h-[70px] transition ease-in-out delay-350`}
        >
            <div className='flex items-center justify-between w-full max-w-[1300px] px-5'>
                <Link className={`cursor-pointer lg:max-w-[250px] max-w-[200px] z-50`} href={"/"}>
                    <Image src={logo} alt={"Aqua Globals System Logo"} />
                </Link>
                <div className={` lg:gap-x-[40px] gap-x-[30px]  min-[972px]:flex hidden items-center justify-center`}>
                    {links.map((link, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.1 }}>
                            <Link
                                className={`${pathname.includes(link.href)? "text-customGreen":"text-[#9ca1a5]"}  text-[13px]  font-[600]  hover:text-customGreen`}
                                href={link.href}>
                                {link.text}
                            </Link>
                        </motion.div>
                    ))}
                    {/* <div className='flex space-x-2 ml-2'>
                        <CustomLink
                            href={"/contact"}
                        >
                            Book a free discovery call
                        </CustomLink>
                    </div> */}

                </div>
                <div className='min-[972px]:block hidden'>
                    <CalendlyButton />
                </div>
                <div
                    onClick={toggleMenu}
                    className={`min-[972px]:hidden  block ml-auto sm:pr-[40px] pr-[15px]`}>
                    <RxHamburgerMenu className='w-7 h-7 text-white' />
                </div>
            </div>
            <AnimatePresence>
                {open&&(
                    <MobileNav toggleMenu={toggleMenu} />
                )}
            </AnimatePresence>
        </nav>
    )
}

export default Navbar

