import DownToUp from "../motion/DownToUp"
import Button from "../UI/Buttons/Button"
import Link from "next/link"
import Heading from "../UI/Heading"
const JoinTeam=() => {
    return (
        <div className=" bg-gradient-to-r  from-[#2c2c2d] to-[#1a1a1e] flex flex-col gap-y-8  items-center justify-center p-10 mb-20 sm:static relative">
            <Heading className="sm:text-[70px] text-[50px] font-[600]  tracking-[0.5rem]" maxWidth={"text-center"}>Join Our Team</Heading>
            <div className="">
                <p className="text-white sm:text-[25px] text-[20px] font-[700] text-center max-w-[80rem]">
                    Want to join our team and add a splash of awesomeness to your 9 to 5?
                    <br className="sm:block hidden" />
                    We promise, it's the coolest desk in town!
                </p>
            </div>
            <div className="w-full flex justify-center">
                <Link
                    href={"/careers"}
                >
                    <Button
                        width={" w-[250px]"}
                    >
                        Work With Us
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default JoinTeam