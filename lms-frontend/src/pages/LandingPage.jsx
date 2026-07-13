// Third Party
import { Link } from 'react-router-dom';
import { useEffect } from "react";
// Local modules
import Header from '../components/Header/Header.jsx';
import styles from './LandingPage.module.css';
import bookicon from "../assets/bookicon.png";
import person from "../assets/person.jpeg";
import search from "../assets/search.jpeg";
import book from "../assets/book.jpeg";

function LandingPage() {
    
    return (
        <>
            <Header />
            
            <header className={styles.header}>
                <p className={styles.alert}>OPEN TO ALL - MEMBERSHIP IS FREE</p>
                <h1 className={styles.welcome}>Welcome to Libra<span className={styles.color}>Core</span></h1>
                <p className={styles.description}>Browse thousands of books, reserve a copy, and track your loans -- all online. No late-night guesswork.</p>
                <form className={styles.form}>
                    <input 
                        type="search"
                        placeholder="Search by title, author or genre..." 
                        className={styles.input}
                    />
                    <button type="submit" className={styles.btn}>Search</button>
                </form>

                <ul className={styles.choices}>
                    <li className={styles.choice}>Fiction</li>
                    <li className={styles.choice}>Sci-Fi</li>
                    <li className={styles.choice}>Tech</li>
                    <li className={styles.choice}>Fantasy</li>
                </ul>
            </header>

            <main className={styles.main}>
                <section>
                    <div className={styles.section}>
                        <p className={styles.shelvesCatalog}>ON THE SHELVES</p>
                        <p className={styles.shelvesCatalog}>Browse full catalog &rarr;</p>
                    </div>
                    <h2 className={styles.featured}>Featured Books</h2>
                    <div className={styles.bookList}>
                        <img 
                            className={styles.bookCover} 
                            src={bookicon}
                        />
                        <div>
                            <p className={styles.bookName}>The Great Gatshy</p>
                            <p className={styles.author}>F. Scott Fitzgerald</p>
                        </div>
                    </div>
                    
                    <div className={styles.bookList}>
                        <img 
                                className={styles.bookCover} 
                                src={bookicon}
                        />
                        <div>
                            <p className={styles.bookName}>The Great Gatshy</p>
                            <p className={styles.author}>F. Scott Fitzgerald</p>
                        </div>
                    </div>

                    <div className={styles.bookList}>
                        <img 
                                className={styles.bookCover} 
                                src={bookicon}
                        />
                        <div>
                            <p className={styles.bookName}>The Great Gatshy</p>
                            <p className={styles.author}>F. Scott Fitzgerald</p>
                        </div>
                    </div>

                    <div className={styles.bookList}>
                        <img 
                                className={styles.bookCover} 
                                src={bookicon}
                        />
                        <div>
                            <p className={styles.bookName}>The Great Gatshy</p>
                            <p className={styles.author}>F. Scott Fitzgerald</p>
                        </div>
                    </div>
                </section>

                <section className={styles.joinUs}>
                    <p className={styles.ask}>Want to reserve or borrow?</p>
                    <p className={styles.createAccount}>Sign in or create a free account to get started</p>
                    <Link to="signin" className={styles.signIn}>Sign In</Link>
                    <Link to="signup" className={styles.signUp}>Join free</Link>
                </section>

                <section className={styles.sectionEnding}>
                    <p className={styles.gettingStarted}>GETTING STARTED</p>
                    <p className={styles.borrowBook}>Borrow a book in three steps</p>
                    
                    <div className={styles.div1}>
                        <img className={styles.imgs} src={person} alt="person icon" width="150"/>
                        <p className={styles.accountCreate}>Create an account</p>
                        <p className={styles.accountSignup}>Sign up under a minute -- it's free, always</p>
                   </div>
                   
                   <div className={styles.div1}>
                        <img className={styles.imgs} src={search} alt="person icon" width="150"/>
                        <p className={styles.accountCreate}>Find your book</p>
                        <p className={styles.accountSignup}>Search the catalog and check real-time availability</p>
                   </div>
                   
                   <div className={styles.div1}>
                        <img className={styles.imgs} src={book} alt="person icon" width="150"/>
                        <p className={styles.accountCreate}>Reserve & pick up</p>
                        <p className={styles.accountSignup}>Reserve online, then collect from the library desk</p>
                   </div>
                    
                </section>
            </main>
            
            <footer className={styles.footerStyles}>
                <h3 className={styles.footerHeader}>Libra<span className={styles.footerPartHeader}>Core</span></h3>
                <nav>
                    <ul className={styles.footerNav}>
                        <li><Link to="catalog" className={styles.footerLink}>Catalog</Link></li>
                        <li><Link to="about" className={styles.footerLink}>About</Link></li>
                        <li><Link to="privacy" className={styles.footerLink}>Privacy</Link></li>
                        <li><Link to="contact" className={styles.footerLink}>Contact</Link></li>
                    </ul>
                </nav>
                <p>&copy; 2026 LibraCore Libray System, All rights reserved</p>
            </footer>
        </>
    )
}

export default LandingPage;