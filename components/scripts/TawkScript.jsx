'use client'
import { useEffect } from "react"
const TawkScript=({ children }) => {
    useEffect(() => {
        // Load Tawk.to script
        const tawkScript=document.createElement("script");
        tawkScript.type="text/javascript";
        tawkScript.async=true;
        tawkScript.src='https://embed.tawk.to/661fddc1a0c6737bd12d1350/1hrm7kfpd';
        tawkScript.charset='UTF-8';
        tawkScript.setAttribute('crossorigin', '*');
        document.body.appendChild(tawkScript);

        return () => {
            // Cleanup function
            document.body.removeChild(tawkScript);
        };
    }, []);
    return (
        <>
            {children}
        </>
    )
}

export default TawkScript