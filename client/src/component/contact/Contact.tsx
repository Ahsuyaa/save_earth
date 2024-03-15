import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  Name: string;
  Email: string;
  Message: string;
};

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <div className="mx-auto container flex justify-end relative z-10  ">
      <div
        className="w-[400px] bg-white p-10 m-5"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <h5 className="text-2xl ">Get Involved</h5>
        <p> Don't throw your future away.</p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          <input
            placeholder="Name*"
            {...register("Name", { required: true })}
            className="bg-[#f3f1ef] h-[50px] my-5 focus:outline-none"
          />
          {errors.Name && (
            <span className="text-red-500">Name is required</span>
          )}
          <input
            placeholder="Email*"
            {...register("Email", { required: true })}
            className="bg-[#f3f1ef] h-[50px] my-5 focus:outline-none"
          />
          {errors.Email && (
            <span className="text-red-500">Email is required</span>
          )}
          <textarea
            placeholder="Message*"
            {...register("Message", { required: true })}
            className="bg-[#f3f1ef] h-[150px] my-5 focus:outline-none"
          />
          {errors.Message && (
            <span className="text-red-500">Message is required</span>
          )}
          <button
            className="bg-[#8cc640] text-white px-10 py-3 my-2"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
