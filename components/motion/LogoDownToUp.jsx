"use client";

import { motion } from "framer-motion";

const LogoDownToUp=({ children }) => {
    return (
        <motion.div
            className={"flex"}
            initial={{ y: 20, opacity: 0, x: 0 }}
            whileInView={{
                y: 0,
                opacity: 1,
                x: 0
            }}
            transition={{
                duration: 0.5,
            }}
            viewport={{ once: false }}
        >
            {children}
        </motion.div>
    )
}

export default LogoDownToUp