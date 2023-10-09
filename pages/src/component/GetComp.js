import styles from '../../src/component/style/GetComp.module.css'

const Get = () => {
    return (
        <>
        <form action="" method="get" className={styles.form}>
        <input name="s" placeholder="Введи запрос..." type="search" className={styles.input}/>
  <button className={styles.btn} type="submit">Поиск</button>
</form>
        </>
    )
}
export default Get