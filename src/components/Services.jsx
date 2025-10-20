import bg3 from './../assets/bg3.png'

export default function Services() {
    return (
        <div className="text-white relative h-[950px] bg-blackbg bg-repeat-x bg-bottom" style={{ backgroundImage: `url(${bg3})` }}>
            <h2 className='text-center text-[32px] mb-[100px]'>Наші послуги</h2>
            <div className="flex justify-center flex-wrap gap-[65px] w-[1340px] m-auto">
                <div className="card"><h3>Вхідна лінія</h3><p>Прийом дзвінків, консультації, гарячі лінії, запис на послуги.</p></div>
                <div className="card"><h3>Вихідні дзвінки</h3><p>Продажі, телемаркетинг, опитування, нагадування, повернення клієнтів.</p></div>
                <div className="card"><h3>Технічна підтримка</h3><p>Кваліфікована допомога користувачам 24/7.</p></div>
                <div className="card"><h3>Віртуальний секретар</h3><p>Прийом дзвінків від імені вашої компанії, обробка заявок і повідомлень.</p></div>
                <div className="card"><h3>Підтримка інтернет-магазинів</h3><p>Прийом замовлень, уточнення деталей, супровід покупців.</p></div>
            </div>
            <svg
                className="absolute bottom-0 left-0"
                viewBox="0 0 1440 320"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill="#ffffff"
                    d="M0,160 C480,260 960,100 1440,160 L1440,320 L0,320 Z"
                />
            </svg>
        </div>
    )
}