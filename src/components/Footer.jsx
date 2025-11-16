import bg4 from "./../assets/bg4.png";
import Facebook from "./../assets/Facebook.svg?react";
import Instagram from "./../assets/Instagram.svg?react";
import Copyright from "./../assets/copyright.svg?react";

export default function Footer() {
  return (
    <footer className="text-white bg-blackbg min-h-[300px] py-10 bg-repeat-x" style={{ backgroundImage: `url(${bg4})` }}>
      <div className="max-w-screen-xl mx-auto px-4 min-h-[300px] flex-col gap-20 sm:flex-row flex justify-between items-center">
        <div className="">
          <h2 className="text-[32px] mb-[20px] font-black">DniprOffice</h2>
          <ul className="mb-[20px] flex flex-col items-center gap-[5px]">
            <li>
              <a href="#">Головна</a>
            </li>
            <li>
              <a href="#">Про нас</a>
            </li>
            <li>
              <a href="#">Послуги</a>
            </li>
            <li>
              <a href="#">Контакти</a>
            </li>
          </ul>
          <div className="flex gap-[20px] justify-center">
            <Instagram></Instagram>
            <Facebook></Facebook>
          </div>
        </div>
        <div className="text-center">
          <p>Адреса: м. Дніпро, вул. Невідома</p>
          <p>Телефон: +38 (99) 380-99-99</p>
          <p>Email: test@dniproffice.ua</p>
        </div>
        <Copyright></Copyright>
      </div>
    </footer>
  );
}
