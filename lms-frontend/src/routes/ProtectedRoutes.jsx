// Third Party
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function ProtectedRoutes({ children }) {
    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    const { exp } = jwtDecode(token);

    try {
        if (exp * 1000 < Date.now()) {
            localStorage.removeItem("token");
            return <Navigate to="/login" replace />;
        }
    } catch {
        localStorage.removeItem("token");
        return <Navigate to="/login" replace />;
    }

    return children;
}
