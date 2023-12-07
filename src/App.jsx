import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import PageLayout from "./Layouts/PageLayout/PageLayout";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/auth" element={<AuthPage />} exact />
        <Route path="/:username" element={<ProfilePage />} exact />
      </Routes>
    </PageLayout>
  );
}

export default App;
