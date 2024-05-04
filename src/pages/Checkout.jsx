import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../ContextProvider/AuthContextProvider";

const Checkout = () => {
  const service = useLoaderData();
  const { register, handleSubmit } = useForm();
  const { user } = useContext(AuthContext);
  const onSubmit = (data) => {
    const { name: customerName, date, email, price } = data;
    const orderInfo = {
      customerName,
      date,
      email,
      price,
      serviceName: service.title,
      serviceID: service._id,
      img: service.img,
    };
    fetch("http://localhost:3000/checkouts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderInfo),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          alert("Checkout sucessfully done");
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div className="hero min-h-screen bg-base-200 my-12">
      <div className="hero-content flex lg:flex-row flex-col w-full">
        <div
          className="card shrink-0 w-full
         shadow-2xl bg-base-100"
        >
          <form className="card-body p-24" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-5xl font-bold text-center pb-4">
              Book Now for {service.title}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  defaultValue={`${user?.displayName || ""}`}
                  placeholder="Name"
                  className="input input-bordered"
                  required
                  {...register("name")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Date</span>
                </label>
                <input
                  type="date"
                  placeholder="Date"
                  className="input input-bordered"
                  required
                  {...register("date")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                  {...register("email")}
                  defaultValue={`${user?.email || ""}`}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Due Amount</span>
                </label>
                <input
                  type="text"
                  placeholder="Price"
                  className="input input-bordered"
                  required
                  {...register("price")}
                  defaultValue={`$${service.price}`}
                />
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-block text-white btn-error">
                Add to Booking List
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
