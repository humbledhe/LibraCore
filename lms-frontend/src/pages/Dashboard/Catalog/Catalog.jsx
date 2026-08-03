// Third Party
import { useState } from "react";
// Local modules
import Header from "./Header.jsx";
import Genres from "./Genres.jsx";

const Catalog = () => {
    const [books, setBooks] = useState([]);
    return (
        <>
            <Header setBooks={setBooks} />
            <Genres books={books} />
        </>
    );
};

export default Catalog;
