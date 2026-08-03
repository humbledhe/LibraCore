// Third Party
import { Link } from "react-router-dom";

const AuthCTA = () => {
    return (
        <section className="border border-[#000000] mb-[60px] bg-linear-to-l from-[#102A52] to-[#181831] pt-[10px] pb-[70px] pl-[80px] rounded-[20px]">
            <p className="font-bold text-[45px] mb-[20px] text-[#ffffff]">
                Want to reserve or borrow?
            </p>
            <p className="text-[30px] text-[#808080] mb-[70px]">
                Sign in or create a free account to get started
            </p>
            <Link
                to="/login"
                className="decoration-none text-[32px] py-[20px] px-[40px] text-[#ffffff] border border-[#000000] mr-[30px] rounded-[20px]"
            >
                Sign In
            </Link>
            <Link
                to="/signup"
                className="decoration-none text-[32px] text-[#000000] border border-[#000000] py-[20px] px-[40px] rounded-[20px] font-bold bg-[#ffa500ce]"
            >
                Join free
            </Link>
        </section>
    );
};

export default AuthCTA;
