import bg2 from "./../assets/bg2.png";
import Img4 from "./../assets/4.svg?react";
import Arrows from "./../assets/arrows.svg?react";

export default function About() {
  return (
    <div className="bg-blackbg bg-repeat-x py-50 bg-top" style={{ backgroundImage: `url(${bg2})` }}>
      <section className="max-w-screen-xl mx-auto px-4 flex flex-col xl:flex-row justify-between items-center">
        <div className="flex justify-between items-center xl:items-baseline gap-[50px] text-white flex-col">
          <h3 className="text-[24px] text-center">Call-центр «DniprOffice» — ваш надійний партнер в Дніпрі</h3>
          <div className="sm:w-130 text-center">
            <Arrows className="hidden xl:block md:absolute md:mt-[35px]"></Arrows>
            <p className="xl:ml-[31px] xl:w-[489px]">Наш кол-центр у Дніпрі надає повний спектр послуг з роботи з клієнтами: вхідні та вихідні дзвінки, технічна підтримка, продажі, анкетування та сервісні консультації.</p>
            <p className="xl:ml-[181px] mt-10 xl:w-[489px]">Ми допомагаємо бізнесу будь-якого масштабу — від невеликих компаній до великих корпорацій — налагодити ефективну комунікацію з клієнтами.</p>
          </div>
          <button className="cursor-pointer border border-solid border-white p-[11px] w-50 sm:w-130 xl:w-[670px]">Зв’язатися з нами</button>
        </div>
        <Img4 className="hidden xl:block"></Img4>
      </section>
    </div>
  );
}
