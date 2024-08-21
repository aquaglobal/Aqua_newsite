import DownToUp from "../motion/DownToUp"
const Heading=({ children, className, once, maxWidth }) => {
    return (
        <DownToUp
            once={once}
        >
            <h2
                className={`${maxWidth}`}
            >
                <span className={`${className} font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#85c9fe] via-[#b3dbfa] to-[#2c5d83] `}>{children}</span>
            </h2>
        </DownToUp>
    )
}

export default Heading