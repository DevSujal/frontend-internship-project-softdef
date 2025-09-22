// Footer.jsx
import Image from "next/image";
import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-200 text-gray-800 pt-10 relative p-10">
      {/* Logo & Description */}
      <div className="flex justify-around items-center mb-10 flex-wrap">
        <div className="md:col-span-1 w-[220px]">
          <h2 className="flex items-center font-bold text-lg mb-2">
            <span className="bg-blue-400 p-1 rounded-full mr-2"></span>
            E-Comm
          </h2>
          <p className="text-sm text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>

        {/* Follow Us */}
        <div className="md:col-span-1 w-[220px]">
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <p className="text-sm text-gray-700 mb-2">
            Since the 1500s, when an unknown printer took a galley of type and
            scrambled.
          </p>
        </div>

        {/* Contact Us */}
        <div className="md:col-span-1 w-[220px]">
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <p className="text-sm text-gray-700">
            E-Comm, 4578 Marmora Road, <br /> Glasgow D04 89GR
          </p>
        </div>
      </div>
      <div className="flex justify-around items-center flex-wrap">
        <div className="md:col-span-1">
          <h3 className="font-semibold mb-2">Information</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <h3 className="font-semibold mb-2">Service</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="md:col-span-1">
          <h3 className="font-semibold mb-2">My Account</h3>
          <ul className="text-sm text-gray-700 space-y-1 mb-4">
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Our Offers</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li>About Us</li>
            <li>Information</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>

      <hr className="my-6 border-gray-300" />

      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm pb-6">
        <span>© 2018 Ecommerce theme by www.bisenbaev.com</span>
        <div className="flex gap-2 mt-2 md:mt-0">
         <Image src="/Western-union.png" width={50} height={50} alt="Western-union" />
         <Image src="/Group 19.png" width={50} height={50} alt="master card" />
         <Image src="/Paypal.png" width={50} height={50} alt="Paypal" />
         <Image src="/visa.png" width={50} height={50} alt="visa" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
