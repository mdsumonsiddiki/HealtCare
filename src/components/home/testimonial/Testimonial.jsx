

import ButtonLink from "../../shared/buttons/ButtonLink";
import SectionTitle from "../../shared/title/SectionTitle";
import TestimonialCard from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Pagination } from "swiper/modules";
import './Testimonial.css';
import client1 from '../../../assets/client1.png'
import client2 from '../../../assets/client2.png'
import client3 from '../../../assets/client3.png'

const reviwe = [
  {
    title: 'Expertise and Compassion Combined',
    content: 'I can`t thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.',
    images: client1,
    name: 'Sarah D',
    proffesion: 'IT Professional'

  },
  {
    title: 'Life-Saving Care, Life-Changing Experience',
    content: 'My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, advanced treatments they provided saved my life.',
    images: client2,
    name: 'Michael R',
    proffesion: 'Business Executive'
  },
  {
    title: 'A Partner in Health and Wellness',
    content: 'As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they`ve become my trusted partner in health and',
    images: client3,
    name: 'David S',
    proffesion: 'Lawyer'
  },
  {
    title: 'Life-Saving Care, Life-Changing Experience',
    content: 'My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, advanced treatments they provided saved my life.',
    images: client2,
    name: 'Michael R',
    proffesion: 'Business Executive'
  },
  {
    title: 'Expertise and Compassion Combined',
    content: 'I can`t thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.',
    images: client1,
    name: 'Sarah D',
    proffesion: 'IT Professional'

  },
  {
    title: 'A Partner in Health and Wellness',
    content: 'As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they`ve become my trusted partner in health and',
    images: client3,
    name: 'David S',
    proffesion: 'Lawyer'
  }
]


const Testimonial = () => {
  return (
    <div className="container mt-10 md:mt-16 lg:mt-20 px-3 md:px-0">
      <div className="space-y-5">
        <ButtonLink title='Testimonial' />
        <SectionTitle title='What they say about us' />
      </div>
      <div className="mt-8">
        <Swiper
          // install Swiper modules
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={3}

          loop={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {
          reviwe.map((item, idx)=> 
          <SwiperSlide key={idx}>
            <TestimonialCard item={item} />
            </SwiperSlide>)
          }
  
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;