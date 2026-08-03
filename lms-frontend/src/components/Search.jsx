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
            className="w-full bg-[#EFEEEA] text-3xl mb-[1em] text-[#8E949C] font-bold indent-[2em] border-none border-[#E2DDD2] mt-[2em] py-[1em] rounded-[20px] placeholder:text-[#A8ADB5] active:border-none"
        />
    );
};

export default Search;
