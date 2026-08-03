// Local modules
import BookShelf from "../../components/BookShelf.jsx";

const BookshelfSection = ({ showResults, query, books, clearResults }) => {
    return (
        <section>
            {showResults ? (
                <BookShelf
                    isActive={true}
                    query={query}
                    books={books}
                    clearResults={clearResults}
                />
            ) : (
                <BookShelf isActive={false} />
            )}
        </section>
    );
};

export default BookshelfSection;
