import React from "react";
import { AiFillInstagram, AiFillTikTok } from "react-icons/ai";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-[#bfbebb] text-white py-20">
      <div className="container mx-auto px-6 flex justify-between">
        <div className="max-w-20">
          <img
            className="w-full"
            src="/favicon-cropped.svg"
            alt="footer-logo"
          />
        </div>
        <div className="flex-col space-y-2">
          <div className="text-[#353333] font-bold">Quick Links</div>
          <ul className="space-y-1 text-[#353333]">
            <li className="hover:text-black duration-300">
              <a href="/#">Home</a>
            </li>
            <li className="hover:text-black duration-300">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-black duration-300">
              <a href="#services">Services</a>
            </li>
            <li className="hover:text-black duration-300">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex-col space-y-2">
          <div className="text-[#353333] font-bold">Services</div>
          <ul className="space-y-1 text-[#353333]">
            <li className="hover:text-black duration-300">
              <a href="/#services">Engagements</a>
            </li>
            <li className="hover:text-black duration-300">
              <a href="/#services">Birthdays</a>
            </li>
            <li className="hover:text-black duration-300">
              <a href="/#services">Bridal Party</a>
            </li>
            <li className="hover:text-black duration-300">
              <a href="/#services">Baby Shower</a>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <div className="text-[#353333] font-bold">Our Socials</div>
          <div className="flex justify-center items-center space-x-3">
            <a href="https://www.instagram.com/salehievents/" target="_blank">
              <AiFillInstagram className="text-gray-500 hover:text-black duration-300 h-9 w-9" />
            </a>
            <a href="https://www.tiktok.com/@salehievents" target="_blank">
              <AiFillTikTok className="text-gray-500 h-9 w-9 hover:text-black" />
            </a>
          </div>
        </div>
      </div>
      {/* <div className="flex justify-center text-black mt-4">
        <p>&copy;{year}, Salehi Events. All rights reserved.</p>
      </div> */}
    </footer>
  );
}

export default Footer;
