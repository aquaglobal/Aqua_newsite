"use client";
import { motion } from "framer-motion";


const FadeInLeftHeading=({ children, className }) => {
    return (
        <motion.div
            className={className}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{
                x: 0,
                opacity: 1
            }}
            transition={{
                duration: 1.5,
                type: 'just'
            }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    )
}

export default FadeInLeftHeading