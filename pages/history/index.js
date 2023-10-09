import Layout from "../src/component/Layout"
// import styles from '../src/component/style/firstPs.module.css'
// import styles2 from "../src/component/style/li.module.css"
import styles from "../src/component/style/history.module.css"


export const getStaticProps = async () =>{
    const response = await fetch ('http://localhost:4200/history');
             const data = await response.json();
             if(!data){
                return{
                    notFound: true,
                }
             }
        return{
            props: {texts: data}
        }
    }
const PsycholPage = ({texts}) =>{
    return( <>
    <Layout title='history'>
        <div className={styles.h}>
        <h1 className={styles.H1}>Истории наших подписчиц</h1>
        <div className={styles.divZ}>
        <h5>Здесь мы размещаем личный опыт наших дорогих подписчиц, которые готовы поделиться с этим миром своей интимной историей. Если тебе хочется рассказать о своем опыте, похвастаться успехами в личной жизни и просто высказаться - напиши это нам! Мы будем рады. <br/> Все истоии размещаются абсолютно анонимно
        </h5>
        </div>
</div>
<ul>
            {texts && texts.map(({id, title, paper})=>(
                <div className={styles.history}>
                <div className={styles.line}></div>
                <div className={styles.BlockLi}>
                <li key={id} className={styles.li}>
                        <div className={styles.block}>
                        <div className={styles.textLi}>
                        <h1 className={styles.li}>{title}</h1>
                        <h4 className={styles.textHistory}>{paper}</h4>
                        </div>
                        </div>
                </li>
                </div>
                </div>
            ))}
        </ul>
    </Layout></>
    )
}
export default PsycholPage