import Button from "../Buttons/Button"
import Link from "next/link"
const AccordianPanel=({ heading, description, responsibilities, requirements }) => {
    return (
        <div className='flex flex-col gap-y-8 text-white'>
            <div className='flex flex-col gap-y-3'>
                <h2 className="text-[18px] font-bold">{heading}</h2>
                <p>{description}</p>
            </div>
            <div className='flex flex-col gap-y-3 text-[16px]'>
                <h2 className="font-bold">Responsibilities:</h2>
                <ul className="ml-5">
                    {responsibilities.map((respo, index) => (
                        <li key={index}>{respo}</li>
                    ))}
                </ul>
            </div>
            <div className='flex flex-col gap-y-3'>
                <h2 className="font-bold">Requirements:</h2>
                <ul className="ml-5">
                    {requirements.map((respo, index) => (
                        <li key={index}>{respo}</li>
                    ))}
                </ul>
            </div>
            <Link
                href={"mailto:info@aquaglobalsystems.com"}
            >
                <Button
                    width={"w-[200px]"}
                >
                    Apply
                </Button>
            </Link>
        </div>
    )
}

export default AccordianPanel