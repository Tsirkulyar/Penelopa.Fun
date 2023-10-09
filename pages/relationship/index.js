import Layout from '../src/component/Layout'
import styles from '../src/component/style/firstPs.module.css'
// import Get from '../src/component/GetComp'
import Link from "next/link"
import styles2 from "../src/component/style/li.module.css"
import Image from "next/image"

export const getStaticProps = async () =>{
    const response = await fetch ('http://localhost:4200/relationship');
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
    return( <> <Layout title='relationship'>
                <div className={styles.h}>
        <h1 className={styles.H1}>Отношения</h1>
        <div className={styles.divZ}>
        <h5>"Никогда не думала, что любовь может быть такой большой частью твоей жизни, пока не встретила тебя."<br/> - Лади Диана, британская принцесса
        </h5>
        </div>
</div>
<ul>
            {texts && texts.map(({id, title, image, annotation, time})=>(
                <>
                <div className={styles2.line}></div>
                <div className={styles2.BlockLi}>
                <li key={id} className={styles2.li}>
                    <Link href={`/relationship/${id}`} className={styles2.link}>
                        <div className={styles2.block}>
                        <Image className={styles2.img} src={image} alt="фото" width={268} height={200}/>
                        <div className={styles2.textLi}>
                        <h1 className={styles2.li}>{title}</h1>
                        <h4>{annotation}</h4>
                        <p className={styles2.time}>Время прочтения: {time}</p>
                        </div>
                        </div>
                    </Link>
                </li>
                </div>
                </>
            ))}
        </ul>
    </Layout>
    </>)
}
export default PsycholPage