import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";


function Navbar(){
    return (
        <div className={styles.navbar}>
            <h4>BlockFile</h4>

            <div className={styles.navLeft}>
                <Link to="/login" className={styles.navLinks}>Login</Link>
                <Link to="/" className={styles.navLinks}>Home</Link>
            </div>
        </div>
    )
}

export default Navbar;