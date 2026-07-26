// Third Party
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Local Modules
import ProtectedRoutes from "./ProtectedRoutes.jsx";
import SignUpSuccess from "./SignUpSuccess.jsx";
import LandingPage from "../pages/LandingPage.jsx";
import CreateAccount from "../pages/CreateAccount.jsx";
import SignIn from "../pages/SignIn.jsx";
import Dashboard from "../pages/Dashboard.jsx";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/signup" element={<CreateAccount />} />
                <Route path="/login" element={<SignIn />} />
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoutes>
                            <Dashboard />
                        </ProtectedRoutes>
                    }
                />
                <Route path="/signup/success" element={<SignUpSuccess />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
