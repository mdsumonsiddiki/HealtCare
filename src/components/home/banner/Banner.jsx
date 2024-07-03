// import leftShape from '../../../assets/leftShape.png'
// import rightShape from '../../../assets/rightShape.png'
import banner from '../../../assets/banner.png'
const Banner = () => {
    return (
        <div className="relative pt-2 md:pt-5 lg::pt-10 px-3 md:px-0">
            {/* <div className='flex absolute top-0 left-0 w-full opacity-30'>
                <img className='w-1/2 object-cover' src={leftShape} alt="" />
                <img className='w-1/2 object-cover' src={rightShape} alt="" />
            </div> */}
            <div className='container relative rounded-2xl md:rounded-[48px] overflow-hidden '>
                
                <img className='w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover' src={banner} alt="bannerImg" />
                <div
                className="absolute inset-0 bg-gradient-to-b from-[#00C19D] to-[#020043] opacity-40"
            ></div>
            </div>
        </div>
    );
};

export default Banner;