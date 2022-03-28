import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import WishList from "./pages/WishList";
import AddProduct from "./pages/AddProduct";

const App = () => {
  return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/signup" element={<Signup/>}/>
            <Route exact path="/wish-list" element={<WishList/>}/>
            <Route exact path="/add-product" element={<AddProduct/>}/>
          </Routes>
        </Layout>
      </BrowserRouter>
  );
};

export default App;