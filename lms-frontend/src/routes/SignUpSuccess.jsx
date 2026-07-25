// Third Party
import { Link, Navigate, useLocation } from "react-router-dom";

const SignUpSuccess = () => {
    const location = useLocation();

    if (!location.state?.signUpSuccess)
        return <Navigate to="/signup" replace />;

    return (
        <>
            <div className="text-center my-[50%]">
                <h1 className="text-5xl font-bold">Welcome to LibraCore</h1>
                <p className="text-4xl font-bold mb-[2em]">User!</p>
                <Link
                    to="/login"
                    className="text-2xl border-none py-[1em] px-[5em] rounded-[20px] font-bold bg-gradient-to-br from-amber-500 to-amber-700 text-white"
                >
                    Sign in to continue
                </Link>
            </div>
        </>
    );
};

export default SignUpSuccess;
