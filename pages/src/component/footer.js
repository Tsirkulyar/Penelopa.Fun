import Link from "next/link";
import styles from '../component/style/footer.module.css'
const Footer = () =>{
    return <footer className={styles.footer}>
        <div className={styles.linkBox}>
        <Link href='connection' className={styles.link}>Обратная связь</Link>
        </div>
        <h4 title="Любое использование информации в комерческих целях запрещено" className={styles.right}>&copy; 2023-2024 All rights reserved</h4>
    </footer>
}
export default Footer