import { Route, Routes } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { auth } from "./firebase-config";
import "./App.css";
import { About, Contact, Home, Services } from "./components/pages";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";
import ForgotPassword from "./components/pages/ForgotPassword/ForgotPassword";
import Profile from "./components/pages/profile/Profile";
import ExcerisePlanner from "./components/pages/excerise planner/ExcerisePlanner";
import InputData from "./components/pages/excerise planner/inputData/inputData";
import Consultant from "./components/pages/consultant search/Consultant";
import Vaccine from "./components/pages/vaccine/Vaccine";
import Medical from "./components/pages/Medical Data/Medical";
import UserSelection from "./components/pages/select user/UserSelection";
import BussinessProfile from "./components/pages/BussinessProfile/BussinessProfile";
import Meals from "./components/pages/Meal-suggestion/Meals";
import PetProfiles from "./components/pages/UserProfile/PetProfiles";
import AccountSettings from "./components/pages/UserProfile/AccountSettings";
import Indoorgames from "./components/pages/excerise planner/Indoorgames";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/exceisePlanner" element={<ExcerisePlanner />} />
        <Route path="/exerciseInput" element={<InputData />} />
        <Route path="/consultant" element={<Consultant />} />
        <Route path="/vaccine" element={<Vaccine />} />
        <Route path="/medical" element={<Medical />} />
        <Route path="/selectUser" element={<UserSelection />} />
        <Route path="/bussinessProfile" element={<BussinessProfile />} />
        <Route path="/meals" element={<Meals />} />
        <Route path="/petProfiles" element={<PetProfiles />} />
        <Route path="/accounntSettings" element={<AccountSettings />} />
        <Route path="/indoor" element={<Indoorgames/>} />
      </Routes>
    </div>
  );
}

export default App;
