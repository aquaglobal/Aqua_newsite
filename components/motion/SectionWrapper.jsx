"use client";

import { motion, AnimatePresence } from "framer-motion";

export const SectionWrapper=({ children, className }) => (
    <>
        <AnimatePresence>
            <motion.section
                className={className}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 15 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ delay: 0.25 }}
                viewport={{ once: false }}
            >
                {children}
            </motion.section>
        </AnimatePresence>
    </>
);