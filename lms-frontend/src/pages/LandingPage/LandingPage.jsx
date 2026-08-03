// Third Party
import { useState } from "react";

// Local modules
import Header from "../../components/Header.jsx";
import BookshelfSection from "./BookshelfSection.jsx";
import Hero from "./Hero.jsx";
import AuthCTA from "./AuthCTA.jsx";
import GettingStartedSection from "./GettingStartedSection.jsx";
import Footer from "./Footer.jsx";

const LandingPage = () => {
    const [showResults, setShowResults] = useState(false);
    const [clearSearch, setClearSearch] = useState(false);
    const [toggleBookShelf, setToggleBookShelf] = useState(false);

    const [query, setQuery] = useState("");

    const [books, setBooks] = useState([]);

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
            <Hero
                showResults={showResults}
                setShowResults={setShowResults}
                clearSearch={clearSearch}
                setToggleBookShelf={setToggleBookShelf}
                query={query}
                setQuery={setQuery}
                books={books}
                setBooks={setBooks}
                setClearSearch={setClearSearch}
            />
            <main className="px-[30px]">
                <BookshelfSection
                    showResults={showResults}
                    query={query}
                    books={books}
                    clearResults={clearResults}
                />
                <AuthCTA />
                <GettingStartedSection />
            </main>
            <Footer />
        </>
    );
};

export default LandingPage;
