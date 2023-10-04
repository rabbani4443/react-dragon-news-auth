import { AiOutlineGoogle, AiFillGithub, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
import bg from '../../../assets/bg.png'

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4">
                <h1 className="text-xl font-semibold mb-5">Login With</h1>
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
            <div className="p-4">
                <h1 className="text-xl font-semibold mb-5">Find Us On</h1>
                <div className="pt-2 text-base font-medium space-y-3 border-2 rounded-lg px-4">
                    <div className='flex items-center gap-2 py-4 border-b-2 border-gray-200 hover:text-sky-800 hover:cursor-pointer'>
                        <span className='text-xl text-sky-800'> <BiLogoFacebook></BiLogoFacebook> </span>
                        <p className=""> Facebook</p>
                    </div>
                    <div className='flex items-center gap-2 pb-4 border-b-2 border-gray-200 hover:text-sky-600  hover:cursor-pointer'>
                        <span className='text-xl text-sky-600'> <AiOutlineTwitter></AiOutlineTwitter> </span>
                        <p className=""> Twitter </p>
                    </div>
                    <div className='flex items-center gap-2 pb-4  hover:text-pink-500  hover:cursor-pointer'>
                        <span className='text-xl text-pink-500'> <AiOutlineInstagram></AiOutlineInstagram> </span>
                        <p className=""> Instagram </p>
                    </div>

                </div>
            </div>
            <div className='p-4 '>
                <div className='bg-gray-100 rounded-lg'>
                    <h1 className="text-xl font-semibold  p-5">Q-Zone</h1>
                    <img src={qZone1} alt="" />
                    <img src={qZone2} alt="" />
                    <img src={qZone3} alt="" />
                </div>
            </div>
            <div className='w-full p-4 '>
                <div className=" hero min-h-screen" style={{ backgroundImage: `url(${bg})`}}>
                    <div className="hero-overlay bg-opacity-0"></div>
                    <div className="hero-content w-full text-center text-neutral-content">
                        <div className="w-full">
                            <h1 className="mb-5 text-3xl leading-normal font-bold">Create an Amazing Newspaper</h1>
                            <p className="mb-5 leading-8">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                            <button className="btn btn-secondary">Learn More</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RightSideNav;