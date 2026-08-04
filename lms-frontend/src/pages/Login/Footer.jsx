import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="mx-4 font-bold text-xs bg-[#F2EFD9] py-2 pl-8 mt-7 rounded-xl">
            <p>Are you library staff?</p>
            <Link to="/staff/signin" className="text-amber-500 decoration-none">
                <p>sign in with staff account &rarr;</p>
            </Link>
        </footer>
    );
};

export default Footer;
