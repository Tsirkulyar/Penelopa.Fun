import styles from '../component/style/BlockRead.module.css'
import Image from "next/image"
import Link from "next/link";
const BlockRead = () =>{
    return (<>
    <h1 className={styles.h1}>Сейчас читают</h1>
    <div className={styles.gridBlock}>
        <Link href="http://localhost:3000/sex/11" className={styles.link}>
        <div className={styles.cards}>
        <div className={styles.lineCardModule}></div>
            <div className={styles.card}>
                <h3 className={styles.h3Text}>МЖМ. Секс с двумя парнями сразу, к чему надо быть готовой?</h3>
                <div className={styles.img}>
                <Image src='http://localhost:4200/sex/11.jpg' width={315} height={200} className={styles.img} />
                </div>
            </div>
        </div>
        </Link>
        <Link href="http://localhost:3000/relationship/1" className={styles.link}>
        <div className={styles.cards}>
        <div className={styles.lineCardModule}></div>
            <div className={styles.card}>
            <h3 className={styles.h3Text}>Признаки абьюзивных отношений, которые прольют свет на его поступки.</h3>
                <div className={styles.img}>
                <Image src='http://localhost:4200/relat/1.jpeg' width={315} height={200} className={styles.img} />
                </div>
            </div>
        </div>
        </Link>
        <Link href="http://localhost:3000/psychology/10" className={styles.link}>
        <div className={styles.cards}>
        <div className={styles.lineCardModule}></div>
            <div className={styles.card}>
            <h3 className={styles.h3Text}>Хватит быть хорошей девочкой! Как стать стервой?</h3>
                <div className={styles.img}>
                <Image src='http://localhost:4200/psyc/10.jpg' width={315} height={200} className={styles.img}/>
                </div>
            </div>
        </div>
        </Link>
        <Link href="http://localhost:3000/psychology/2" className={styles.link}>
        <div className={styles.cards}>
        <div className={styles.lineCard}></div>
            <div className={styles.card}>
            <h3 className={styles.h3Text}>Как проработать травмы из предыдущих отношений?</h3>
                <div className={styles.img}>
                <Image src='http://localhost:4200/psyc/2.jpg' width={315} height={200} className={styles.img} />
                </div>
            </div>
        </div>
        </Link>
        <Link href="http://localhost:3000/sex/1" className={styles.link}>
        <div className={styles.cards}>
        <div className={styles.lineCard}></div>
            <div className={styles.card}>
            <h3 className={styles.h3Text}>Как девушке правильно подготовиться к первому сексу?</h3>
               <div className={styles.img}>
                <Image src='http://localhost:4200/sex/1.jpg' width={315} height={200} className={styles.img} />
                </div>
            </div>
        </div>
        </Link>
        <Link href="http://localhost:3000/relationship/6" className={styles.link}>
        <div className={styles.cards}>
        <div className={styles.lineCard}></div>
            <div className={styles.card}>
            <h3 className={styles.h3Text}>Что делать, чтобы он завалил тебя цветами?</h3>
                <div className={styles.img}>
                <Image src='http://localhost:4200/relat/6.jpeg' width={315} height={200} className={styles.img} />
                </div>
            </div>
        </div>
        </Link>
        </div>
    </>
    )
}
export default BlockRead