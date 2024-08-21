const GradientSpan=({ children }) => {
    return (
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-100 via-green-300  to-blue-400 uppercase'>
            {children}
        </span>
    )
}
export default GradientSpan