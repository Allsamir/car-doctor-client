import { Link, useNavigate } from "react-router-dom";
import img from "../assets/images/login/login.svg";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../ContextProvider/AuthContextProvider";
const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { createUser, loading, setLoading } = useContext(AuthContext);
  const onSubmit = (data) => {
    const { email, password } = data;
    createUser(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        setLoading(false);
        alert(`${user.email} successfully Sing Up`);
        navigate(`/`);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert(`${(errorCode, errorMessage)}`);
      });
  };
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div className="hero min-h-screen bg-base-200 my-12">
          <div className="hero-content flex lg:flex-row flex-col gap-20">
            <div className="text-center lg:text-left">
              <img src={img} alt="" />
            </div>
            <div
              className="card shrink-0 w-full md:w-1/2
         shadow-2xl bg-base-100"
            >
              <form
                className="card-body p-24"
                onSubmit={handleSubmit(onSubmit)}
              >
                <h1 className="text-5xl font-bold text-center pb-4">
                  Sing Up now!
                </h1>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="name"
                    placeholder="name"
                    className="input input-bordered"
                    required
                    {...register("name")}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                    {...register("email")}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                    {...register("password")}
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-error text-white">Sign Up</button>
                </div>
                <p className="pt-4">
                  Already have an account?{" "}
                  <Link className="text-orange-600" to={`/login`}>
                    Login
                  </Link>{" "}
                  here
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUp;
