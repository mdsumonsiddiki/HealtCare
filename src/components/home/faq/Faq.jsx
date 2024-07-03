import ButtonLink from "../../shared/buttons/ButtonLink";
import SectionTitle from "../../shared/title/SectionTitle";
import AccordionItem from "./AccordionItem";

const accLists = [
    {
        title: 'What are your office hours?',
        content: 'Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours..'
    },
    {
        title: 'How can I schedule an appointment?',
        content: 'To schedule an appointment, contact our office via phone or email. Provide your preferred date and time, and we`ll confirm availability. Visit our website for more details..'
    },
    {
        title: 'Do you accept insurance?',
        content: 'Yes, we accept most major insurance plans. Please contact our office to verify coverage and confirm if your specific insurance is accepted.'
    },
    {
        title: 'What should I bring to my appointment?',
        content: 'Bring a valid ID, insurance card, any referral or medical records, and a list of current medications..'
    },
    {
        title: 'Do you offer telemedicine appointments?',
        content: 'Yes, we offer telemedicine appointments. Please contact our office to schedule and get instructions on how to join the virtual visit.'
    }
]


const Faq = () => {
    return (
        <div className="container mt-10 md:mt-16 lg:mt-40 px-3 md:px-0">
            <div className="space-y-3">
                <ButtonLink title='Faq' />
                <SectionTitle title='Frequntly Asked Question' />
            </div>
            <div className="mt-8 space-y-3">
                {
                    accLists.map((acclist, idx) => <AccordionItem key={idx} acclist={acclist} />)
                }

            </div>
        </div>
    );
};

export default Faq;