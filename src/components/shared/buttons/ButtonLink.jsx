import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ButtonLink = ({title}) => {
    return (
        <Link className="text-textColorPrimary inline-block font-medium border-2 py-3 px-6 rounded-full border-textColorPrimary duration-300  items-center gap-1 hover:text-yellow hover:border-yellow">
        {title}
    </Link>
    );
};
ButtonLink.propTypes = {
    title: PropTypes.string,
}
export default ButtonLink;