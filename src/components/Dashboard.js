import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = ({ localdata,deletedata }) => {
  const navigator = useNavigate();
  return (
    <>
      <div className="container">
        <div className="mainbox d-flex align-items-center justify-content-center row">
          {localdata.map((e, i) => {
            return (
              <div className="col-12 col-sm-6 col-lg-4 d-flex align-items-center justify-content-center py-5" key={i}>
                <div className="card w-100" style={{ borderRadius: "15px" }}>
                  <div className="card-body  p-4">
                    <div
                      className="d-flex flex-column text-black justify-content-center"
                      // style={{ width: "200px" }}
                    >
                      <div className="flex-shrink-0 d-flex justify-content-center">
                        <img
                          src={e.file}
                          alt="Generic placeholder image"
                          className="img-fluid"
                          style={{ width: "300px",height:"300px",objectFit: "cover", borderRadius: "10px" }}
                        />
                      </div>
                      <div className="flex-grow-1 ms-3 text-center w-100">
                        <h5 className="mb-1">{e.name}</h5>
                        <p className="mb-2 pb-1" style={{ color: "#2b2a2a" }}>
                          {e.email}
                        </p>
                        <div
                          className="d-flex justify-content-start rounded-3 p-2 mb-2"
                          style={{ backgroundColor: "#efefef" }}
                        >
                          <div className="text-center w-100">
                            <p className="small text-muted mb-1">password</p>
                            <p className="mb-0">{e.password}</p>
                          </div>
                        </div>
                        <div className="d-flex pt-1">
                          <button
                            type="button"
                            className="btn btn-outline-primary mr-1 flex-grow-1"
                            // onClick={navig}
                            onClick={()=>navigator(`/edit?email=${e.email}`)}
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-danger flex-grow-1"
                            onClick={()=>deletedata(e.email)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
