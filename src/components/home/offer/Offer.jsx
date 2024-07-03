import { MdArrowOutward } from 'react-icons/md';
import banner from '../../../assets/offerBanner.png'
import ActionButton from '../../shared/buttons/ActionButton';
import logo from '../../../assets/footerLogo.png'

const Offer = () => {
    return (
        <div style={{
            backgroundImage: `url(${banner})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        }}
            className={`relative bg-cover container mt-10 md:mt-16 lg:mt-40 rounded-[32px] z-20 bg-center bg-no-repeat overflow-hidden py-36`}>

            <div className="absolute -z-20 inset-0 bg-gradient-to-r from-textColorPrimary to-textColorPrimary/30"></div>
            <div className='absolute top-16 right-16'>
                <img src={logo} alt="" />
            </div>
            <div className='z-50 ml-6 md:ml-10 lg:ml-16'>
                <h2 className='text-4xl font-semibold text-whiteSecond space-y-5'><span className='block'>Get Your</span> <span className='block'>First Appointment</span> <span className='block'>at 50% Off!</span></h2>
                <div className='flex items-center gap-5 mt-8 flex-wrap'>
                    <ActionButton title='Appointment' />
                    <button className="text-white bg-transparent font-medium border-2 py-3 px-6 rounded-xl border-white duration-300 flex items-center gap-1 hover:text-yellow hover:border-yellow ">Learn More<span className="text-2xl"><MdArrowOutward /></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Offer;