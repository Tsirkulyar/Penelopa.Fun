import Link from 'next/link'
import styles from '../component/style/ReadNow.module.css'


const ReadNow = () =>{
    return(
        <>
        <div className={styles.cnt}>
            <h1 className={styles.h11}>Наши Партнеры</h1>
        <div className={styles.container}>
  <div className={styles.card}>
    
    <Link href="#" className={styles.title}>Почему все думают, что цыгане - это румыны</Link>
  </div>
  <div className={styles.card}>
    <h3 className={styles.title}>Card 2</h3>
  </div>
  <div className={styles.card}>
    <h3 className={styles.title}>Card 3</h3>
  </div>
  <div className={styles.card}>
    <h3 className={styles.title}>Card 4</h3>
  </div>
        </div>
        </div>
        </>
    )
}
export default ReadNow