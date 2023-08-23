import style from './Landing.module.css'

const Landing = () => {
    return (
        <main className={style.main}>
            <button className={style.btnInsert}><span>Insert coin</span></button>
        </main>
    )
}

export default Landing