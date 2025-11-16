import bg from "./../assets/bg.png";
import Img1 from "./../assets/1.svg?react";
import Img2 from "./../assets/2.svg?react";
import Img3 from "./../assets/3.svg?react";

export default function Welcome() {
  return (
    <div className="overflow-hidden text-center bg-bottom min-h-[890px] bg-repeat-x" style={{ backgroundImage: `url(${bg})` }}>
      <h1 className="text-[#00000013] hidden mt-0 md:block text-[96px] font-black relative top-[72px]">DniprOffice</h1>
      <h2 className="text-[32px] max-w-[600px] m-auto font-[100] mt-30 md:mt-0">Call-центр в Дніпрі: Професійна підтримка вашого бізнесу 24/7</h2>
      <p className="text-[16px] max-w-[600px] m-auto mt-[10px]">Забезпечуємо бездоганне обслуговування клієнтів, телемаркетинг та підтримку продажу. Збільшуємо ваш прибуток, поки ви займаєтеся стратегією.</p>

      <div className="bg-blackbg items-center flex-col xl:flex-row xl:bg-transparent mt-[160px] max-w-screen-xl mx-auto py-15 px-4 text-white flex justify-between">
        <div className="flex flex-col items-center xl:block bg-blackbg text-[#ffffff75] px-5 py-2.5 max-w-screen-xl xl:w-[359px] xl:relative xl:top-[100px] xl:h-[420px] ">
          <div>
            <h2 className="text-2xl">Говоримо мовою клієнтів</h2>
            <p>Досвідчені оператори із бездоганними комунікативними навичками.</p>
          </div>
          <Img1 className="xl:relative xl:top-[90px] xl:right-[70px]"></Img1>
        </div>
        <div className="flex flex-col items-center xl:block bg-blackbg text-[#ffffff75] px-5 py-2.5 max-w-screen-xl xl:relative xl:w-[359px] xl:top-20 xl:h-[500px]">
          <div>
            <h2 className="text-2xl">Ефективність та результат</h2>
            <p>Впроваджуємо KPI та підвищуємо конверсію кожного дзвінка.</p>
          </div>
          <Img2 className="xl:relative xl:top-[120px] xl:right-[120px]"></Img2>
        </div>
        <div className="flex flex-col items-center xl:block bg-blackbg text-[#ffffff75] px-5 py-2.5 max-w-screen-xl xl:w-[359px] xl:relative xl:top-[120px] xl:h-[380px] ">
          <div>
            <h2 className="text-2xl">Гнучкість та масштабованість</h2>
            <p>Рішення під завдання будь-якого бізнесу - від стартапу до великої компанії.</p>
          </div>
          <Img3 className="xl:relative xl:top-[30px] xl:right-[40px]"></Img3>
        </div>
      </div>
    </div>
  );
}
