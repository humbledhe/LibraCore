// Third Party
import { Link } from "react-router-dom";
// import { useEffect } from "react";
// Local modules
import Header from "../components/Header/Header.jsx";
import bookicon from "../assets/bookicon.png";
import person from "../assets/person.jpeg";
import search from "../assets/search.jpeg";
import book from "../assets/book.jpeg";

function LandingPage() {
    return (
        <>
            <Header />

            <header className="text-[#ffffff] bg-radial from-[#121E36] to-[#202022] flex flex-col items-center">
                <h1 className="text-[75px] mt-[150px] mb-[8px]">
                    Welcome to Libra
                    <span className="text-amber-500 font-bold">Core</span>
                </h1>
                <p className="text-[35px] mx-[auto] text-center w-[85%]">
                    Browse thousands of books, reserve a copy, and track your
                    loans -- all online. No late-night guesswork.
                </p>
                <form className="pt-[75px] w-[85%]">
                    <div className="flex w-full">
                        <input
                            type="search"
                            placeholder="Search by title, author or genre..."
                            className="flex-1 text-[16px] border border[#808080] pt-[27px] pr-[35px] pb-[25px] pl-[25px] rounded-l-[20px] placeholder:pl-[40px] text-[28px]"
                        />

                        <button
                            type="submit"
                            className="px-[40px] pt-[40px] pb-[31px] text-[#ffffff] bg-[#ffa500e3] text-[25px] border border-[#808080] rounded-r-[20px]"
                        >
                            Search
                        </button>
                    </div>
                </form>

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
                    <div className="flex justify-between text-[25px] mt-[150px]">
                        <p className="text-amber-500">ON THE SHELVES</p>
                        <p className="text-amber-500">
                            Browse full catalog &rarr;
                        </p>
                    </div>
                    <h2 className="text-[60px] mt-[16px] font-bold">
                        Featured Books
                    </h2>
                    <div className="flex gap-[35px] mb-[40px] shadow-[0_4px_12px_rgba(0,0,0,0.06)] rounded-[30px] border border-[#ECECEC] py-[35px] pl-[40px]">
                        <img className="w-[100px] h-[150px]" src={bookicon} />
                        <div>
                            <p className="font-bold text-[38px] mb-[15px]">
                                The Great Gatshy
                            </p>
                            <p className="text-[#808080] text-[25px] leading-[2px]">
                                F. Scott Fitzgerald
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-[35px] mb-[40px] shadow-[0_4px_12px_rgba(0,0,0,0.06)] rounded-[30px] border border-[#ECECEC] py-[35px] pl-[40px]">
                        <img className="w-[100px] h-[150px]" src={bookicon} />
                        <div>
                            <p className="font-bold text-[38px] mb-[15px]">
                                The Great Gatshy
                            </p>
                            <p className="text-[#808080] text-[25px] leading-[2px]">
                                F. Scott Fitzgerald
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-[35px] mb-[40px] shadow-[0_4px_12px_rgba(0,0,0,0.06)] rounded-[30px] border border-[#ECECEC] py-[35px] pl-[40px]">
                        <img className="w-[100px] h-[150px]" src={bookicon} />
                        <div>
                            <p className="font-bold text-[38px] mb-[15px]">
                                The Great Gatshy
                            </p>
                            <p className="text-[#808080] text-[25px] leading-[2px]">
                                F. Scott Fitzgerald
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-[35px] mb-[40px] shadow-[0_4px_12px_rgba(0,0,0,0.06)] rounded-[30px] border border-[#ECECEC] py-[35px] pl-[40px]">
                        <img className="w-[100px] h-[150px]" src={bookicon} />
                        <div>
                            <p className="font-bold text-[38px] mb-[15px]">
                                The Great Gatshy
                            </p>
                            <p className="text-[#808080] text-[25px] leading-[2px]">
                                F. Scott Fitzgerald
                            </p>
                        </div>
                    </div>
                </section>

                <section className="border border-[#000000] mb-[60px] bg-linear-to-l from-[#102A52] to-[#181831] pt-[10px] pb-[70px] pl-[80px]">
                    <p className="font-bold text-[45px] mb-[20px] text-[#ffffff]">
                        Want to reserve or borrow?
                    </p>
                    <p className="text-[30px] text-[#808080] mb-[70px]">
                        Sign in or create a free account to get started
                    </p>
                    <Link
                        to="signin"
                        className="decoration-none text-[32px] py-[20px] px-[40px] text-[#ffffff] border border-[#000000] mr-[30px] rounded-[20px]"
                    >
                        Sign In
                    </Link>
                    <Link
                        to="signup"
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
                            src={search}
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
                            src={book}
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

            <footer className="flex flex-col items-center bg-[#181828] text-[25px] text-[$808080]">
                <h3 className="text-[#ffffff]">
                    Libra<span className="text-amber-500">Core</span>
                </h3>
                <nav>
                    <ul className="flex gap-[1.2em] list-none">
                        <li>
                            <Link
                                to="catalog"
                                className="decoration-none text-[#808080]"
                            >
                                Catalog
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="about"
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
                                to="contact"
                                className="decoration-none text-[#808080]"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
                <p>&copy; 2026 LibraCore Libray System, All rights reserved</p>
            </footer>
        </>
    );
}

export default LandingPage;
