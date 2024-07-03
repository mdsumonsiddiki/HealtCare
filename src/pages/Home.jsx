
import Banner from '../components/home/banner/Banner';
import Help from '../components/home/help/Help';
import Services from '../components/home/services/Services';

const Home = () => {
    return (
        <div className='pb-60'>
            <Banner />
            <Help />
            <Services/>
        </div>
    );
};

export default Home;