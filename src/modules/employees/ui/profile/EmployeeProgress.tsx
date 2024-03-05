import { FC } from 'react';
import ContentWithTitleLayout from "@/shared/lib/layouts/ContentWithTitleLayout.tsx";

interface ProfileEditInterface {
    completedCoursesCount: number
    averageScore: number
}

const EmployeeProgress: FC<ProfileEditInterface> = ({ completedCoursesCount , averageScore}) => {
    return (
        <div className="w-full flex pb-0">
            <div className="w-1/2 mr-2 border-1 border-gray-300">
                    <ContentWithTitleLayout title='Courses Completed' className={"border border-gray-300 py-6 pb-6 rounded-xl"}>
                        <div className="ml-4 font-bold text-3xl leading-10 tracking-tight text-gray-800">
                            <p>{completedCoursesCount}</p>
                        </div>
                    </ContentWithTitleLayout>
            </div>
            <div className="w-1/2 ml-2">
                <ContentWithTitleLayout title="Average Score" className={"border border-gray-300 py-6 pb-6 rounded-xl text-gray-800"}>
                    <div className="ml-4 font-bold text-3xl leading-10 tracking-tight text-gray-800">
                        <p>{averageScore} %</p>
                    </div>
                </ContentWithTitleLayout>
            </div>
        </div>
    )
}

export default EmployeeProgress
