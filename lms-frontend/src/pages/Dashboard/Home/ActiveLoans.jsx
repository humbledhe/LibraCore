//Third Party
import { Link } from "react-router-dom";
// Local modules
import mailbox from "../../../assets/mailbox.png";

const ActiveLoans = () => {
    return (
        <section>
            <h2 className="text-base font-bold mb-3">Your Loans</h2>
            <div className="flex flex-col items-center border-none bg-white rounded-xl py-10 w-[95%] mx-auto">
                <img className="w-9" src={mailbox} />
                <p className="text-sm font-bold">No active loans yet</p>
                <p className="text-xs text-[#808080] w-[75%] text-center">
                    You haven't borrowed any books yet. Browse the catalog and
                    reserve one -- collect it at the library desk
                </p>
                <Link
                    to="/dashboard/catalog"
                    className="bg-[#C98A3A] py-1 px-6 text-white rounded-xl font-bold text-xs mt-2"
                >
                    Browse Catalog
                </Link>
            </div>
        </section>
    );
};

export default ActiveLoans;
