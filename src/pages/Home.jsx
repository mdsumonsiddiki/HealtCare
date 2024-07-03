import rightShape from '../assets/rightShape.png'
import leftShape from '../assets/leftShape.png'

const Home = () => {
    return (
        <div className="relative">
            <div className='flex w-screen'>
                <img className='w-1/2' src={leftShape} alt="" />
                <img className='w-1/2' src={rightShape} alt="" />
            </div>
           
        </div>
    );
};

export default Home;