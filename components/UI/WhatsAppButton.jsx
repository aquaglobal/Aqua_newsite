import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa6'
const WhatsAppButton=() => {
    return (
        <Link
            target="_blank"
            href={"https://wa.me/13015737711?text="}
            className="w-14 h-14  rounded-full bg-[#27d045] p-1 cursor-pointer">
            <FaWhatsapp className="w-full h-full text-white" />
        </Link>
    )
}

export default WhatsAppButton