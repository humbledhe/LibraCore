// Third Party
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Local Modules
import LandingPage from "../pages/LandingPage.jsx";
import CreateAccount from "../pages/CreateAccount.jsx";
import SignIn from "../pages/SignIn";

function AppRoutes(props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/signup" element={<CreateAccount />} />
                <Route path="/signin" element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
