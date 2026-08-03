// Third Party
import { Link } from "react-router-dom";

export default function FinishedSection() {
    return (
        <div className="flex flex-col items-center justify-center my-[50%]">
            <h1 className="text-4xl font-bold">History is coming soon</h1>
            <p className="text-2xl w-[48%] text-center mt-5 mb-[3em] text-[#808080]">
                Books you finish will be tracked here along with your reading
                stats and streak. Start your first book when reading goes live.
            </p>
            <Link to="/dashboard/catalog" className="text-xl text-[#808080]">
                Browse catalog &rarr;
            </Link>
        </div>
    );
}
