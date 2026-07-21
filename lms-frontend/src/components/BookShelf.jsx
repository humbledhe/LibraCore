import bookicon from "../assets/bookicon.png";

export default function BookShelf({ isActive, query, books, clearResults }) {
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

    return (
        <section>
            {!isActive ? (
                <>
                    <div className="flex justify-between text-[25px] mt-[150px]">
                        <p className="text-amber-500">ON THE SHELVES</p>
                        <p className="text-amber-500">
                            Browse full catalog &rarr;
                        </p>
                    </div>
                    <h2 className="text-[60px] mt-[16px] font-bold">
                        Featured Books
                    </h2>
                    <div>
                        {staticBooks.map(book => (
                            <div
                                key={book.id}
                                className="flex gap-[35px] mb-[40px] shadow-[0_4px_12px_rgba(0,0,0,0.06)] rounded-[30px] border border-[#ECECEC] py-[35px] pl-[40px]"
                            >
                                <img
                                    className="w-[100px] h-[150px]"
                                    src={book.bookIcon}
                                />
                                <div>
                                    <p className="font-bold text-[38px] mb-[15px]">
                                        {book.title}
                                    </p>
                                    <p className="text-[#808080] text-[25px] leading-[2px]">
                                        {book.author}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>{" "}
                </>
            ) : (
                <div className="mt-[6em]">
                    <h1 className="text-5xl font-bold">
                        Results for &ldquo;{query}&rdquo;
                    </h1>
                    <p className="mt-[6px] text-2xl text-[#808080]">
                        {`${books.length} ${books.length === 1 ? "book" : "books"} found`}
                    </p>
                    <p
                        onClick={clearResults}
                        className="text-3xl mt-[1em] text-[#C58A3A]"
                    >
                        &#10006; Clear search
                    </p>

                    <div className="ml-[0.5em] my-[4em]">
                        {books.map(book => (
                            <div
                                key={book.id}
                                className="border border-white w-full bg-white pt-[2em] pb-[7em] text-black rounded-[20px] shadow-lg mb-[16px]"
                            >
                                <div className="flex items-center gap-[20px] flex-start mt-0">
                                    <img
                                        src={book.image_links}
                                        alt="thumbnail"
                                        className="w-[100px] h-[150px] rounded-[20px] ml-[3em]"
                                    />

                                    <div>
                                        <p className="text-3xl font-bold">
                                            {book.title}
                                        </p>
                                        <p className="text-[#808080] text-2xl">
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
