'use client'
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "@/lib/motionVariants";

const StaggerElement=({ children, className, index, once }) => {
    return (
        <motion.div
            className={className}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            custom={index}
            viewport={{ once: once? once:false }}
        >
            {children}
        </motion.div>
    )
}

export default StaggerElement