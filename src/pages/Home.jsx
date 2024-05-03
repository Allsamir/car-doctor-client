import Banner from "../components/Banner";
import image1 from "../assets/images/banner/1.jpg";
import image2 from "../assets/images/banner/2.jpg";
import image3 from "../assets/images/banner/3.jpg";
import image4 from "../assets/images/banner/4.jpg";
import image5 from "../assets/images/banner/5.jpg";
import image6 from "../assets/images/banner/6.jpg";
import About from "./About";
import Servies from "./Servies";
const Home = () => {
  return (
    <>
      <div className="my-12">
        <div className="carousel w-full">
          <Banner
            image={image1}
            slideID="slide1"
            preSlideID="#slide6"
            nextSlideID="#slide2"
          />
          <Banner
            image={image2}
            slideID="slide2"
            preSlideID="#slide1"
            nextSlideID="#slide3"
          />
          <Banner
            image={image3}
            slideID="slide3"
            preSlideID="#slide2"
            nextSlideID="#slide4"
          />
          <Banner
            image={image4}
            slideID="slide4"
            preSlideID="#slide3"
            nextSlideID="#slide5"
          />
          <Banner
            image={image5}
            slideID="slide5"
            preSlideID="#slide4"
            nextSlideID="#slide6"
          />
          <Banner
            image={image6}
            slideID="slide6"
            preSlideID="#slide5"
            nextSlideID="#slide1"
          />
        </div>
      </div>
      <About />
      <Servies />
    </>
  );
};

export default Home;
