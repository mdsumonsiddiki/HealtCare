import ActionButton from "../../shared/buttons/ActionButton";
import ButtonLink from "../../shared/buttons/ButtonLink";
import SectionTitle from "../../shared/title/SectionTitle";
import ServiceCard from "./ServiceCard";
import serviceImg1 from '../../../assets/service1.png'
import serviceImg2 from '../../../assets/service2.png'
import serviceImg3 from '../../../assets/service3.png'

const Services = () => {
    return (
        <div className="grid col-span-1 md:grid-cols-2 rounded-3xl mt-12 md:mt-16 lg:mt-40 p-5 md:p-10 container gap-6 md:gap-8 lg:gap-14 bg-[#FFFFF5]">
            <div>
                <ButtonLink title='Service' />
                <div className="space-y-4 pt-5 pb-6 lg:pb-14">
                    <SectionTitle title='Empowering Health, Enriching Lives'/>
                    <p className="text-textColorPrimary/70 ">We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.</p>
                </div>
                <ActionButton title='Appointment' />
            </div>
            <ServiceCard title='Online Doctor Meet' serviceImg={serviceImg1} description='Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision' />
            <ServiceCard title='Advanced Technology' serviceImg={serviceImg2} description='Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision' />
            <ServiceCard title='Consultancy your health' serviceImg={serviceImg3} description='Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision' />
        </div>
    );
};

export default Services;