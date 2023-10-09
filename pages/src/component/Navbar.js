import { useRouter } from "next/router"
import styles from "../component/style/Navbar.module.css"
import Link from "next/link"
// import Image from "next/image"

const Navbar = () => {
    const { pathname } = useRouter()
    return (
        <>

            <header className={styles.header}>
                <Link href='http://localhost:3000/' className={styles.link}>Penelopa</Link>
                <Link href='http://localhost:3000/psychology' className={styles.link}>Психология</Link>
                <Link href='http://localhost:3000/sex' className={styles.link}>Секс</Link>
                <Link href='http://localhost:3000/relationship' className={styles.link}>Отношения</Link>
                <Link href='http://localhost:3000/astrology' className={styles.link}>Астрология</Link>
                <Link href='http://localhost:3000/beauty404' className={styles.link}>Бьюти</Link>
                <Link href='http://localhost:3000/history404' className={styles.link}>Истории</Link>
            </header>

 <div className={styles.container}>
      <div className={styles.phone}>
        <div className={styles.content}>
          
          <nav className={styles.nav} role="navigation">
            <div className={styles.menuToggle}>
              <input type="checkbox" className={styles.input} />
                <span className={styles.span}></span>
                <span className={styles.span}></span>
                <span className={styles.span}></span>
            <ul className={styles.menu} >
              <li className={styles.li}><Link href='http://localhost:3000/' className={styles.a} >Penelopa</Link></li>
              <li className={styles.li}><Link href='http://localhost:3000/psychology' className={styles.a} >Психология</Link></li>
              <li className={styles.li}><Link href='http://localhost:3000/sex' className={styles.a} >Секс</Link></li>
              <li className={styles.li}><Link href='http://localhost:3000/relationship' className={styles.a} >Отношения</Link></li>
              <li className={styles.li}><Link href='http://localhost:3000/astrology' className={styles.a} >Астрология</Link></li>
              <li className={styles.li}><Link href='http://localhost:3000/beauty404' className={styles.a} >Бьюти</Link></li>
              <li className={styles.li}><Link href='http://localhost:3000/history404' className={styles.a} >Истории</Link></li>
            </ul>
           </div>
          </nav>
        </div>
       </div>
    </div>

        </>
    )
}
export default Navbar