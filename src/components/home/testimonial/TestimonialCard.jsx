
import { FaStar } from "react-icons/fa";
import PropTypes from 'prop-types';

const TestimonialCard = ({item}) => {
    return (
        <div className='bg-whiteSecond rounded-2xl p-5'>
            <h2 className="font-semibold  text-xl text-textColorPrimary">{item.title}</h2>
            <p className='text-textColorPrimary/70 my-4'>{item.content}</p>
            <div className='flex items-center gap-3'>
                <img src={item.images} alt="" />
                <div>
                    <h3 className='text-textColorPrimary font-semibold'>{item.name}, <span className='text-textColorPrimary/70 font-normal'>{item.proffesion}</span></h3>
                    <ul className='text-yellow flex items-center gap-1.5 mt-1'>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                        <li><FaStar /></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
TestimonialCard.propTypes = {
    item: PropTypes.object,
}
export default TestimonialCard;