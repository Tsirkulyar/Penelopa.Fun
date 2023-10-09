import Layout from "../src/component/Layout"
import styles from '../src/component/style/firstPs.module.css'
import Link from "next/link"
import styles2 from "../src/component/style/li.module.css"
import Image from "next/image"
export const getStaticProps = async () =>{
const response = await fetch ('http://localhost:4200/sex');
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
const SexPage = ({texts}) =>{
    return( <>
    <Layout title='sex'>
        <div className={styles.h}>
        <h1 className={styles.H1}>Секс</h1>
        <div className={styles.divZ}>
        <h5>"Секс – это сильнейшее оружие в арсенале женщины. Но, как и любое оружие, оно должно быть использовано с умом и тактикой" – Шэрон Стоун.
        </h5>
        </div>
</div>
{/* <Get/> */}
        <ul>
            {texts && texts.map(({id, title, image, annotation, time})=>(
                <>
                <div className={styles2.line}></div>
                <div className={styles2.BlockLi}>
                <li key={id} className={styles2.li}>
                    <Link href={`/sex/${id}`} className={styles2.link}>
                        <div className={styles2.block}>
                        <Image className={styles2.img} src={image} alt="фото" width={280} height={200}/>
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
    </Layout></>
    )
}
export default SexPage