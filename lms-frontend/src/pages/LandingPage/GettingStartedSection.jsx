// Local modules
import person from "../../assets/person.png";
import searchBook from "../../assets/searchBook.png";
import reserveBook from "../../assets/reserveBook.png";

const GettingStartedSection = () => {
    return (
        <section className="bg-[#F1EFE6] flex flex-col items-center rounded-xl">
            <p className="text-amber-500 pt-5 text-base spacing-1">
                GETTING STARTED
            </p>
            <p className="text-sm font-bold my-7 spacing-none">
                Borrow a book in three steps
            </p>

            <div className="flex flex-col items-center w-[90%] bg-[#ffffff] rounded-xl mb-15 py-10">
                <img src={person} alt="person icon" width="75" />
                <p className="text-sm spacing-none font-bold mt-4">
                    Create an account
                </p>
                <p className="text-xs text-[#808080] spacing-none">
                    Sign up under a minute -- it's free, always
                </p>
            </div>

            <div className="flex flex-col items-center w-[90%] bg-[#ffffff] rounded-xl mb-15 py-10">
                <img src={searchBook} alt="person icon" width="75" />
                <p className="text-sm spacing-none font-bold mt-4">
                    Find your book
                </p>
                <p className="text-xs text-[#808080] spacing-none">
                    Search the catalog and check real-time availability
                </p>
            </div>

            <div className="flex flex-col items-center w-[90%] bg-[#ffffff] rounded-xl mb-15 py-10">
                <img src={reserveBook} alt="person icon" width="75" />
                <p className="text-sm spacing-none font-bold mt-4">
                    Reserve & pick up
                </p>
                <p className="text-xs text-[#808080] spacing-none">
                    Reserve online, then collect from the library desk
                </p>
            </div>
        </section>
    );
};

export default GettingStartedSection;
