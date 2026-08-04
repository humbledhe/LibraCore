// Third Party
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Search = ({ setQuery }) => {
    const loaction = useLocation();
    const inputRef = useRef(null);

    useEffect(() => {
        if (location.pathname === "/dashboard/catalog")
            inputRef.current?.focus();
    }, [location.pathname]);

    return (
        <input
            onChange={e => setQuery(e.target.value)}
            placeholder="Search books"
            ref={inputRef}
            className="w-full bg-[#EFEEEA] text-sm mb-10 text-[#8E949C] font-bold indent-5 border-none border-[#E2DDD2] mt-7 py-3 rounded-xl placeholder:text-[#A8ADB5] active:border-none"
        />
    );
};

export default Search;
