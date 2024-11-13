import React from 'react';
import './Footer.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = ({ isVisible }) => {
    return (
    <footer className={`footer ${isVisible ? 'visible' : ''}`}>
        <h2 className="font-medium">Have Questions About Buying Land?</h2>
        <p>Contact us at :</p>
        <p>Email: quickland@gmail.com</p>
        <p>Tel: +256726150581</p>
        <p>Copyright Quick-Land Uganda 2022</p>
         <div className="md:pr-10">
            <form className="relative pb-4" method="post" action="">
              <input
                type="email"
                className="email rounded-full py-4 px-6 w-full text-black outline-0"
                placeholder="Enter your email"
              />
              <button className="absolute right-0 rounded-full rounded-l-none py-4 px-6 bg-yellow-700 hover:bg-yellow-900 text-white">
                Subscribe
              </button>
            </form>
          </div>
            {/* Social media icons */}
            <div className="flex flex-row py-8 md:py-0 text-[30px] md:pr-10">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 hover:scale-110 duration-300"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 hover:scale-110 duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 hover:scale-110 duration-300"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 hover:scale-110 duration-300"
              >
                <FaTwitter />
              </a>
            </div>
  {/* Footer bottom text */}
  <div className="text-center py-6 text-black text-xl">
        <p>&copy; {new Date().getFullYear()} Quick Land. All rights reserved.</p>
      </div>
    </footer>
);
}

export default Footer;