import { Link } from 'react-router-dom';
import { MdArrowOutward } from 'react-icons/md';
import PropTypes from 'prop-types';

const ServiceCard = ({serviceImg, title, description}) => {
    return (
        <div className='rounded-3xl overflow-hidden relative'>
            <img className='w-full' src={serviceImg} alt="" />
            <div className="bg-textColorPrimary/70 lg:w-2/3 p-5 lg:rounded-3xl space-y-5 lg:absolute bottom-5 left-5">
                <h2 className="text-white font-medium text-2xl">{title}</h2>
                <div className='flex flex-col items-start lg:flex-row gap-4 lg:gap-0 lg:items-end justify-between'>
                    <p className="text-white/80">{description}</p>
                    <Link className='p-2 bg-yellow rounded-full text-white inline-block text-4xl'>
                        <MdArrowOutward />
                    </Link>
                </div>
            </div>
        </div>
    );
};
ServiceCard.propTypes = {
    title: PropTypes.string,
    serviceImg: PropTypes.img,
    description: PropTypes.string,
}
export default ServiceCard;