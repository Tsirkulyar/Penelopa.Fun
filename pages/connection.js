import Layout from "./src/component/Layout";
import styles from '../pages/src/component/style/connection.module.css' 
const Connection = () =>{

    // className={styles.footer}
    return <>
        <Layout title='connection'>
        <div className={styles.container}>
            <div className={styles.zag}>
                <h1 className={styles.h}>Страница обратной связи</h1>
                <h3>Рады с тобой пообщаться!</h3>
            </div>
            <div className={styles.p}>
            <p className={styles.text}>Мы ценим каждое мнение, и твоя обратная связь поможет нам улучшить наш сервис. Будь то положительные комментарии, конструктивная критика или просто идеи, которые ты хотела бы предложить - все это очень важно для нас!</p>
            <p className={styles.text}>Так что не стесняйся и напиши нам! Мы всегда открыты для новых идей и готовы выслушать тебя.</p>
            <h3 className={styles.email}>juniper-state@internet.ru</h3>
            
        </div>
        </div> 
       </Layout>

    </>
}
export default Connection