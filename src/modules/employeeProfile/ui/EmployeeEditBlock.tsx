import { FC } from 'react';
import {Card} from "@/shared/shadcnUI/card.tsx";
import {Button} from "@/shared/shadcnUI/button.tsx";

interface ProfileEditInterface {
    imageSrc: string
    firstName: string
    lastName: string
    position: string
    company: string
}

const EmployeeEditBlock: FC<ProfileEditInterface> = ({ imageSrc, firstName, lastName, position, company }) => {
    return (
        <div className="w-full">
        <Card className="flex gap-4 items-center w-full p-[20px] border-0 shadow-none rounded-none">
            <div className="flex justify-between w-full">
                <div className="flex items-center">
                    <img className="w-[90px] h-[82px] rounded-[50px] object-cover" src={imageSrc} alt={imageSrc}/>
                    <div className="ml-4">
                        <p className="font-public-sans font-bold text-22 leading-27.5 tracking-wide text-black">{firstName} {lastName}</p>
                        <div className="font-public-sans font-normal text-16 leading-24 text-[#4F7596]">
                            <p>Product Manager at Acme Co {position}</p>
                            <p>San Francisco, CA {company}</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    <Button className="w-10 px-14 bg-[#E8EDF2] text-black rounded-xl hover:text-white">
                        Edit Profile
                    </Button>
                </div>
            </div>
        </Card>
        </div>
    )
}

export default EmployeeEditBlock
