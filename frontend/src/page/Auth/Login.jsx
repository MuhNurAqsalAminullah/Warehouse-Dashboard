import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync } from "../../features/auth/authThunks";
import { Link, useNavigate } from "react-router-dom";
import bgLogin from "../../assets/image/bgLoginjpg.jpg";
import { login, setError } from "../../features/auth/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const error = useSelector((state) => state.auth.error);
  // const errors = error.payload;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const role = await dispatch(loginAsync({ email, password }));
    console.log("Role after login : ", role);
    dispatch(login(role));
    navigate("/dashboard");
  };

  return (
    <div className="sm:flex h-screen">
      <div
        className="bg-cover bg-no-repeat bg-center sm:hidden lg:block lg:w-1/2"
        style={{ backgroundImage: `url(${bgLogin})` }}
      >
        <div className="h-screen flex flex-col justify-between py-10 px-20">
          <h1 className="lg:text-4xl text-white mb-5 w-fit">Sign in</h1>
          <div>
            <h2 className="lg:text-3xl text-white font-bold">
              Warehousing Management{" "}
              <span className="text-[#1DA7FF]">Dashboard</span>
            </h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit libero, quae illo at omnis praesentium voluptates
              sequi quam impedit amet.
            </p>
          </div>
        </div>
      </div>
      <div className="sm:w-full lg:w-1/2 flex flex-col justify-center items-center bg-white">
        <div>
          <img
            src={require("../../assets/image/logo.png")}
            className="sm:w-24px sm:mb-3 mx-auto"
            alt=""
          />
          <h2 className="sm:text-xl text-[#5051F9] font-bold sm:mb-3 text-center">
            Welcome Back
          </h2>
          <div className="sm:mb-3">
            <h3 className="text-lg text-[#5051F9] font-bold">Hey, Hello 👋</h3>
            <p className="text-[#9A9FCD]">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <label className="text-[#5F6388] text-sm">Email</label>
            <br />
            <input
              type="email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
              className="border-b border-[#9A9FCD] w-full py-2 pl-3 outline-none focus:border-[#5051F9]"
            />{" "}
            <br />
            <br />
            <label className="text-[#5F6388] text-sm">Password</label>
            <br />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              className="border-b border-[#9A9FCD] w-full py-2 pl-3 outline-none focus:border-[#5051F9]"
            />
            {/* <Link to={"/dashboard"}> */}
            <button
              type="submit"
              className="bg-[#5051F9] w-full text-white sm:py-2 rounded-md mt-5"
            >
              Sign in
            </button>
            {/* </Link> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
