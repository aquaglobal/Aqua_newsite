import React from 'react'
import { motion } from "framer-motion";
import { mobileLinkVars } from '@/lib/motionVariants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const MobileNavLink=({ title, href }) => {
    const pathname=usePathname();
    return (
        <motion.div
            variants={mobileLinkVars}
            className={`text-4xl uppercase ${pathname===href? 'text-customGreen':''}`}
        >
            <Link href={href}>{title}</Link>
        </motion.div>
    );
};

export default MobileNavLink
