// Local Modules
import Header from "./Header.jsx";
import ActiveLoans from "./ActiveLoans.jsx";

const Home = () => {
    return (
        <>
            <Header />
            <main className="bg-[#F5F4F0] pt-4 mx-2">
                <ActiveLoans />
            </main>
        </>
    );
};

export default Home;
