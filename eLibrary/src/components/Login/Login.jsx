import React, { useContext } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoginContext from "../../Context/LoginContext";
const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  }

  if (!values.password) {
    errors.password = "Required";
  }

  return errors;
};


function Login() {
  const navigate = useNavigate();
  const{setUserStatus} = useContext(LoginContext)
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      axios.post("http://localhost:8081/login", values).then((res)=> {
        localStorage.setItem("user", "true")
       setUserStatus(true);
      alert("Login successful");
     navigate("/");
  }).catch(err => {
      alert("Something is wrong")
      navigate("/login")
})
    },
  });

  return (
    <>
      <div class=" flex justify-center items-center m-5 bg-gray-200 border-4 border-blue-600 rounded-xl shadow-md shadow-gray-500 mx-8">
        <form className="w-full max-w-sm m-5" onSubmit={formik.handleSubmit}>
          <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
              <label
                htmlFor="email"
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              >
                Email
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-blue-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="email"
                name="email"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
            </div>

            {formik.touched.email && formik.errors.email ? (
              <p style={{ color: "red" }}>{formik.errors.email}</p>
            ) : null}
          </div>

          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                htmlFor="password"
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              >
                Password
              </label>
            </div>
            <div className="md:w-2/3">
            <input
              type="password"
              name="password"
              id="password"
              autoComplete="on"
              className="bg-blue-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            </div>
            {formik.touched.password && formik.errors.password ? (
              <p style={{ color: "red" }}>{formik.errors.password}</p>
            ) : null}
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline lg:ml-36 "
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;