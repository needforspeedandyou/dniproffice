import bg2 from './../assets/bg2.png'
import Img4 from './../assets/4.svg?react'
import Arrows from './../assets/arrows.svg?react'

export default function About() {
    return (
        <div className="h-[930px] bg-blackbg bg-repeat-x bg-top" style={{ backgroundImage: `url(${bg2})` }}>
            <section className='w-[1340px] h-[930px] m-auto flex justify-between items-center'>
                <div className="flex justify-between gap-[50px] text-white flex-col">
                    <h3 className='text-[24px]'>Call-центр «DniprOffice» — ваш надійний партнер в Дніпрі</h3>
                    <div>
                        <Arrows className="absolute mt-[35px]"></Arrows>
                        <p className='ml-[31px] w-[489px]'>Наш кол-центр у Дніпрі надає повний спектр послуг з роботи з клієнтами: вхідні та вихідні дзвінки, технічна підтримка, продажі, анкетування та сервісні консультації.</p>
                        <p className='ml-[181px] mt-[40px] w-[489px]'>Ми допомагаємо бізнесу будь-якого масштабу — від невеликих компаній до великих корпорацій — налагодити ефективну комунікацію з клієнтами.</p>
                    </div>
                    <button className='cursor-pointer border border-solid border-white p-[11px] w-[670px]'>Зв’язатися з нами</button>
                </div>
                <Img4></Img4>
            </section>
        </div>
    )
}