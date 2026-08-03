// Third Party
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="mx-[30px] font-bold text-[25px] bg-[#F2EFD9] py-[1em] pl-[3em] mt-[3em] rounded-[30px]">
            <p>Are you library staff?</p>
            <Link to="/staff/signin" className="text-amber-500 decoration-none">
                <p>sign in with staff account &rarr;</p>
            </Link>
        </footer>
    );
};

export default Footer;
