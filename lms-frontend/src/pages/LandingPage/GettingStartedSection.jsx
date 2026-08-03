// Local modules
import person from "../../assets/person.png";
import searchBook from "../../assets/searchBook.png";
import reserveBook from "../../assets/reserveBook.png";

const GettingStartedSection = () => {
    return (
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
    );
};

export default GettingStartedSection;
