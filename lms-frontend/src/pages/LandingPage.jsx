// Third Party
// Third Party
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

//import axios from "axios";

// Local modules
import api from "../api/axios";

import Logo from "../components/Logo";
import Header from "../components/Header.jsx";
import BookShelf from "../components/BookShelf.jsx";

import person from "../assets/person.png";
import searchBook from "../assets/searchBook.png";
import reserveBook from "../assets/reserveBook.png";

export default function LandingPage() {
    const [showResults, setShowResults] = useState(false);
    const [clearSearch, setClearSearch] = useState(false);
    const [toggleBookShelf, setToggleBookShelf] = useState(false);
    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);

    const [query, setQuery] = useState("");

    const [books, setBooks] = useState([]);

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

    const clearResults = () => {
        setQuery("");
        setToggleBookShelf(false);
        setClearSearch(!clearSearch);
        setShowResults(false);
        setBooks([]);
    };

    return (
        <>
            <Header />

            <header className="relative text-[#ffffff] bg-radial from-[#121E36] to-[#202022] flex flex-col items-center">
                <span className="mt-[150px] mb-[8px]">
                    <Logo />
                </span>
                <p className="text-[35px] mx-[auto] text-center w-[85%]">
                    Browse thousands of books, reserve a copy, and track your
                    loans -- all online. No late-night guesswork.
                </p>
                <div className="pt-[75px] w-[85%]">
                    <div className="flex w-full">
                        <input
                            type="search"
                            value={query}
                            onChange={e => setQuery(e.target.value)}
                            placeholder="Search by title, author or genre..."
                            className="flex-1 text-[16px] border border[#808080] pt-[27px] pr-[35px] pb-[25px] pl-[25px] rounded-[20px] placeholder:pl-[40px] text-[28px]"
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

                <ul className="flex justify-center gap-[2em] text-[26px] mt-[70px] list-none">
                    <li className="border border-[#808080] px-[30px] py-[20px] mb-[150px] rounded-[40px] text-[#808080]">
                        Fiction
                    </li>
                    <li className="border border-[#808080] px-[30px] py-[20px] mb-[150px] rounded-[40px] text-[#808080]">
                        Sci-Fi
                    </li>
                    <li className="border border-[#808080] px-[30px] py-[20px] mb-[150px] rounded-[40px] text-[#808080]">
                        Tech
                    </li>
                    <li className="border border-[#808080] px-[30px] py-[20px] mb-[150px] rounded-[40px] text-[#808080]">
                        Fantasy
                    </li>
                </ul>
            </header>

            <main className="px-[30px]">
                <section>
                    {
                        // Display the static books shelf when show results is false
                        showResults ? (
                            <BookShelf
                                isActive={true}
                                query={query}
                                books={books}
                                clearResults={clearResults}
                            />
                        ) : (
                            <BookShelf isActive={false} />
                        )
                    }
                </section>

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

                <section className="bg-[#F1EFE6] flex flex-col items-center">
                    <p className="text-amber-500 pt-[20px] text-[25px] spacing-[2px]">
                        GETTING STARTED
                    </p>
                    <p className="text-[45px] font-bold mt-[30px] spacing-none">
                        Borrow a book in three steps
                    </p>

                    <div className="flex flex-col items-center w-[90%] bg-[#ffffff] rounded-[30px] mb-[60px]">
                        <img
                            className="pt-[80px]"
                            src={person}
                            alt="person icon"
                            width="150"
                        />
                        <p className="text-[40px] spacing-none font-bold mt-[30px]">
                            Create an account
                        </p>
                        <p className="text-[26px] text-[#808080] spacing-none">
                            Sign up under a minute -- it's free, always
                        </p>
                    </div>

                    <div className="flex flex-col items-center w-[90%] bg-[#ffffff] rounded-[30px] mb-[60px]">
                        <img
                            className="pt-[80px]"
                            src={searchBook}
                            alt="person icon"
                            width="150"
                        />
                        <p className="text-[40px] spacing-none font-bold mt-[30px]">
                            Find your book
                        </p>
                        <p className="text-[26px] text-[#808080] spacing-none">
                            Search the catalog and check real-time availability
                        </p>
                    </div>

                    <div className="flex flex-col items-center w-[90%] bg-[#ffffff] rounded-[30px] mb-[60px]">
                        <img
                            className="pt-[80px]"
                            src={reserveBook}
                            alt="person icon"
                            width="150"
                        />
                        <p className="text-[40px] spacing-none font-bold mt-[30px]">
                            Reserve & pick up
                        </p>
                        <p className="text-[26px] text-[#808080] spacing-none">
                            Reserve online, then collect from the library desk
                        </p>
                    </div>
                </section>
            </main>

            <footer className="flex gap-[1.5rem] flex-col items-center bg-[#181828] text-[25px] text-[#808080]">
                <h3 className="text-[#ffffff] text-4xl font-bold mt-8">
                    Libra<span className="text-amber-500">Core</span>
                </h3>
                <nav>
                    <ul className="flex gap-[1.5rem] list-none">
                        <li>
                            <Link
                                to="/catalog"
                                className="decoration-none text-[#808080]"
                            >
                                Catalog
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/about"
                                className="decoration-none text-[#808080]"
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="privacy">Privacy</Link>
                        </li>
                        <li>
                            <Link
                                to="/contact"
                                className="decoration-none text-[#808080]"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
                <p className="mb-8">
                    &copy; 2026 LibraCore Libray System, All rights reserved
                </p>
            </footer>
        </>
    );
}
