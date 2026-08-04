// Third Party
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/">
            <h1 className="text-2xl font-bold">
                Libra<span className="text-amber-500">Core</span>
            </h1>
        </Link>
    );
};

export default Logo;
