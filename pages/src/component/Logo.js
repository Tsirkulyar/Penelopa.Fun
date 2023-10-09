import styles from "../component/style/Logo.module.css"

const Logo = () => {
    return (
        <>
            <div className={styles.DivLogo}>
                <h1 className={styles.h1}>Penelopa</h1>
                <h5 className={styles.h5}>Открой для себя новые грани женственности.</h5>
            </div>
        </>
    )
}
export default Logo