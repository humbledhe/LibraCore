// Third Party
import { Link } from "react-router-dom";

const AuthCTA = () => {
    return (
        <section className="border border-[#000000] mb-15 bg-linear-to-l from-[#102A52] to-[#181831] py-8 pl-8 rounded-xl">
            <p className="font-bold text-base mb-5 text-[#ffffff]">
                Want to reserve or borrow?
            </p>
            <p className="text-sm text-[#808080] mb-16">
                Sign in or create a free account to get started
            </p>
            <Link
                to="/login"
                className="decoration-none text-xs py-3 px-6 text-[#ffffff] border border-[#000000] mr-7 rounded-[20px]"
            >
                Sign In
            </Link>
            <Link
                to="/signup"
                className="decoration-none text-xs text-black border border-black py-3 px-6 rounded-[20px] font-bold bg-[#ffa500ce]"
            >
                Join free
            </Link>
        </section>
    );
};

export default AuthCTA;
