// Local modules
import bookicon from "../assets/bookicon.png";

const staticBooks = [
    {
        id: 1,
        title: "The great gatsby",
        author: "F. Scott Fitzgerald",
        bookIcon: bookicon
    },
    {
        id: 2,
        title: "Atomic Habits",
        author: "james clear",
        bookIcon: bookicon
    },
    {
        id: 3,
        title: "Harry Potter",
        author: "JK. Rowling",
        bookIcon: bookicon
    },
    {
        id: 4,
        title: "Dune",
        author: "Frank Herbert",
        bookIcon: bookicon
    }
];

export default function BookShelf({ isActive, query, books, clearResults }) {
    return (
        <section>
            {!isActive ? ( // Displays data when show results is clicked
                <>
                    <div className="flex justify-between text-xs mt-32">
                        <p className="text-amber-500">ON THE SHELVES</p>
                        <p className="text-amber-500">
                            Browse full catalog &rarr;
                        </p>
                    </div>
                    <h2 className="text-base mt-4 font-bold">Featured Books</h2>
                    <div>
                        {staticBooks.map(book => (
                            <div
                                key={book.id}
                                className="flex gap-8 mb-9 shadow-[0_4px_12px_rgba(0,0,0,0.06)] rounded-xl border border-[#ECECEC] py-8 pl-9"
                            >
                                <img
                                    className="w-12"
                                    src={book.bookIcon}
                                    loading="lazy"
                                />
                                <div>
                                    <p className="font-bold text-base mb-4">
                                        {book.title}
                                    </p>
                                    <p className="text-[#808080] text-xm leading-2">
                                        {book.author}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>{" "}
                </>
            ) : (
                // Default data when show results is not clicked
                <div className="mt-20">
                    <h1 className="text-base font-bold">
                        Results for &ldquo;{query}&rdquo;
                    </h1>
                    <p className="mt-1 text-sm text-[#808080]">
                        {`${books.length} ${books.length === 1 ? "book" : "books"} found`}
                    </p>
                    <p
                        onClick={clearResults}
                        className="text-xs mt-2 text-[#C58A3A]"
                    >
                        &#10006; Clear search
                    </p>

                    <div className="ml-1 my-4">
                        {books.map(book => (
                            <div
                                key={book.id}
                                className="border border-white w-full bg-white pt-4 pb-10 text-black rounded-xl shadow-lg mb-4"
                            >
                                <div className="flex items-center gap-4 flex-start mt-0">
                                    <img
                                        src={book.image_links}
                                        loading="lazy"
                                        alt="thumbnail"
                                        className="w-10 rounded-xl ml-4"
                                    />

                                    <div>
                                        <p className="text-sm font-bold">
                                            {book.title}
                                        </p>
                                        <p className="text-[#808080] text-xs">
                                            {book.authors}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}
