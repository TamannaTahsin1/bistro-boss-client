/** @format */

import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
  const [reviews, setReviews] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <div>
      <section>
        <SectionTitle
          subHeading='What our client say'
          heading={"Testimonials"}></SectionTitle>
      </section>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
          {reviews?.map((review) => (
            <SwiperSlide key={review._id}>
              <div className='m-24 flex flex-col items-center'>
                {/* rating */}
                <Rating style={{ maxWidth: 100 }} value={review.rating} readOnly />
                <p>{review.details}</p>
                <h3 className='text-2xl text-orange-400'>{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
