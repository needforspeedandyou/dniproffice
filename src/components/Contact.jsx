import Facebook from './../assets/Facebook_black.svg?react'
import Instagram from './../assets/Instagram_black.svg?react'

export default function Contact() {
    return (
        <div className='w-[1340px] h-[650px] m-auto'>
            <h2 className='text-[32px] mb-[100px]'>Зв’язатися з нами</h2>
            <div className='flex justify-between w-[1060px] m-auto'>
                <form action="#" className='w-[550px] flex flex-col gap-[35px]'>
                    <input type="text" placeholder='Адреса електронної пошти' className=''/>
                    <div className='flex justify-between'>
                        <input type="text" placeholder='Ім’я' className='w-[250px]'/>
                        <input type="text" placeholder='Фамілія' className='w-[250px]' />
                    </div>
                    <input type="text" placeholder='Номер телефона' />
                    <button className='cursor-pointer border border-black border-solid p-[12px] w-[550px]'>Оставити заявку</button>
                </form>
                <div className='flex justify-between flex-col'>
                    <h3 className='text-[26px] mb-[50px]'>Контакти</h3>
                    <div className='text-[16px]'>
                        <p>Адреса: м. Дніпро, вул. Невідома</p>
                        <p>Телефон: +38 (99) 380-99-99</p>
                        <p>Email: test@dniproffice.ua</p>
                    </div>
                    <div className='mt-[20px] flex gap-[20px]'><Instagram /><Facebook /></div>
                </div>
            </div>
        </div>
    )
}