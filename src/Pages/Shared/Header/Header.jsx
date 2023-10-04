import logo from '../../../assets/logo.png'
import moment from "moment/moment";

const Header = () => {
    return (
        <div className='text-center'>
        <div className="">
            <img className='mx-auto' src={logo} alt="" />
        </div>
        <h3 className="text-lg  py-3 opacity-90 ">Journalism Without Fear or Favour</h3>
        <div className='pb-4'>
            <h2 className="text-xl font-medium" > {moment().format('dddd,MMMM,D,YYYY')} </h2>
        </div>
        </div>
    );
};

export default Header;