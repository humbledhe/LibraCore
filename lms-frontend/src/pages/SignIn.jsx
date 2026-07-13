import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
// Local modules
import styles from './CreateAccount.module.css';

function SignIn() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    
    const handleChange = (e) => {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value,
        })
    }
    
    const signIn = async (e) => {
        e.preventDefault();
        
        try {
            const { data } = await axios.post("http://127.0.0.1:8000/signin/users", formData);
        }
        catch(error) {
            console.log(error.response);
        }
    }
    
    return (
        <>
            <header className={styles.header}>
                <h1 className={styles.brandName}>Libra<span className={styles.brand}>Core</span></h1>
                <p>Not a member? <Link to="/signup" className={styles.sign}><span>Sign Up</span></Link></p>    
            </header>
            
            <main className={styles.mainSection}>
                <form onSubmit={signIn}>
                    <div className={styles.form}>
                        <label for="email"className={styles.label}>Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className={styles.input} />
                    </div>
                    
                    <div className={styles.form}>
                        <label for="password"className={styles.label}>Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            required
                            value={formData.password}
                            onChange={handleChange}
                            className={styles.input} />
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

export default SignIn;