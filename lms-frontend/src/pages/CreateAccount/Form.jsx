// Third Party
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// Local modules
import api from "../../api/axios";

const Form = () => {
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
    const [isLoading, setIsLoading] = useState(false);

    const [error, setError] = useState(null);

    const createAccount = async e => {
        e.preventDefault();

        setIsLoading(true);

        try {
            const response = await api.post("/users", formData);

            // render when status code is within range
            navigate("/signup/success/", {
                state: { signUpSuccess: true }
            });
        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="mx-4">
            <form onSubmit={createAccount}>
                <div className="flex flex-col gap-4 mb-7">
                    <label for="firstName" className="text-sm font-bold">
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
                        className="text-sm py-3 pl-8 border border-grey-500 rounded-xl"
                    />
                </div>

                <div className="flex flex-col gap-4 mb-7">
                    <label for="lastName" className="text-sm font-bold">
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
                        className="text-sm py-3 pl-8 border border-grey-500 rounded-xl"
                    />
                </div>

                <div className="flex flex-col gap-4 mb-7">
                    <label for="email" className="text-sm font-bold">
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
                        className="text-sm py-3 pl-8 border border-grey-500 rounded-xl"
                    />
                </div>

                <div className="flex flex-col gap-4 mb-7">
                    <label for="password" className="text-sm font-bold">
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
                        className="text-sm py-3 pl-8 border border-grey-500 rounded-xl"
                    />
                </div>

                <div className="flex text-sm gap-3 items-center text-[hsl(0,0%,50.2%)]">
                    <input
                        type="checkbox"
                        id="checkbox"
                        name="checkbox"
                        value={isChecked}
                        onClick={() => setIsChecked(!isChecked)}
                        className="scale-100"
                    />
                    <label type="checkbox">
                        I agree to LibraCore's{" "}
                        <span className="text-amber-500">Terms of Service</span>{" "}
                        and{" "}
                        <span className="text-amber-500">Privacy Policy</span>
                    </label>
                </div>

                <button
                    type="submit"
                    disabled={!isChecked}
                    className={`font-bold rounded-xl font-bold bg-[#EAD9B0] text-[#FAFBF6] w-full border-none text-sm mt-7 py-4 ${isChecked ? "bg-[black] active:bg-[#000000bc] transition-colors duration-300 ease-in-out border-none" : ""}`}
                >
                    {!isLoading ? "Create account" : "loading..."}
                </button>
            </form>
        </main>
    );
};

export default Form;
