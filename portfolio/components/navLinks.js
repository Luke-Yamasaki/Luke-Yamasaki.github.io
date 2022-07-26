import styles from '../styles/mainNavigation.module.css';
import Link from "next/link";

export const NavLinks = () => {

    const handleNavigation = (e) => {
        e.preventDefault();
        sessionStorage.visited = "true";
    }

    return (
        <div className={styles.navItemsBox}>
            <Link href='/design'>
                <a onClick={handleNavigation} className={styles.navItem}>
                    Design
                </a>
            </Link>
            <Link href='/development'>
                <a onClick={handleNavigation} className={styles.navItem}>
                    Development
                </a>
            </Link>
            <Link href='/about'>
                <a onClick={handleNavigation} className={styles.navItem}>
                    About
                </a>
            </Link>
            <Link href='contact'>
                <a onClick={handleNavigation} className={styles.navItem}>
                    Contact
                </a>
            </Link>
        </div>
    )
}
