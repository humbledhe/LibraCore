// Third Party
// Third Party
import { NavLink, Outlet } from "react-router-dom";

const librarySections = [
    { id: 1, name: "Reading" },
    { id: 2, name: "Saved" },
    { id: 3, name: "Finished" }
];

const Header = () => {
    return (
        <div className="mx-[2em] pt-[2em] fixed top-0 left-0 w-full z-50">
            <h1 className="text-4xl font-bold">My library</h1>
            <p className="text-2xl text-[#808080] mt-[0.5em] font-bold">
                Your reading list, progress, and history
            </p>

            <nav className="flex gap-[4em] text-3xl font-bold ml-[2em] mt-[2em]">
                {librarySections.map(section => (
                    <NavLink
                        to={`/dashboard/my-library/${section.name}`}
                        key={section.id}
                        className={({ isActive }) =>
                            isActive
                                ? "transition text-[#6D28D9] inline-block border-b-4 border-b-[#6D28D9] pb-2 px-6"
                                : ""
                        }
                    >
                        {section.name}
                    </NavLink>
                ))}
            </nav>
            <Outlet />
        </div>
    );
};

export default Header;
