// Third Party
import { Link } from "react-router-dom";
// Local modules

import React from "react";

export default function Genres({ books }) {
    // return <h1 className="mt-[20em]">Hello</h1>;
    return (
        <div className="mt-[20em] pt-[2em] mb-[3em] bg-[#F5F4F0]">
            {books.map(book => (
                <div
                    key={book.id}
                    className="mx-[2em] mt-[1em] flex gap-8 border-none p-[2em] bg-white rounded-[20px] last:mb-[20em]"
                >
                    <div className="w-[100px]">
                        <img src={book.image_links} />
                    </div>
                    <div className="w-full">
                        <p className="text-4xl font-bold">{book.title}</p>
                        <p className="text-[#808080] text-2xl mt-[0.5em]">
                            {book.authors}
                        </p>
                        <p className="text-[#808080] text-2xl w-[85%]">
                            {book.subtitle}
                        </p>
                        <div className="flex justify-between w-full items-center mt-[1em]">
                            <div>
                                <p className="text-[#6D2BD9] text-xl bg-[#F3E8FF] font-bold mt-[0.5em] py-[4px] px-[26px] rounded-[16px]">
                                    {book.categories}
                                </p>
                            </div>
                            <div className="flex items-center gap-[3em]">
                                <p>icon</p>
                                <Link
                                    to="/dashboard/my-library/Reading"
                                    className="text-xl font-bold bg-[#6D28D9] text-white py-[16px] px-[32px] rounded-[14px]"
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
