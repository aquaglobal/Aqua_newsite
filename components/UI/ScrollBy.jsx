'use client'
import { useEffect } from "react"

const ScrollBy=({ children }) => {
    useEffect(() => {
        // Check if there is a hash in the URL
        if (window.location.hash) {
            // Scroll to the section with the given hash
            const element=document.querySelector(window.location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                // Adjust scroll position by adding 300 to the scrolled position
                window.scrollBy({ top: -100, behavior: "smooth" });
            }
        }
    }, []);
    return (
        <>
            {children}
        </>
    )
}

export default ScrollBy