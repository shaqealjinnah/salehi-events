import React from "react";
import { AiFillInstagram, AiFillTikTok, AiFillMail } from "react-icons/ai";
import footerLogo from "../assets/final logo updated svg.svg";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-[#bfbebb] py-16 text-white">
      <div className="container mx-auto flex flex-col justify-between space-y-6 px-6 md:flex-row md:space-y-0 lg:max-w-[860px] xl:max-w-[1024px]">
        <div className="mb-16">
          <img className="w-44" src={footerLogo} alt="footer-logo" />
        </div>
        <div className="flex-col space-y-4">
          <div className="text-lg font-bold text-[#353333] xl:text-[20px]">Quick Links</div>
          <ul className="space-y-1 text-[#353333] xl:text-[18px]">
            <li className="duration-300 hover:text-black">
              <a href="/#">Home</a>
            </li>
            <li className="duration-300 hover:text-black">
              <a href="#about">About</a>
            </li>
            <li className="duration-300 hover:text-black">
              <a href="#services">Services</a>
            </li>
            <li className="duration-300 hover:text-black">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex-col space-y-4">
          <div className="text-lg font-bold text-[#353333] xl:text-[20px]">Services</div>
          <ul className="space-y-1 text-[#353333] xl:text-[18px]">
            <li className="duration-300 hover:text-black">
              <a href="/#services">Engagements</a>
            </li>
            <li className="duration-300 hover:text-black">
              <a href="/#services">Birthdays</a>
            </li>
            <li className="duration-300 hover:text-black">
              <a href="/#services">Bridal Party</a>
            </li>
            <li className="duration-300 hover:text-black">
              <a href="/#services">Baby Shower</a>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <div className="text-lg font-bold text-[#353333] xl:text-[20px]">Our Socials</div>
          <div className="flex items-center justify-start space-x-3">
            <a href="https://www.instagram.com/salehievents/" target="_blank">
              <AiFillInstagram className="h-9 w-9 text-gray-500 duration-300 hover:text-black" />
            </a>
            <a href="https://www.tiktok.com/@salehievents" target="_blank">
              <AiFillTikTok className="h-9 w-9 text-gray-500 hover:text-black" />
            </a>
            <a href="https://www.tiktok.com/@salehievents" target="_blank">
              <AiFillMail className="h-9 w-9 text-gray-500 hover:text-black" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-16 flex justify-center text-black lg:mt-24">
        <p>&copy; {year}, Salehi Events. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
