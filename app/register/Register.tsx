import Head from "next/head";
import { FaFacebookF, FaLinkedinIn, FaGoogle, FaRegEnvelope } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import * as yup from "yup";
import Login from "../components/Login";
import { useState } from "react";

const initial = {
  username: "",
  email: "",
  password: "",
};

const schema = yup.object().shape({
  username: yup.string(),
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Register = () => {
  useClient();
  const [formData, setFormData] = useState(initial);

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e:any) => {
    <Login />
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (response.ok) {
        // Handle successful signup
        console.log("Sign-up successful!");
      } else {
        // Handle signup error
        console.error("Sign-up failed");
      }
    } catch (error) {
      console.error("Error occurred during sign-up:", error);
    }
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col item-center justify-center w-full flex-1 px-20 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex max-w-4xl">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-green-500">Kautsar</span> Rifqi
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-green-500 mb-2">Create an Account</h2>
              <div className="border-2 w-10 border-green-500 inline-block mb-2"></div>
              <p className="text-gray-400 my-3">please insert a new account</p>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-full">
                  <FaRegEnvelope className="text-gray-400 m-2 text-sm flex-1" />
                  <input
                    type="username"
                    name="username"
                    placeholder="Username"
                    className="bg-gray-100 outline-none"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-full">
                  <FaRegEnvelope className="text-gray-400 m-2 text-sm flex-1" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-gray-100 outline-none"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 rounded-full">
                  <MdLockOutline className="text-gray-400 m-2 text-sm flex-1" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-gray-100 outline-none"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="border-2 border-green-500 text-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white"
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
          <div className="w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-3xl font-bold mb-2">Already have account?</h2>
            <a
              href="#"
              className="border-2 border-white rounded-full mt-10 px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500"
            >
              Sign in
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
function useClient() {
  throw new Error("Function not implemented.");
}

