import React from "react";
import { Link } from "react-router-dom";
import Home from "../home/Home";
import Login from "./Login";
import { useForm } from "react-hook-form";
const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="border-[2px] shadow-md p-5 rounded-md w-[600px]">
          <div className="">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              {/*} <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 cursor-pointer"
              >
                ✕
              </Link> */}
              <h3 className="font-bold text-lg">SignUp</h3>
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  className="w-80 px-3 py-1 border rounded-md outline-none "
                  placeholder="Enter Your Full Name"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  className="w-80 px-3 py-1 border rounded-md outline-none "
                  placeholder="Enter Your Email"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
                <div>
                  <span>Password</span>
                  <br />
                  <input
                    type="password"
                    className="w-80 px-3 py-1 border rounded-md outline-none "
                    placeholder="Enter Your Password"
                    {...register("password", { required: true })}
                  />
                  <br />
                  {errors.password && (
                    <span className="text-sm text-red-500">
                      This field is required
                    </span>
                  )}
                </div>
              </div>
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  SignUp
                </button>
                <p className="text-xl">
                  Have Account Already?{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>{" "}
                </p>
                <Login />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
