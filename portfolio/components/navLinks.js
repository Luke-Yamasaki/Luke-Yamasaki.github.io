import styles from '../styles/navigation.module.css';
import Link from "next/link";

export const NavLinks = () => {

    const handleNavigation = (e) => {
        e.preventDefault();
        sessionStorage.visited = "true";
    }

    return (
        <div className={styles.navLinksBox}>
            <Link href='/design'>
                <a onClick={handleNavigation} className={styles.navLink}>
                    Design
                </a>
            </Link>
            <Link href='/development'>
                <a onClick={handleNavigation} className={styles.navLink}>
                    Development
                </a>
            </Link>
            <Link href='/about'>
                <a onClick={handleNavigation} className={styles.navLink}>
                    About
                </a>
            </Link>
            <Link href='contact'>
                <a onClick={handleNavigation} className={styles.navLink}>
                    Contact
                </a>
            </Link>
        </div>
    )
}
