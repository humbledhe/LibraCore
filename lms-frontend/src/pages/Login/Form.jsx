// Third Party
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

//import axios from "axios";
import api from "../../api/axios";

const Form = () => {
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

    const [loading, setLoading] = useState(false);

    const [userFirstName, setUserFirstName] = useState(null);
    const [error, setError] = useState(null);

    const signIn = async e => {
        e.preventDefault();

        setLoading(true);

        try {
            const response = await api.post("/auth/login", formData, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            });

            // Automatifally get the users first name when logged in
            const user = await api.get(`/users/${formData.username}`);
            setUserFirstName(user.data.first_name);

            const token = response.data.access_token;

            localStorage.setItem("token", token);

            // render when status code is within range
            navigate("/dashboard");

            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="mx-4">
            <form onSubmit={signIn}>
                <div className="flex flex-col gap-4 mb-7">
                    <label for="email" className="text-sm font-bold">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="username"
                        required
                        value={formData.username}
                        onChange={handleChange}
                        className="text-sm py-3 pl-8 border border-grey-500 rounded-xl"
                    />
                </div>

                <div className="flex flex-col gap-4 mb-7">
                    <label for="password" className="text-sm font-bold">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className="text-sm py-3 pl-8 border border-grey-500 rounded-xl"
                    />
                </div>

                <button
                    type="submit"
                    className="font-bold rounded-xl bg-black text-[#FAFBF6] w-full border-none text-sm mt-4 py-4 active:bg-[#000000bc] transition-colors duration-300 ease-in-out"
                >
                    {!loading ? "Sign In" : "loading..."}
                </button>
            </form>
        </main>
    );
};

export default Form;
