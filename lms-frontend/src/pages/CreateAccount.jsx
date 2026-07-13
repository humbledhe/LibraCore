// Third Party
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
// Local modules
import styles from './CreateAccount.module.css';

function CreateAccount() {
    const [formData, setFormData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
    });
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }
    
    const createAccount = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post("http://127.0.0.1:8000/users", formData);
        }
        catch(error) {
            console.log(error.response)
        }
    }
    
    return (
        <>
            <header className={styles.header}>
                <h1 className={styles.brandName}>Libra<span className={styles.brand}>Core</span></h1>
                <p>Already a member? <Link to="/signin" className={styles.sign}><span>Sign In</span></Link></p>    
            </header>
            
            <main className={styles.mainSection}>
                <form onSubmit={createAccount}>
                    <div className={styles.form}>
                        <label for="firstName"className={styles.label}>First name</label>
                        <input 
                            type="text" 
                            required
                            id="firstName" 
                            name="first_name" 
                            placeholder="prosper" 
                            value={formData.first_name}
                            onChange={handleChange} 
                            className={styles.input} />
                    </div>
                    
                    <div className={styles.form}>
                        <label for="lastName"className={styles.label}>Last name</label>
                        <input 
                            type="text" 
                            required
                            id="lastName" 
                            name="last_name" 
                            placeholder="chiedu" 
                            value={formData.last_name}
                            onChange={handleChange} 
                            className={styles.input} />
                    </div>
                
                    <div className={styles.form}>
                        <label for="email"className={styles.label}>Email address</label>
                        <input 
                            type="email" 
                            required
                            id="email" 
                            name="email" 
                            placeholder="prosper@gmail.com" 
                            value={formData.email}
                            onChange={handleChange} 
                            className={styles.input} />
                    </div>
                    
                    <div className={styles.form}>
                        <label for="password"className={styles.label}>Password</label>
                        <input 
                            type="password" 
                            required
                            id="password" 
                            name="password" 
                            placeholder="At least 8 characters" 
                            value={formData.password}
                            onChange={handleChange} 
                            className={styles.input} />
                    </div>
                    
                    <div className={styles.terms}>
                        <input type="checkbox" id="checkbox" name="checkbox" className={styles.check}/>
                        <label type="checkbox">I agree to LibraCore's <span className={styles.color}>Terms of Service</span> and <span className={styles.color}>Privacy Policy</span>
                        </label>
                    </div>
                    
                    <button type="submit" className={styles.button}>Create account
                    </button>
                    
                </form>
            </main>
            
            <footer className={styles.footer}>
                <p>Are you library staff?</p>
                <Link to="/staff/signin"className={styles.staffSignin}><p>sign in with staff account &rarr;</p></Link>
            </footer>
        </>
    )
}

export default CreateAccount;