import PropTypes from "prop-types";

const Banner = ({ image, slideID, nextSlideID, preSlideID }) => {
  return (
    <div id={slideID} className="carousel-item relative w-full h-[800px]">
      <img src={image} className="w-full object-cover rounded-xl" />
      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
        className="absolute w-full h-full rounded-xl"
      >
        <div className="absolute w-full h-full flex space-y-8 flex-col justify-center transform -translate-y-1/2 left-5 right-5 top-1/2">
          <h1 className="text-6xl text-white font-bold">
            Affordable Price For Car Servicing
          </h1>
          <p className="text-base text-white ">
            There are many variations of passages of available, <br />
            but the majority have suffered alteration in some form
          </p>
          <div className="w-50 space-x-4">
            <button className="btn btn-error text-white">Discover More</button>
            <button className="btn btn-outline text-white">
              Latest Project
            </button>
          </div>
        </div>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={preSlideID} className="btn btn-circle mr-4">
          ❮
        </a>
        <a href={nextSlideID} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  slideID: PropTypes.string.isRequired,
  nextSlideID: PropTypes.string.isRequired,
  preSlideID: PropTypes.string.isRequired,
};

export default Banner;
