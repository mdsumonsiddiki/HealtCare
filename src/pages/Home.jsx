
import Banner from '../components/home/banner/Banner';
import Faq from '../components/home/faq/Faq';
import Help from '../components/home/help/Help';
import Offer from '../components/home/offer/Offer';
import Services from '../components/home/services/Services';

const Home = () => {
    return (
        <div className='pb-60'>
            <Banner />
            <Help />
            <Services/>
            <Faq/>
            <Offer/>
        </div>
    );
};

export default Home;