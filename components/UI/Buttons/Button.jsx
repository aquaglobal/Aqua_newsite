
const Button=({ children, width, ...props }) => {
    return (
        <button
            className={`h-[50px] ${width} text-[16px] font-[600] uppercase  rounded-lg  transition ease-in-out duration-700 bg-customGreen hover:bg-[#2c2c2d] border border-customGreen hover:border-white text-white  flex items-center justify-center`}
            {...props}
        >
            {children}
        </button>
    )
}

export default Button