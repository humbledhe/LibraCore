// Local Modules
import Header from "./Header.jsx";
import ActiveLoans from "./ActiveLoans.jsx";
import ExploreGenres from "./ExploreGenres.jsx";

const Home = () => {
    return (
        <>
            <Header />
            <main className="bg-[#F5F4F0] pt-[2em] mx-[1em]">
                <ActiveLoans />
                <ExploreGenres />
            </main>
        </>
    );
};

export default Home;
