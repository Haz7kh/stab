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
  <div className="bg-white rounded-lg shadow-lg overflow-hidden m-4 card-bg">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>

      <button className="btn-primary">Läs mer</button>
    </div>
  </div>
);

const CourseSlider = () => {
  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto">
        <h2 className="text-3xl text-blue-500 font-bold text-center mb-8">
          Utforska våra tjänster
        </h2>
        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
        >
          <CourseCard
            image={s1}
            title="Expert skatteförberedelse och planering"
          />
          <CourseCard image={s2} title="Tomfattande ekonomisk förvaltning" />
          <CourseCard
            image={s3}
            title="Anpassade mjukvaruutvecklingslösningar"
          />
          <CourseCard image={s4} title="Avancerad webbutveckling och design" />
        </Carousel>
      </div>
    </section>
  );
};

export default CourseSlider;
