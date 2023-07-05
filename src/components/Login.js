import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({localdata}) => {
  const [currentUserInput, setCurrentUserInput] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()
  const inputChangeHandler = (e) => {
    setCurrentUserInput({
      ...currentUserInput,
      [e.target.name]: e.target.value,
    });
    console.log(currentUserInput);
  };

  // console.log(localdata)
  const loginsubmit = (e) => {
    e.preventDefault();
  
    // const userdata = localdata.filter(
    //   (user) =>
    //     user.email === currentUserInput.email && user.password === currentUserInput.password
    // );
  
    const alldata = JSON.parse(localStorage.getItem("data")) ;

    const userdata = alldata.filter(
      (user) =>
        user.email === currentUserInput.email && user.password === currentUserInput.password
    );
    if (userdata.length > 0) {
      localStorage.setItem("userlogin",JSON.stringify(userdata))
      alert("Login successful");
      navigate('/dashboard');

    } else {
      alert("Invalid email or password");
    }
  };
  
  return (
    <>
      <section className="vh-100 " style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="container d-flex justify-content-center align-items-center">
              <div className="card text-black " style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center ">
                    <form className="mx-1 mx-md-4" style={{ width: " 400px" }} onSubmit={loginsubmit}>
                        <div className="text-center pb-3">
                          <h1>Login</h1>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            name="email"
                            id="form2Example1"
                            className="form-control"
                            onChange={inputChangeHandler}
                          />
                          <label className="form-label" htmlFor="form2Example1">
                            Email address
                          </label>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            name="password"
                            id="form2Example2"
                            className="form-control"
                            autoComplete="on"
                            onChange={inputChangeHandler}
                          />
                          <label className="form-label" htmlFor="form2Example2">
                            Password
                          </label>
                        </div>

                    

                        <button
                          type="submit"
                          className="btn btn-primary btn-block mb-4"
                        >
                          Sign in
                        </button>

                        <div className="text-center">
                          <p>
                            Not a member? <a href="/">Register</a>
                          </p>
                          <p>or sign up with:</p>
                          <button
                            type="button"
                            className="btn btn-link btn-floating mx-1"
                          >
                            <i className="fab fa-facebook-f"></i>
                          </button>

                          <button
                            type="button"
                            className="btn btn-link btn-floating mx-1"
                          >
                            <i className="fab fa-google"></i>
                          </button>

                          <button
                            type="button"
                            className="btn btn-link btn-floating mx-1"
                          >
                            <i className="fab fa-twitter"></i>
                          </button>

                          <button
                            type="button"
                            className="btn btn-link btn-floating mx-1"
                          >
                            <i className="fab fa-github"></i>
                          </button>
                        </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
