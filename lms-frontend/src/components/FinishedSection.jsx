// Third Party
import { Link } from "react-router-dom";

export default function FinishedSection() {
    return (
        <div className="flex flex-col items-center justify-center my-[50%]">
            <h1 className="text-base font-bold">History is coming soon</h1>
            <p className="text-sm w-[70%] text-center mt-5 mb-6 text-[#808080]">
                Books you finish will be tracked here along with your reading
                stats and streak. Start your first book when reading goes live.
            </p>
            <Link to="/dashboard/catalog" className="text-xs text-[#808080]">
                Browse catalog &rarr;
            </Link>
        </div>
    );
}
