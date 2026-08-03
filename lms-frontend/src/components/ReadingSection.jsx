// Third Party
import { Link } from "react-router-dom";

export default function ReadingSection() {
    return (
        <div className="flex flex-col items-center justify-center my-[50%]">
            <h1 className="text-4xl font-bold">Reading is coming soon</h1>
            <p className="text-2xl w-[48%] text-center mt-5 mb-[3em] text-[#808080]">
                We're building the in-app experience. Once its live, books you
                open will appear here with your progress
            </p>
            <Link to="/dashboard/catalog" className="text-xl text-[#808080]">
                Browse catalog &rarr;
            </Link>
        </div>
    );
}
