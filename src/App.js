import "./App.css";
import Signup from "./components/Singup";
import Nopage from "./components/Nopage";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Header from "./components/Header";
import Edit from "./components/Edit";
import { useEffect, useState } from "react";

function App() {
  // const navigator = new useNavigate();
  const [localdata, setLocaldata] = useState([]);


  useEffect(() => {
    setLocaldata(JSON.parse(localStorage.getItem("data")) || []);
  }, []);
  const submitdata = (e) => {
    // localStorage.setItem("data",e);
    localStorage.setItem("data", JSON.stringify(e));
    setLocaldata(e);
  };
  const deletedata = (email) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (confirmDelete) {
      const deleteiddata = localdata.filter((e) => e.email !== email);
      setLocaldata(deleteiddata);
      localStorage.setItem("data", JSON.stringify(deleteiddata));
    }
  };

  const updatedata = (editdata) => {
    // const updatedTodoList = [...todoList, newTodo];
    const updateddata = localdata.map((user) => {
      if (user.email === editdata.email) {
        return {
          ...user,
          name: editdata.name,
          password: editdata.password,
          cpassword: editdata.cpassword,
          file: editdata.file,
        };
      }
      return user;
    });

    setLocaldata(updateddata);
    localStorage.setItem("data", JSON.stringify(updateddata));
  };
  let  isLoggedIn = localStorage.getItem("userlogin");

  const getloginin = (e) =>{
    isLoggedIn = e;
  }
  return (
    <>
      <BrowserRouter>
        <Header getloginin={getloginin}/>
        <Routes>
          <Route
            path="/"
            element={
              isLoggedIn ? (
                <Dashboard localdata={localdata} deletedata={deletedata} />
              ) : (
                <Signup localdata={localdata} submitdata={submitdata} />
              )
            }
          />
          <Route
            path="/singup"
            element={<Signup localdata={localdata} submitdata={submitdata} />}
          />

          <Route path="login" element={<Login localdata={localdata} />} />
          <Route
            path="dashboard"
            element={
              <Dashboard localdata={localdata} deletedata={deletedata} />
            }
          />
          <Route
            path="edit"
            element={<Edit localdata={localdata} updatedata={updatedata} />}
          />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
