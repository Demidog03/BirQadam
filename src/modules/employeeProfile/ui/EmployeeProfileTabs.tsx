import { FC, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/shadcnUI/tabs.tsx';
import RegisterForm from '@/modules/auth/ui/RegisterForm.tsx';
import MyLearningPathTab from "@/modules/employeeProfile/ui/MyLearningPathTab.tsx";

const learningPathData = [
    {
        "status": "In Progress",
        "id": 1,
        "title": "Fundamentals of Design Thinking",
        "instructor": "Instructor:Cristian White",
        "url": "https://s3-alpha-sig.figma.com/img/c9b5/6c79/9b021bfbc30f413de211098d3b0fd85e?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VWpoWnfTxIviISb9EzKe4PWjO09f5zfByxiWjqkcYyblk7g3Q-P~gO8iO8mhwqtf9TIo84nYSyKWT~FF9e5YsHSxUr-Kygs8oCl96jVmH7ArHBPCcU5kqUEq3v0A61MhvzDsjOj9ZLnqyuxdW4BrVQS4WbBKMGTaQair9bt~QS4PHESzgdYZq7kA1nVIp7v0W7o6-i5mV32oGaf3PzN0GA5VzgkUvR50K8IzVug7zNnO2h~ngCA6sv~iRKRhQg~8rLfGeq2dEQC7QrL5~p-9w9j6FtmJXdkFh2RYAQZk1JunLQ7lhbtaVe10d9Q3TaRt3laBKnV13z4ul5MoE-hmqg__",
    },
    {
        "status": "In Progress",
        "id": 2,
        "title": "Introduction to Product Management",
        "instructor": "Instructor:Robert Black",
        "url": "https://s3-alpha-sig.figma.com/img/a22e/3c6e/15be692a950abbb41fc412d12d9a4e25?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cRLF9maOBwXEviU8IYaiz-doykT1aWeGnNJExD92UguCdiD1IdD5pFMj-94GOvTo1d1CNL11z6FvHQkxKMINWEqmyVv7M-ywYwzjUw2HwvVkQr~MGqU8HhvXmIFGOdbYlad10ouh84K3rVt6i4CePYWfpY0tR~l1S77ErBNoXbRvZAO6-xZLTwau6jQChmoOrh2IVLgacu3B--DFsG8LJJb0Bthd3rUI-UunUNupelxWhxaHTHcFs7OzKieZ7WIduOhcCQzKWDnmAbDmYw3bH0QLdvePbe7y23B3iqAIqbwdjAFxS2-nVosfNXueQV-H1a9fEPD1oc3GIeg0E3qwyw__",
    },
    {
        "status": "Completed",
        "id": 3,
        "title": "User Research Methods",
        "instructor": "Instructor:Anaken Skywalker",
        "url": "https://s3-alpha-sig.figma.com/img/7a6d/5233/c01840a9e2e61499fcd06a7daf9fa3ff?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I1vPvN4UXMlVB8F2~0hsLdEGH8BYyLA1qajIw2LxnZ4wPb538z8~k8~Ws5XD9zfKddl7jxg1dQyFNdW04XmHvEG0cpJv1HtqWL15XZbmAKP28Zt1VjC2wvA-R~mtEc2wgUXn4jtHwVoi0HaO4MmVB11RUCdgDIqxJmVxKMk9Q8g6KMZc7Qwg5KkUgBRY0yA4x~j2HHsLakcce5F0zufFtTmjURgqMALh6z7VLNARieJZOsOcZBrHgmU8qw4WCLQnS7evfjVOvbf9E-h3DFyM61M9ZrajsrXkJhygiW3vNM9f9noeWu7PqQBCjfMKW0sPhtrMVP34yEq38pD48E95eA__",
    },
    {
        "status": "Completed",
        "id": 4,
        "title": "Wireframing and Prototyping",
        "instructor": "Instructor:Maise Windu",
        "url": "https://s3-alpha-sig.figma.com/img/e4a6/db3b/7bb868edcce87e8b749556d4846ae48a?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QZkc5WY~zAGLBOPUQDjTUA6lfxWxqSzYiRqx~4AVp1-YvSe4Nz37G0mjfGfmA4BAQleBiqCxTtCm9BSJkqSHSWtYoqBZvc0O2q7g8gYvCQobCgcGlWaYn7~CiD9sIlKWbGRcavQAcTIFLIKWKNZ3xb3~LWhgx6dZlk6u83yJNz-BlzwTHel1m1CqbY~cVMQwSl7lkUXEcXeeXRX3PFGyDYcFQtYj7Iz-ZA2EPMnCZru1jlBXpX8d44VJUmGn0MV7efnTHbCxK3j35XFdF2UBQpbc8Dww2XOXy4TOswRpEJtjCM5UUwiJET7lXwUoyNuAmGZ4NdxPTg1E3Ie0J1u0wA__",
    },
]
const EmployeeProfileTabs: FC = () => {
    const [value, setValue] = useState<string>('LearnPath')

    const onTabChange = (value: string) => {
        setValue(value);
    }

    return (
        <div className="flex flex-col w-full justify-center items-center gap-10">
            <Tabs className="w-full bg-transparent" value={value} onValueChange={onTabChange}>
                <TabsList className="grid w-full h-fit grid-cols-4 bg-transparent">
                    <TabsTrigger value="LearnPath" className={`border-b border-transparent ${value === 'LearnPath' ? 'border-b-4 border-blue-400' : ''} rounded-none`}>My learning Path</TabsTrigger>
                    <TabsTrigger value="Courses" className={`border-b border-transparent ${value === 'Courses' ? 'focus:border-b-4 focus:border-blue-400' : ''} rounded-none`}>Courses </TabsTrigger>
                    <TabsTrigger value="Quizzes" className={`border-b border-transparent ${value === 'Quizzes' ? 'focus:border-b-4 focus:border-blue-400' : ''} rounded-none`}>Quizzes </TabsTrigger>
                    <TabsTrigger value="Projects" className={`border-b border-transparent ${value === 'Projects' ? 'focus:border-b-4 focus:border-blue-400' : ''} rounded-none`}>Projects </TabsTrigger>
                </TabsList>
                <TabsContent value="LearnPath">
                    <MyLearningPathTab learningPathData={learningPathData}/>
                </TabsContent>
                <TabsContent value="Courses">
                    <RegisterForm setTab={setValue}/>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default EmployeeProfileTabs;