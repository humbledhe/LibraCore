// Third Party
import { useState, useEffect } from "react";
// Local modules
import api from "../../api/axios";

import Logo from "../../components/Logo.jsx";

const Hero = ({
    showResults,
    setShowResults,
    clearSearch,
    setClearSearch,
    setToggleBookShelf,
    query,
    setQuery,
    books,
    setBooks
}) => {
    const [isLoading, setLoading] = useState(false);

    const [error, setError] = useState(null);

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

    const results = () => {
        setShowResults(true);
        setToggleBookShelf(true);
        setClearSearch(clearSearch);
    };

    return (
        <div className="relative text-[#ffffff] bg-radial from-[#121E36] to-[#202022] flex flex-col items-center">
            <span className="mt-37 mb-2">
                <Logo />
            </span>
            <p className="text-sm mx-[auto] text-center w-[85%]">
                Browse thousands of books, reserve a copy, and track your loans
                -- all online. No late-night guesswork.
            </p>
            <div className="pt-16 w-[85%]">
                <div className="flex w-full">
                    <input
                        type="search"
                        value={query}
                        onChange={e => setQuery(e.target.value)}
                        placeholder="Search by title, author or genre..."
                        className="flex-1 text-xs border border[#808080] px-5 py-6 rounded-xl"
                    />
                </div>
                {
                    // Displays the first instance of books on screen, if book exists
                    error && error.response?.status === 404 && query ? (
                        <div className="absolute z-100 top-[35em] border border-white w-[85%] bg-white py-[3em] rounded-[20px] shadow-lg overflow-hidden">
                            <p className="text-[#808080] text-center text-2xl">
                                No search results for{" "}
                                <span className="font-bold">{`"${query}"`}</span>
                            </p>
                        </div>
                    ) : (
                        query.trim() !== "" &&
                        books.length > 0 &&
                        !showResults && (
                            <div
                                key={books[0].id}
                                className="absolute z-100 top-[35em] border border-white w-[85%] bg-white pt-[2em] pb-[7em] text-black rounded-[20px] shadow-lg overflow-hidden"
                            >
                                <div className="flex items-center gap-[20px] flex-start mt-0">
                                    <img
                                        src={books[0].image_links}
                                        alt="thumbnail"
                                        className="w-[100px] h-[150px] rounded-[20px] ml-[3em]"
                                    />

                                    <div>
                                        <p className="text-3xl font-bold">
                                            {books[0].title}
                                        </p>
                                        <p className="text-[#808080] text-2xl">
                                            {books[0].authors}
                                        </p>
                                    </div>
                                </div>

                                <p
                                    onClick={results}
                                    className="absolute z-100 bg-[#E8E2D7] text-[#C58A3A] text-center bottom-0 w-full rounded-bl-[20px] rounded-br-[20px] py-[0.6em] text-3xl font-bold"
                                >
                                    See all results for &ldquo;{query}
                                    &rdquo; →
                                </p>
                            </div>
                        )
                    )
                }
            </div>

            <ul className="flex justify-center gap-8 text-xs mt-17 list-none mb-37">
                <li className="border border-[#808080] px-3 py-1 rounded-xl text-[#808080]">
                    Fiction
                </li>
                <li className="border border-[#808080] px-3 py-1 rounded-xl text-[#808080]">
                    Sci-Fi
                </li>
                <li className="border border-[#808080] px-3 py-1 rounded-xl text-[#808080]">
                    Tech
                </li>
                <li className="border border-[#808080] px-3 py-1 rounded-xl text-[#808080]">
                    Fantasy
                </li>
            </ul>
        </div>
    );
};

export default Hero;
