// Third Party
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

//import axios from "axios";
// Local modules
import api from "../api/axios";

import Logo from "../components/Logo.jsx";

function SignIn() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const [_, setUserFirstName] = useState(null);

    const signIn = async e => {
        e.preventDefault();

        try {
            const response = await api.post("/auth/login", formData, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            });

            // Automatifally get the users first name when logged in
            try {
                const user = await api.get(`/users/${formData.username}`);

                setUserFirstName(user.data.first_name);
            } catch (error) {
                console.error(error.response);
            }

            const token = response.data.access_token;

            localStorage.setItem("token", token);

            // render when status code is within range
            navigate("/dashboard");

            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        } catch (error) {
            console.error(error.response);
        }
    };

    return (
        <>
            <header className="flex justify-between items-center text-[30px] mx-[30px] my-[50px]">
                <Logo />
                <p>
                    Not a member?{" "}
                    <Link to="/signup" className="text-[#E4D9BE] font-bold">
                        <span>Sign Up</span>
                    </Link>
                </p>
            </header>

            <main className="mx-[30px]">
                <form onSubmit={signIn}>
                    <div className="flex flex-col gap-[16px] mb-[48px]">
                        <label for="email" className="text-[30px] font-bold">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="username"
                            required
                            value={formData.username}
                            onChange={handleChange}
                            className="text-[30px] rounded-[20px] py-[40px] pl-[35px] border border-[#808080]"
                        />
                    </div>

                    <div className="flex flex-col gap-[16px] mb-[48px]">
                        <label for="password" className="text-[30px] font-bold">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            value={formData.password}
                            onChange={handleChange}
                            className="text-[30px] rounded-[20px] py-[40px] pl-[35px] border border-[#808080]"
                        />
                    </div>

                    <button
                        type="submit"
                        className="font-bold rounded-[30px] bg-black text-[#FAFBF6] w-full border-none text-[30px] mt-[50px] py-[2em] active:bg-[#000000bc] transition-colors duration-300 ease-in-out"
                    >
                        Sign In
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

export default SignIn;
