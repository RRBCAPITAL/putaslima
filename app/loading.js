import style from './loading.module.css'

export default function Loading() {

    return <section className='bg-back-dark dark:bg-white h-screen w-screen flex justify-center items-center'>
        <div className={style.spinner}></div>
    </section>

    // return <section className='bg-back-dark dark:bg-white h-screen w-screen flex justify-center items-center'>
    //     <div className={style.loader}></div>
    // </section>
    
}