import Login from "@/app/login/page";
import Home from "@/app/page";
import Register from "@/app/register/page";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const Router = () =>{
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>;
};