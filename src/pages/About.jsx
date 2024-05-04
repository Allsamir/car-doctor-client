import person from "../assets/images/about_us/person.jpg";
import parts from "../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200 my-12">
      <div className="hero-content flex-col lg:flex-row-reverse gap-20">
        <div className="text-center lg:text-left lg:w-4/12">
          <h5 className="font-bold text-orange-600 text-xl pb-3">About Us</h5>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable.
          </p>
          <p className="pb-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable.
          </p>
          <button className="btn btn-error text-white">Get More Info</button>
        </div>
        <div className="card shrink-0 lg:w-1/2 shadow-2xl bg-base-100 relative">
          <img src={person} alt="" />
          <img
            src={parts}
            className="absolute w-80 h-80rem bottom-[-40px] right-[-40px] border-[10px] rounded-lg border-solid border-white"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
