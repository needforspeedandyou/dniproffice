import bg from './../assets/bg.png'
import Img1 from './../assets/1.svg?react'
import Img2 from './../assets/2.svg?react'
import Img3 from './../assets/3.svg?react'

export default function Welcome() {
    return (
        <div className="overflow-hidden text-center bg-bottom h-[890px] bg-repeat-x" style={{ backgroundImage: `url(${bg})` }}>
            <h1 className="text-[#00000013] text-[96px] font-black relative top-[72px]">DniprOffice</h1>
            <h2 className="text-[32px] w-[600px] m-auto font-[100]">Call-центр в Дніпрі: Професійна підтримка вашого бізнесу 24/7</h2>
            <p className="text-[16px] w-[600px] m-auto mt-[10px]">Забезпечуємо бездоганне обслуговування клієнтів, телемаркетинг та підтримку продажу. Збільшуємо ваш прибуток, поки ви займаєтеся стратегією.</p>

            <div className="mt-[160px] m-auto w-[1340px] text-white flex justify-between">
                <div className="relative top-[80px] h-[420px] column"><div><h2>Говоримо мовою клієнтів</h2><p>Досвідчені оператори із бездоганними комунікативними навичками.</p></div><Img1 className='relative top-[90px] right-[70px]'></Img1></div>
                <div className="column h-[500px]"><div><h2>Ефективність та результат</h2><p>Впроваджуємо KPI та підвищуємо конверсію кожного дзвінка.</p></div><Img2 className='relative top-[120px] right-[120px]'></Img2></div>
                <div className="relative top-[120px] h-[380px] column"><div><h2>Гнучкість та масштабованість</h2><p>Рішення під завдання будь-якого бізнесу - від стартапу до великої компанії.</p></div><Img3 className='relative top-[30px] right-[40px]'></Img3></div>
            </div>
        </div>
    )
}