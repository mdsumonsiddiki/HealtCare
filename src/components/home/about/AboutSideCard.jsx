import PropTypes from 'prop-types';
const AboutSideCard = ({heading, content, item}) => {
    return (
        <div className='bg-white shadow-xl  p-5 rounded-3xl flex flex-col justify-between'>
            <h2 className="font-semibold pb-2 text-textColorPrimary text-4xl">{heading}</h2>
            <p className="text-textColorPrimary pb-20">{content}</p>
            <img  className='h-32 w-32 object-cover mx-auto' src={item} alt="" />
        </div>
    );
};
AboutSideCard.propTypes = {
    heading: PropTypes.any,
    content: PropTypes.any,
    item: PropTypes.any,
}
export default AboutSideCard;