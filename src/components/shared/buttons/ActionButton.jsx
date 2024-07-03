import PropTypes from 'prop-types';
import { MdArrowOutward } from 'react-icons/md';

const ActionButton = ({title}) => {
    return (
        <button className="text-textColorPrimary bg-yellow font-medium border-2 py-3 px-6 rounded-xl border-yellow duration-300 flex items-center gap-1 hover:text-yellow hover:bg-transparent">
        {title} <span className="text-2xl"><MdArrowOutward /></span>
    </button>
    );
};
ActionButton.propTypes = {
    title: PropTypes.string,
}
export default ActionButton;