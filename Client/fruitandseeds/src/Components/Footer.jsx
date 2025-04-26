import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#FDFAF6] text-[#97BE5A]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-20" alt="Logo" />
        </Link>
              <span className="self-center text-2xl font-semibold whitespace-nowrap">FruitandSeeds</span>
            </a>
            <p className="mt-4 max-w-md text-sm">
              Your trusted partner in creating beautiful experiences. We're dedicated to quality, innovation, and customer satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase border-b border-[#97BE5A] pb-2">More</h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <a href="#about" className="hover:text-[#FF8BA7] flex items-center">
                    <span className="bg-[#FDFAF6] p-1 rounded-full mr-2 flex items-center justify-center w-6 h-6">
                      <span className="text-xs">i</span>
                    </span>
                    About
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-[#FF8BA7] flex items-center">
                    <span className="bg-[#FDFAF6] p-1 rounded-full mr-2 flex items-center justify-center w-6 h-6">
                      <span className="text-xs">@</span>
                    </span>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase border-b border-[#97BE5A] pb-2">Follow Us</h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <a href="#facebook" className="hover:text-[#FF8BA7] flex items-center">
                    <span className="bg-[#FDFAF6] p-1 rounded-full mr-2 flex items-center justify-center w-6 h-6">
                      <FaFacebookF className="text-xs" />
                    </span>
                    Facebook
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#instagram" className="hover:text-[#FF8BA7] flex items-center">
                    <span className="bg-[#FDFAF6] p-1 rounded-full mr-2 flex items-center justify-center w-6 h-6">
                      <FaInstagram className="text-xs" />
                    </span>
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#whatsapp" className="hover:text-[#FF8BA7] flex items-center">
                    <span className="bg-[#FDFAF6] p-1 rounded-full mr-2 flex items-center justify-center w-6 h-6">
                      <FaWhatsapp className="text-xs" />
                    </span>
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase border-b border-[#97BE5A] pb-2">Legal</h2>
              <ul className="font-medium">
                <li className="mb-4">
                  <a href="#privacy" className="hover:text-[#FF8BA7] flex items-center">
                    <span className="bg-[#FDFAF6] p-1 rounded-full mr-2 flex items-center justify-center w-6 h-6">
                      <span className="text-xs">P</span>
                    </span>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="hover:text-[#FF8BA7] flex items-center">
                    <span className="bg-[#FDFAF6] p-1 rounded-full mr-2 flex items-center justify-center w-6 h-6">
                      <span className="text-xs">T</span>
                    </span>
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-[#97BE5A] opacity-30 sm:mx-auto" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm sm:text-center">© 2025 YourBrand. All Rights Reserved.</span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <a href="#facebook" className="hover:text-[#FF8BA7] bg-[#FDFAF6] p-2 rounded-full flex items-center justify-center w-8 h-8">
              <FaFacebookF />
            </a>
            <a href="#instagram" className="hover:text-[#FF8BA7] bg-[#FDFAF6] p-2 rounded-full flex items-center justify-center w-8 h-8">
              <FaInstagram />
            </a>
            <a href="#whatsapp" className="hover:text-[#FF8BA7] bg-[#FDFAF6] p-2 rounded-full flex items-center justify-center w-8 h-8">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;