import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import HomePage from "./components/HomePage";
import SignUpPage from "./components/SignUpPage";
import DashboardPage from "./components/DashboardPage";

import MyAppointmentsPage from "./components/MyappointmentsPage";
import MyPatientsPage from "./components/MypatientsPage";

import NewAppointmentPage from "./components/NewappointmentPage";
import NewPatientPage from "./components/NewpatientPage";

import AppointmentPage from "./components/AppointmentPage";
import PatientPage from "./components/PatientPage";

import MyAccount from "./components/MyAccount";






function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<SignUpPage />} />

        <Route path="/dashboard" element={<DashboardPage />} />

        <Route path="/dashboard/my-appointments" element={<MyAppointmentsPage />} />
        <Route path="/dashboard/my-patients" element={<MyPatientsPage />} />

        <Route path="/dashboard/new-appointment" element={<NewAppointmentPage />} />
        <Route path="/dashboard/new-patient" element={<NewPatientPage />} />


        <Route path="/dashboard/appointment" element={<AppointmentPage />} />
        <Route path="/dashboard/patient" element={<PatientPage />} />


        <Route path="/dashboard/my-account" element={<MyAccount />} />

        
      </Routes>
    </Router>
  );
}

export default App;
