// Third Party
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function CreateAccount() {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    });

    let [isChecked, setIsChecked] = useState(false);

    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    function handleCheck() {
        if (isChecked === false) setIsChecked((isChecked = true));
        else setIsChecked((isChecked = false));
    }

    const createAccount = async e => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "http://127.0.0.1:8000/users",
                formData
            );
            console.log(response);
            console.log(e);
        } catch (error) {
            console.log(error.response);
        }
    };

    if (isChecked) console.log("toggleOn");
    else console.log("toggleOff");

    return (
        <>
            <header className="flex justify-between items-center text-[30px] mx-[30px] my-[50px]">
                <h1 className="text-6xl font-bold">
                    Libra<span className="text-amber-500">Core</span>
                </h1>
                <p>
                    Already a member?{" "}
                    <Link to="/signin" className="text-[#E4D9BE] font-bold">
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
                            onClick={handleCheck}
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
                        className={`font-bold rounded-[30px] font-bold bg-[#EAD9B0] text-[#FAFBF6] w-full border-none text-[30px] mt-[50px] py-[2em] ${isChecked === true ? "bg-[black] active:bg-[#000000bc] transition-colors duration-300 ease-in-out border-none" : ""}`}
                    >
                        Create account
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
