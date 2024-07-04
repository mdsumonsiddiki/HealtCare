import AboutSideCard from "./AboutSideCard";
import side1 from '../../../assets/side1.png'
import side2 from '../../../assets/side2.png'
import mid1 from '../../../assets/mid1.png'
import mid2 from '../../../assets/mid2.png'
import mid from '../../../assets/mans.png'
import { FaStar } from "react-icons/fa";


const About = () => {
    return (
        <div className="container mt-10 grid col-span-1 lg:grid-cols-5 items-end gap-4">
            <div className="">
                <AboutSideCard heading='90%' content='Patient satisfaction rate, reflecting our commitment.' item={side1} />
            </div>
            <div className="text-center flex flex-col gap-4 justify-between col-span-1 lg:col-span-3">
                <h1 className="font-semibold text-2xl md:text-5xl text-textColorPrimary w-full lg:w-2/3 mx-auto">Comprehensive Care for Every Patient</h1>
                <div className="flex items-end gap-5 justify-center text-left flex-wrap lg:flex-nowrap">
                    <div className="bg-whiteSecond shadow-xl p-5 rounded-3xl w-64">
                        <h2 className="font-semibold text-textColorPrimary text-4xl">500+</h2>
                        <p className="text-textColorPrimary/80 pb-14">Board-certified doctors</p>
                        <img className="ms-auto" src={mid1} alt="" />
                    </div>
                    <div className="bg-white shadow-xl p-5 rounded-3xl w-64">
                        <h2 className="font-semibold flex text-textColorPrimary text-4xl">4.8<span className="text-yellow"><FaStar /></span></h2>
                        <p className="text-textColorPrimary/80 pb-6">Over 20,000 Patient</p>
                        <img  src={mid} alt="" />
                    </div>
                    <div className="bg-whiteSecond shadow-xl p-5 rounded-3xl w-64">
                        <h2 className="font-semibold text-textColorPrimary text-4xl">$5000</h2>
                        <p className="text-textColorPrimary/80 pb-14">for poor patient</p>
                        <img className="ms-auto" src={mid2} alt="" />
                    </div>
                </div>
            </div>
            <div className="">
                <AboutSideCard heading='50+' content='Free lession video for patient, reflecting our commitment.' item={side2} />
            </div>
        </div>
    );
};

export default About;