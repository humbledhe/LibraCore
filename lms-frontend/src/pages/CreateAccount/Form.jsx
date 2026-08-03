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
        <main className="mx-[30px]">
            <form onSubmit={createAccount}>
                <div className="flex flex-col gap-[16px] mb-[48px]">
                    <label for="firstName" className="text-[30px] font-bold">
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
                        <span className="text-amber-500">Terms of Service</span>{" "}
                        and{" "}
                        <span className="text-amber-500">Privacy Policy</span>
                    </label>
                </div>

                <button
                    type="submit"
                    disabled={!isChecked}
                    className={`font-bold rounded-[30px] font-bold bg-[#EAD9B0] text-[#FAFBF6] w-full border-none text-[30px] mt-[50px] py-[2em] ${isChecked ? "bg-[black] active:bg-[#000000bc] transition-colors duration-300 ease-in-out border-none" : ""}`}
                >
                    {!isLoading ? "Create account" : "loading..."}
                </button>
            </form>
        </main>
    );
};

export default Form;
