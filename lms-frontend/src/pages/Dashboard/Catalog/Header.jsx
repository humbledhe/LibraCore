// Third Party
import { useEffect, useState } from "react";
// Local Modules
import api from "../../../api/axios";

import Search from "../../../components/Search.jsx";

const Header = ({ setBooks }) => {
    const [isLoading, setLoading] = useState(false);

    const [error, setError] = useState(null);

    const [query, setQuery] = useState("");

    useEffect(() => {
        setError(null); // clear error before fetching

        // when the user stops typing for x seconds, run this code
        const delayDebounce = setTimeout(async () => {
            if (!query.trim()) return;

            setLoading(true);

            if (query.length > 0) {
                try {
                    const response = await api.get("books/search", {
                        params: {
                            q: query
                        }
                    });

                    setBooks(response.data);
                } catch (err) {
                    setError(err);
                } finally {
                    setLoading(false);
                }
            }
        }, 500);

        return () => clearTimeout(delayDebounce);
    }, [query]);

    return (
        <header className="px-4 py-4 fixed top-0 left-0 w-full bg-white z-50">
            <h1 className="text-base font-bold">Catalog</h1>
            <Search setQuery={setQuery} />
        </header>
    );
};

export default Header;
