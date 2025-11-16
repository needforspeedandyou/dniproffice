import Facebook from "./../assets/Facebook_black.svg?react";
import Instagram from "./../assets/Instagram_black.svg?react";

export default function Contact() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 pb-20 min-h-[650px]">
      <h2 className="text-[32px] mb-[100px]">Зв’язатися з нами</h2>
      <div className="flex justify-between flex-col sm:items-center gap-20 lg:flex-row">
        <form action="#" className="sm:w-[550px] flex flex-col gap-[35px]">
          <input type="text" placeholder="Адреса електронної пошти" className="" />
          <div className="flex justify-between gap-[35px] flex-col sm:flex-row">
            <input type="text" placeholder="Ім’я" className="sm:w-[250px]" />
            <input type="text" placeholder="Фамілія" className="sm:w-[250px]" />
          </div>
          <input type="text" placeholder="Номер телефона" />
          <button className="cursor-pointer border border-black border-solid p-[12px] md:w-[550px]">Оставити заявку</button>
        </form>
        <div className="flex justify-between items-center lg:items-baseline flex-col">
          <h3 className="text-[26px] mb-8">Контакти</h3>
          <div className="text-[16px] text-center lg:text-left">
            <p>Адреса: м. Дніпро, вул. Невідома</p>
            <p>Телефон: +38 (99) 380-99-99</p>
            <p>Email: test@dniproffice.ua</p>
          </div>
          <div className="mt-[20px] flex gap-[20px]">
            <Instagram />
            <Facebook />
          </div>
        </div>
      </div>
    </div>
  );
}
