import React from "react";
import { Link, useNavigate } from "react-router-dom";


const Header = ( {getloginin,isLoggedIn}) => {
  const navigator = useNavigate();
  // const isLoggedIn = localStorage.getItem('islogin');
  const isLoggedOut = () =>{
    localStorage.setItem('islogin',false);
    navigator("/login");
    console.log("hi");
    getloginin();
  }
  const AddUser = () =>{
    navigator("singup")
  }
  
  return (
    <>
      <div className="container d-flex align-items-center justify-content-center py-3">
        <div className="col-6">
          <h1>Demo</h1>
        </div>
        <div className="col-6 text-right">
          {isLoggedIn ? (<>
             <button
             type="button"
             className="btn btn-outline-primary mr-1 flex-grow-1"
             onClick={()=>isLoggedOut()}
           > LogOut
           </button>
            <button
            type="button"
            className="btn btn-outline-primary mr-1 flex-grow-1"
            onClick={()=>AddUser()}
          > Add User
          </button>
          </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/" className="ml-3">
                Register
              </Link>
            </>
          )}
          
        </div>
      </div>
    </>
  );
};

export default Header;
