// Third Party
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Local Modules
import ProtectedRoutes from "./ProtectedRoutes";
import SignUpSuccess from "./SignUpSuccess";
import LandingPage from "../pages/LandingPage";
import CreateAccount from "../pages/CreateAccount";
import SignIn from "../pages/SignIn";
import Dashboard from "../pages/Dashboard";

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
