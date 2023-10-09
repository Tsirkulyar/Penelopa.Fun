import styles from "../component/style/TemInfo.module.css"
import Image from "next/image"

const TemInfo = ({text})=>{
    const {title, date, image, time, paper1, paper2, paper3} = text || {}
    
    if (!text){
        return (
            <>
                <h1>Ничего нет...</h1>
            </>
        )
    }
    return(
        <>
        <div className={styles.container}>
         <div className={styles.g}></div> 
        <div className={styles.gridtext}>    
            <Image className={styles.img} src={image} alt="фото" width={470} height={350}/>
            <div className={styles.div_an}>
            <h1 className={styles.general}>{title}</h1>
                <div className={styles.divchik}></div>
                <div className={styles.h5}>
            <h5 className={styles.h56}>Дата добавления: {date}</h5>
            <h5 className={styles.h56}>Время прочтения: ~{time}</h5>
         </div>
         </div>
         </div>
         <div>
            <p className={styles.paper}>{paper1}</p>
            <p className={styles.paper}>{paper2}</p>
            <p className={styles.paper}>{paper3}</p>
         </div>
         </div>
        </>
    );
}

export default TemInfo