
import helpImg from '../../../assets/helpImg.png'
import ButtonLink from "../../shared/buttons/ButtonLink";
import ActionButton from "../../shared/buttons/ActionButton";
import SectionTitle from '../../shared/title/SectionTitle';

const Help = () => {
    return (
        <div className="container mt-14 md:flex justify-between space-y-6 md:space-y-0 md:gap-8 lg:gap-40 px-3 md:px-0">
            <div className="relative md:w-3/5 order-2">
                <img className="rounded-[32px] w-full ms-auto object-cover " src={helpImg} alt="img" />
                <div className="bg-textColorPrimary/80 py-12 px-6 rounded-3xl space-y-5 -mt-6 lg:absolute -bottom-10 -left-24 lg:w-1/2">
                    <h2 className="text-white font-medium text-2xl">Our mission is simple</h2>
                    <p className="text-white/80">To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                </div>
            </div>
            <div className="md:w-2/5 order-1">
               <ButtonLink title='Who we are'/>
                <div className="space-y-4 pt-5 pb-6 lg:pb-14">
                    <SectionTitle title='We Help To Get Soultions'/>
                    <p className="text-textColorPrimary/70 ">We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.</p>
                </div>
                <ActionButton title='Learn more'/>
            </div>
            
        </div>
    );
};

export default Help;