// Third Party
import { Link } from "react-router-dom";
// Local module
import icon from "../assets/icon.png";
import mailbox from "../assets/mailbox.png";
import fiction from "../assets/fiction.png";
import scifi from "../assets/scifi.png";
import fantasy from "../assets/fantasy.png";
import tech from "../assets/tech.png";
import home from "../assets/home.png";
import catalog from "../assets/catalog.png";
import loans from "../assets/loans.png";
import profile from "../assets/profile.png";

export default function Dashboard() {
    return (
        <>
            <header className="bg-gradient-to-br from-[#1a1b30] via-[#16304f] to-[#12284a]">
                <div className="ml-[2em] pt-[3em] pb-[10em]">
                    <p className="text-[#A2A5AF] text-2xl">Good morning,</p>
                    <div className="flex items-center">
                        <h1 className="text-white text-4xl">Ada Okafor</h1>
                        <img className="w-[70px]" src={icon} alt="hello" />
                    </div>
                </div>
            </header>

            <main className="bg-[#F5F4F0] pt-[2em] mx-[1em] pb-[10em]">
                <section>
                    <h2 className="text-3xl font-bold mb-[1em]">Your Loans</h2>
                    <div className="flex flex-col items-center border-none bg-white rounded-[24px] py-[5em] w-[95%] mx-auto">
                        <img className="w-[100px]" src={mailbox} />
                        <p className="text-2xl font-bold">
                            No active loans yet
                        </p>
                        <p className="text-xl text-[#808080] w-[60%] text-center">
                            You haven't borrowed any books yet. Browse the
                            catalog and reserve one -- collect it at the library
                            desk
                        </p>
                        <Link className="bg-[#C98A3A] py-[1em] px-[2em] text-white rounded-[16px] font-bold text-xl mt-[2em]">
                            Browse Catalog
                        </Link>
                    </div>
                </section>

                <section className="mt-[3em]">
                    <h3 className="text-3xl font-bold mb-[1em]">
                        Explore genres
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white text-[#6D28D9] rounded-[24px] py-[4em] pl-[2em]">
                            <img
                                src={fiction}
                                alt="fiction"
                                className="w-[100px]"
                            />
                            <p className="text-2xl font-bold mt-[8px]">
                                Fiction
                            </p>
                        </div>
                        <div className="bg-white text-[#1D4ED8] rounded-[24px] py-[4em] pl-[2em]">
                            <img
                                src={scifi}
                                alt="Sci-Fi"
                                className="w-[100px]"
                            />
                            <p className="text-2xl font-bold mt-[8px]">
                                Sci-Fi
                            </p>
                        </div>
                        <div className="bg-white text-[#166534] rounded-[24px] py-[4em] pl-[2em]">
                            <img src={tech} alt="tech" className="w-[100px]" />
                            <p className="text-2xl font-bold mt-[8px]">Tech</p>
                        </div>
                        <div className="bg-white text-[#92400E] rounded-[24px] py-[4em] pl-[2em]">
                            <img
                                src={fantasy}
                                alt="fantasy"
                                className="w-[100px]"
                            />
                            <p className="text-2xl font-bold mt-[8px]">
                                Fantasy
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="bg-white pb-[2em]">
                <div className="flex justify-around">
                    <div className="flex flex-col items-center">
                        <img src={home} alt="home" className="w-[100px]" />
                        <p className="text-xl font-bold">Home</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src={catalog}
                            alt="catalog"
                            className="w-[100px]"
                        />
                        <p className="text-xl font-bold">Catalog</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={loans} alt="loans" className="w-[100px]" />
                        <p className="text-xl font-bold">Loans</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img
                            src={profile}
                            alt="profile"
                            className="w-[100px]"
                        />
                        <p className="text-xl font-bold">Profile</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
