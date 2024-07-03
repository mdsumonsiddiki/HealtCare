import PropTypes from 'prop-types';

const SectionTitle = ({title}) => {
    return (
        <h2 className="font-semibold md:pr-32 text-textColorPrimary text-4xl">{title}</h2>
    );
};
SectionTitle.propTypes = {
    title: PropTypes.string,
}
export default SectionTitle;