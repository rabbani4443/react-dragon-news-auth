import { AiOutlineGoogle,AiFillGithub } from 'react-icons/ai';

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4">
                <h1 className="text-xl font-semibold ">Login With</h1>
                <div className="pt-2 text-base font-medium space-y-3">
                    <div className='flex justify-center items-center gap-3 border-2 border-gray-500 rounded-lg py-1 hover:text-blue-600 hover:border-blue-600 hover:cursor-pointer'>
                    <span> <AiOutlineGoogle></AiOutlineGoogle> </span>
                        <p className=""> Login with Google</p>
                    </div>
                    <div className='flex justify-center items-center gap-3 border-2 border-gray-500 rounded-lg py-1 hover:text-blue-600 hover:border-blue-600 hover:cursor-pointer'>
                    <span> <AiFillGithub></AiFillGithub> </span>
                        <p className=""> Login with Github</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;