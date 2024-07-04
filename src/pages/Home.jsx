
import About from '../components/home/about/About';
import Banner from '../components/home/banner/Banner';
import Faq from '../components/home/faq/Faq';
import Help from '../components/home/help/Help';
import Offer from '../components/home/offer/Offer';
import Services from '../components/home/services/Services';
import Testimonial from '../components/home/testimonial/Testimonial';

const Home = () => {
    return (
        <div className='pb-60'>
            <Banner />
            <About/>
            <Help />
            <Services/>
            <Testimonial/>
            <Faq/>
            <Offer/>
        </div>
    );
};

export default Home;