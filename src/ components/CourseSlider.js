import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import s1 from "../assets/images/s1.jpeg";
import s2 from "../assets/images/s2.jpeg";
import s3 from "../assets/images/s3.jpeg";
import s4 from "../assets/images/s4.jpeg";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CourseCard = ({ image, title, instructor, rating, price, level }) => (
  <div className="bg-white rounded-lg shadow-md p-4 m-2">
    <img
      src={image}
      alt={title}
      className="w-full h-48 object-cover rounded-t-lg"
    />
    <div className="p-4">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-gray-600">{instructor}</p>
      <div className="flex items-center">
        <span className="text-yellow-500">⭐ {rating}</span>
      </div>
      <p className="text-gray-900 font-bold">{price}</p>
      <p className="text-gray-600">{level}</p>
    </div>
  </div>
);

const CourseSlider = () => {
  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Explore Our Services
        </h2>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
        >
          <CourseCard
            image={s1}
            title="Responsive Web Design with HTML5 & CSS3"
            instructor="Instructor"
            rating="5.0 (1)"
            price="Free"
            level="Beginner"
          />
          <CourseCard
            image={s2}
            title="The Complete Cyber Security Course"
            instructor="Instructor"
            rating="4.5 (2)"
            price="£32.00"
            level="Expert"
          />
          <CourseCard
            image={s3}
            title="The Complete Product Management Course"
            instructor="Jenica Smith"
            rating="4.0 (2)"
            price="£55.00"
            level="Intermediate"
          />
          <CourseCard
            image={s4}
            title="The Complete Salesforce Classic Administrator"
            instructor="Instructor"
            rating="4.0 (2)"
            price="£65.00"
            level="Intermediate"
          />
        </Carousel>
      </div>
    </section>
  );
};

export default CourseSlider;
