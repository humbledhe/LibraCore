// Third Party
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

//import axios from "axios";
// Local modules
import api from "../api/axios";

import Logo from "../components/Logo.jsx";

function CreateAccount() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    });
    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const [isChecked, setIsChecked] = useState(false);
    const [loading, setLoading] = useState(false);

    const [error, setError] = useState(null);

    const createAccount = async e => {
        e.preventDefault();

        setLoading(true);

        try {
            const response = await api.post("/users", formData);

            // render when status code is within range
            navigate("/signup/success/", {
                state: { signUpSuccess: true }
            });
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <header className="flex justify-between items-center text-[30px] mx-[30px] my-[50px]">
                <Logo />
                <p>
                    Already a member?{" "}
                    <Link to="/login" className="text-[#E4D9BE] font-bold">
                        <span>Sign In</span>
                    </Link>
                </p>
            </header>

            <main className="mx-[30px]">
                <form onSubmit={createAccount}>
                    <div className="flex flex-col gap-[16px] mb-[48px]">
                        <label
                            for="firstName"
                            className="text-[30px] font-bold"
                        >
                            First name
                        </label>
                        <input
                            type="text"
                            required
                            id="firstName"
                            name="first_name"
                            placeholder="prosper"
                            value={formData.first_name}
                            onChange={handleChange}
                            className="text-[30px] rounded-[20px] py-[40px] pl-[35px]"
                        />
                    </div>

                    <div className="flex flex-col gap-[16px] mb-[48px]">
                        <label for="lastName" className="text-[30px] font-bold">
                            Last name
                        </label>
                        <input
                            type="text"
                            required
                            id="lastName"
                            name="last_name"
                            placeholder="chiedu"
                            value={formData.last_name}
                            onChange={handleChange}
                            className="text-[30px] rounded-[20px] py-[40px] pl-[35px]"
                        />
                    </div>

                    <div className="flex flex-col gap-[16px] mb-[48px]">
                        <label for="email" className="text-[30px] font-bold">
                            Email address
                        </label>
                        <input
                            type="email"
                            required
                            id="email"
                            name="email"
                            placeholder="prosper@gmail.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="text-[30px] rounded-[20px] py-[40px] pl-[35px]"
                        />
                    </div>

                    <div className="flex flex-col gap-[16px] mb-[48px]">
                        <label for="password" className="text-[30px] font-bold">
                            Password
                        </label>
                        <input
                            type="password"
                            required
                            id="password"
                            name="password"
                            placeholder="At least 8 characters"
                            value={formData.password}
                            onChange={handleChange}
                            className="text-[30px] rounded-[20px] py-[40px] pl-[35px]"
                        />
                    </div>

                    <div className="flex text-[30px] gap-[30px] text-[hsl(0,0%,50.2%)]">
                        <input
                            type="checkbox"
                            id="checkbox"
                            name="checkbox"
                            value={isChecked}
                            onClick={() => setIsChecked(!isChecked)}
                            className="scale-200"
                        />
                        <label type="checkbox">
                            I agree to LibraCore's{" "}
                            <span className="text-amber-500">
                                Terms of Service
                            </span>{" "}
                            and{" "}
                            <span className="text-amber-500">
                                Privacy Policy
                            </span>
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={!isChecked}
                        className={`font-bold rounded-[30px] font-bold bg-[#EAD9B0] text-[#FAFBF6] w-full border-none text-[30px] mt-[50px] py-[2em] ${isChecked ? "bg-[black] active:bg-[#000000bc] transition-colors duration-300 ease-in-out border-none" : ""}`}
                    >
                        {!loading ? "Create account" : "loading..."}
                    </button>
                </form>
            </main>

            <footer className="mx-[30px] font-bold text-[25px] bg-[#F2EFD9] py-[1em] pl-[3em] mt-[3em] rounded-[30px]">
                <p>Are you library staff?</p>
                <Link
                    to="/staff/signin"
                    className="text-amber-500 decoration-none"
                >
                    <p>sign in with staff account &rarr;</p>
                </Link>
            </footer>
        </>
    );
}

export default CreateAccount;
