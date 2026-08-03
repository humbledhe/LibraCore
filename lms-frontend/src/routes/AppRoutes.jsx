// Third Party
import { Routes, Route } from "react-router-dom";
// Local Modules
import ProtectedRoutes from "./ProtectedRoutes.jsx";

import CreateAccount from "../pages/CreateAccount/CreateAccount.jsx";
import SignUpSuccess from "./SignUpSuccess.jsx";
import Login from "../pages/Login/Login.jsx";

import LandingPage from "../pages/LandingPage/LandingPage.jsx";

import DashboardLayout from "../pages/Dashboard/DashboardLayout.jsx";
import Home from "../pages/Dashboard/Home/Home.jsx";

import Library from "../pages/Dashboard/Library/Library.jsx";
import LibrarySection from "../pages/Dashboard/Library/LibrarySection.jsx";

import Catalog from "../pages/Dashboard/Catalog/Catalog.jsx";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="signup" element={<CreateAccount />} />
            <Route path="login" element={<Login />} />

            <Route
                path="dashboard"
                element={
                    <ProtectedRoutes>
                        <DashboardLayout />
                    </ProtectedRoutes>
                }
            >
                {" "}
                <Route index element={<Home />} />
                <Route path="catalog" element={<Catalog />} />
                <Route path="my-library" element={<Library />}>
                    <Route path=":section" element={<LibrarySection />} />
                </Route>
            </Route>

            <Route path="signup/success" element={<SignUpSuccess />} />
        </Routes>
    );
}

export default AppRoutes;
