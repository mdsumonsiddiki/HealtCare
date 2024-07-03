import { useState } from "react";
import PropTypes from 'prop-types';

const AccordionItem = ({acclist}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div className="">
            <button
                className="flex justify-between items-center w-full rounded-lg bg-whiteSecond px-12 py-7"
                onClick={toggleAccordion}
            >
                <span className="text-textColorPrimary font-medium text-xl">{acclist.title}</span>
                <span className="transform transition-transform duration-200" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
                    ▼
                </span>
            </button>
            {isOpen && (
                <div className="text-textColorPrimary/80 border-t-2 rounded-b-lg border-textColorPrimary/20 bg-[#fff] py-6 px-12">
                    <p>{acclist.content}</p>
                </div>
            )}
        </div>
    );
};
AccordionItem.propTypes = {
    acclist: PropTypes.object,
}
export default AccordionItem;