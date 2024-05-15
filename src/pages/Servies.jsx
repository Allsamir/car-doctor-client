import { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard";

const Servies = () => {
  const [services, setServices] = useState([]);
  const [asc, setAsc] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  console.log(searchValue);
  const handleSubmit = (e) => {
    e.preventDefault();
    const search = e.target.searchText.value;
    setSearchValue(search);
  };
  useEffect(() => {
    fetch(
      `http://localhost:3000/services?sort=${
        asc ? "asc" : "desc"
      }&searchIndex=${searchValue}`,
    )
      .then((res) => res.json())
      .then((services) => setServices(services))
      .catch((err) => console.error(err));
  }, [asc, searchValue]);
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
      <div className="text-center lg:w-1/2 md:w-4/5 w-full mx-auto mt-12">
        <form onSubmit={handleSubmit}>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              name="searchText"
            />
            <button className="hover:scale-125" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </label>
        </form>
      </div>
      <div className="my-12 text-center">
        <button
          className="btn btn-outline btn-error uppercase"
          onClick={() => setAsc((prev) => !prev)}
        >
          {asc ? "High to low" : "low to high"}
        </button>
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
