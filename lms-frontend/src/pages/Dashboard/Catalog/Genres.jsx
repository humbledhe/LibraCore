// Third Party
import { Link } from "react-router-dom";
// Local modules

import React from "react";

export default function Genres({ books }) {
    // return <h1 className="mt-[20em]">Hello</h1>;
    return (
        <div className="mt-40 pt-4">
            {books.map(book => (
                <div
                    key={book.id}
                    className="mx-4 mt-6 flex items-center gap-8 border-none p-8 bg-white rounded-xl last:mb-25"
                >
                    <div className="w-14">
                        <img src={book.image_links} loading="lazy" />
                    </div>
                    <div className="w-full">
                        <p className="text-base font-bold">{book.title}</p>
                        <p className="text-[#808080] text-sm mt-1">
                            {book.authors}
                        </p>
                        <p className="text-[#808080] text-xs w-[85%]">
                            {book.subtitle}
                        </p>
                        <div className="flex justify-between w-full items-center mt-2">
                            <div>
                                <p
                                    className={
                                        book.categories
                                            ? "text-[#6D2BD9] text-xs bg-[#F3E8FF] font-bold mt-1 py-1 px-3 rounded-xl"
                                            : ""
                                    }
                                >
                                    {book.categories}
                                </p>
                            </div>
                            <div className="flex items-center gap-[3em]">
                                {/* <p>icon</p> */}
                                <Link
                                    to="/dashboard/my-library/Reading"
                                    className="text-xs font-bold bg-[#6D28D9] text-white py-1 px-4 rounded-xl"
                                >
                                    Read
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
