// Third Party
import { Outlet } from "react-router-dom";
// Local modules
import Footer from "./Footer.jsx";

const DashboardLayout = () => {
    return (
        <>
            <Outlet />
            <Footer />
        </>
    );
};

export default DashboardLayout;
