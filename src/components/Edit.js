import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Edit = ({ localdata, updatedata }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get("email");

  const [currentUserInput, setCurrentUserInput] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
    file: "",
  });

  const setUsereditdata = localdata.filter((todo) => todo.email === email);
  useEffect(() => {
    if (setUsereditdata.length > 0) {
      setCurrentUserInput({
        name: setUsereditdata[0].name,
        email: setUsereditdata[0].email,
        password: setUsereditdata[0].password,
        cpassword: setUsereditdata[0].cpassword,
        file: setUsereditdata[0].file,
      });
    }
  }, [localdata]);

  const inputChangeHandler = (e) => {
    setCurrentUserInput({
      ...currentUserInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setCurrentUserInput({
      ...currentUserInput,
      file: file,
    });

    const reader = new FileReader();
    reader.onload = () => {
      setCurrentUserInput({ ...currentUserInput, file: reader.result });
    };
    reader.readAsDataURL(file);
    console.log(currentUserInput);
  };

  //   const getdatafromlocal = JSON.parse(localStorage.getItem("data")) || [];

  const Updatedata = (e) => {
    e.preventDefault();
    if (
      currentUserInput.name === "" ||
      currentUserInput.password === "" ||
      currentUserInput.file === "" ||
      currentUserInput.cpassword === ""
    ) {
      alert("fill all fields");
    } else if (currentUserInput.password !== currentUserInput.cpassword) {
      alert("Your password do not match");
    } else {
      updatedata(currentUserInput);
      setCurrentUserInput({
        name: setUsereditdata[0].name,
        email: setUsereditdata[0].email,
        password: setUsereditdata[0].password,
        cpassword: setUsereditdata[0].cpassword,
        file: setUsereditdata[0].file,
      });
      navigate("/dashboard");
    }
  };

  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Edit Data
                      </p>

                      <form className="mx-1 mx-md-4" onSubmit={Updatedata}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              name="name"
                              id="form3Example1c"
                              className="form-control"
                              value={currentUserInput.name}
                              placeholder="Your Name"
                              onChange={inputChangeHandler}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              name="email"
                              id="form3Example3c"
                              value={currentUserInput.email}
                              className="form-control"
                              placeholder="Your Email"
                              onChange={inputChangeHandler}
                              readOnly
                              title="read only"
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              name="password"
                              id="form3Example4c"
                              className="form-control"
                              value={currentUserInput.password}
                              placeholder="Your Password"
                              autoComplete="on"
                              onChange={inputChangeHandler}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              name="cpassword"
                              id="form3Example4cd"
                              className="form-control"
                              value={currentUserInput.cpassword}
                              placeholder="Repeat your password"
                              autoComplete="on"
                              onChange={inputChangeHandler}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fa-solid fa-image fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="file"
                              name="file"
                              accept="image/*"
                              onChange={handleImageUpload}
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            Update
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      {/* <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        alt="User"
                        className="img-fluid"
                      /> */}
                      <img
                        src={currentUserInput.file}
                        alt="User"
                        className="img-fluid"
                      />
                    </div>
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

export default Edit;
