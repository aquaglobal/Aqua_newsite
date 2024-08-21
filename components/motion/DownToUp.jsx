"use client";
import { motion } from "framer-motion";

const DownToUp=({ children, className, once }) => {
    return (
        <motion.div
            className={className}
            initial={{ y: 50, opacity: 0, x: 0 }}
            whileInView={{
                y: 0,
                opacity: 1,
                x: 0
            }}
            transition={{
                duration: 1,
                type: 'spring'
            }}
            viewport={{ once: once? once:false }}
        >
            {children}
        </motion.div>
    )
}

export default DownToUp