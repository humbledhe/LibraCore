import { Link } from 'react-router-dom';

import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <h1>Libra<span className={styles.color}>Core</span></h1>
            <nav>
                <ul className={styles.list}>
                    <li><Link to="/catalog" className={styles.link}>Catalog</Link></li>
                    <li><Link to="/about" className={styles.link}>About</Link></li>
                    <li><Link to="/about" className={styles.link}>Contact</Link></li>
                </ul>
            </nav>
            <Link to="/signin" className={styles.btn}>Sign In</Link>
        </header>
    );
}

export default Header;