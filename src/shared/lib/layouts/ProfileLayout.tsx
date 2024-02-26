import { FC, ReactNode } from 'react';


const ProfileLayout: FC<{children: ReactNode}> = ({ children }) => {

    return (
        <div className="w-full h-full flex justify-center">
            <div className="w-full max-w-screen-lg px-4 space-y-4">
                {children}
            </div>
        </div>
    );
};

export default ProfileLayout;