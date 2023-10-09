import { useEffect } from "react"
import { useRouter } from "next/router"
import Layout from "./src/component/Layout";
import styles from "./src/component/style/404.module.css"

const Error = ()=>{
    const router = useRouter();

    useEffect(() =>{
        setTimeout(()=>{
            router.push('/')
        },3000);
    }, [router])

    return (<>
    <Layout>
        <h1 className={styles.h1}>Страница находится в стадии разработки...</h1>
        <h2 className={styles.h2}>Подождите совсем чуть</h2>
        {/* <Image src={gif} alt="gif" width={500} height={500}/> */}
    </Layout>
    </>)
}
export default Error