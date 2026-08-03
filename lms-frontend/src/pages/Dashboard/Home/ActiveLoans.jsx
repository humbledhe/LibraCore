//Third Party
import { Link } from "react-router-dom";
// Local modules
import mailbox from "../../../assets/mailbox.png";

const ActiveLoans = () => {
    return (
        <section>
            <h2 className="text-3xl font-bold mb-[1em]">Your Loans</h2>
            <div className="flex flex-col items-center border-none bg-white rounded-[24px] py-[5em] w-[95%] mx-auto">
                <img className="w-[100px]" src={mailbox} />
                <p className="text-2xl font-bold">No active loans yet</p>
                <p className="text-xl text-[#808080] w-[60%] text-center">
                    You haven't borrowed any books yet. Browse the catalog and
                    reserve one -- collect it at the library desk
                </p>
                <Link
                    to="/dashboard/catalog"
                    className="bg-[#C98A3A] py-[1em] px-[2em] text-white rounded-[16px] font-bold text-xl mt-[2em]"
                >
                    Browse Catalog
                </Link>
            </div>
        </section>
    );
};

export default ActiveLoans;
