import { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";

const Servies = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://car-doctor-server-ecru-three.vercel.app/services")
      .then((res) => res.json())
      .then((services) => setServices(services))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      <div>
        <h5 className="font-bold text-orange-600 text-xl pb-3 text-center">
          Services
        </h5>
        <h1 className="text-center font-bold text-4xl mb-6">
          Our Service Area
        </h1>
        <p className="text-center">
          the majority have suffered alteration in some form, by injected
          humour, or <br /> randomised words which look even slightly
          believable.
        </p>
      </div>
      <div className="services-data grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <ServiceCard service={service} key={service._id} />
        ))}
      </div>
    </>
  );
};

export default Servies;
