"use client";
import { motion } from "framer-motion";

const ImageSize=({ children, className }) => {
    return (
        <motion.div
            className={className}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
                duration: 1.7,
                type: 'spring'
            }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    )
}

export default ImageSize