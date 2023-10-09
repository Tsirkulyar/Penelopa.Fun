import Layout from "../src/component/Layout"
import styles from '../src/component/style/firstPs.module.css'
import Link from "next/link"
import styles2 from "../src/component/style/li.module.css"
import Image from "next/image"

export const getStaticProps = async () =>{
    const response = await fetch ('http://localhost:4200/psychology');
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
    <Layout title='psychology'>
        <div className={styles.h}>
        <h1 className={styles.H1}>Психология</h1>
        <div className={styles.divZ}>
        <h5>"Самое важное, что можно сделать для своего здоровья, - это развивать свои ментальные способности и умения" <br/>
        &copy; Мэй Уэст, американская актриса и певица
        </h5>
        </div>
</div>
<ul>
            {texts && texts.map(({id, title, image, time})=>(
                <>
                <div className={styles2.line}></div>
                <div className={styles2.BlockLi}>
                <li key={id} className={styles2.li}>
                    <Link href={`/psychology/${id}`} className={styles2.link}>
                        <div className={styles2.block}>
                        <Image className={styles2.img} src={image} alt="фото" width={315} height={210}/>
                        <div className={styles2.textLi}>
                        <h1 className={styles2.li}>{title}</h1>
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
export default PsycholPage