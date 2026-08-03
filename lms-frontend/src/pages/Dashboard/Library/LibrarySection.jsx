// Third Party
import { useParams } from "react-router-dom";
// Local modules
import ReadingSection from "../../../components/ReadingSection.jsx";
import SavedSection from "../../../components/SavedSection.jsx";
import FinishedSection from "../../../components/FinishedSection.jsx";

export default function LibrarySection() {
    const { section } = useParams();

    if (section === "Reading") return <ReadingSection />;
    else if (section === "Saved") return <SavedSection />;
    else return <FinishedSection />;
}
