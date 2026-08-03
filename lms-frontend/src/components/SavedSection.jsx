// Third Party
import { Link } from "react-router-dom";

export default function SavedSection() {
    return (
        <div className="flex flex-col items-center justify-center my-[50%]">
            <h1 className="text-4xl font-bold">Saved list coming soon</h1>
            <p className="text-2xl w-[48%] text-center mt-5 mb-[3em] text-[#808080]">
                Saving books to your personal library is on the way. You'll be
                able to bookmark any book and find it here instantly
            </p>
            <Link to="/dashboard/catalog" className="text-xl text-[#808080]">
                Browse catalog &rarr;
            </Link>
        </div>
    );
}
