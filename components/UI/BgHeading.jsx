'use client'
import { motion } from "framer-motion"
const BgHeading=({ heading }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
                opacity: 0.1
            }}
            transition={{
                duration: 3,
            }}
            viewport={{ once: true }}
            className={` text-transparent bg-clip-text bg-gradient-to-r from-customGreen  to-customBlue`}>
            <p className='sm:text-[120px] text-[50px] font-[900] '>{heading}</p>
        </motion.div>
    )
}

export default BgHeading