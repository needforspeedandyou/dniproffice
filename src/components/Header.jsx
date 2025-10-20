import Facebook from './../assets/Facebook.svg?react'
import Instagram from './../assets/Instagram.svg?react'

export default function Header() {
    return (
        <header className="bg-blackbg text-white h-[60px]">
            <nav className="flex justify-between h-[60px] w-[1340px] m-auto items-center">
                <a className="font-black text-2xl" href="#">DniprOffice</a>
                <div className='flex gap-[100px]'>
                    <div className="flex justify-between gap-[36px] no-underline">
                        <a href="#">Home</a>
                        <a href="#">About us</a>
                        <a href="#">Services</a>
                        <a href="#">Contacts</a>
                    </div>
                    <div className='flex gap-[20px] '>
                        <a href="#"><Instagram></Instagram></a>
                        <a href="#"><Facebook></Facebook></a>
                    </div>
                </div>
            </nav>
        </header>
    )
}