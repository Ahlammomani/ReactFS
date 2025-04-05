import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
<footer class="bg-[#EDE8DC]">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="#" class="flex items-center">
                  <img src="/logo.svg" class="h-8 me-3" alt="Logo" />
                  <span class="self-center text-2xl font-semibold whitespace-nowrap">YourBrand</span>
              </a>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6">
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">More</h2>
                  <ul class="text-gray-700 font-medium">
                      <li class="mb-4 flex items-center">
                          <i class="fas fa-info-circle me-2"></i>
                          <a href="#about" class="hover:text-[#E7CCCC]">About</a>
                      </li>
                      <li class="flex items-center">
                          <i class="fas fa-envelope me-2"></i>
                          <a href="#contact" class="hover:text-[#E7CCCC]">Contact Us</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow Us</h2>
                  <ul class="text-gray-700 font-medium">
                      <li class="mb-4 flex items-center">
                          <i class="fab fa-facebook-f me-2"></i>
                          <a href="#facebook" class="hover:text-[#E7CCCC]">Facebook</a>
                      </li>
                      <li class="mb-4 flex items-center">
                          <i class="fab fa-instagram me-2"></i>
                          <a href="#instagram" class="hover:text-[#E7CCCC]">Instagram</a>
                      </li>
                      <li class="flex items-center">
                          <i class="fab fa-whatsapp me-2"></i>
                          <a href="#whatsapp" class="hover:text-[#E7CCCC]">WhatsApp</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                  <ul class="text-gray-700 font-medium">
                      <li class="mb-4 flex items-center">
                          <i class="fas fa-shield-alt me-2"></i>
                          <a href="#privacy" class="hover:text-[#E7CCCC]">Privacy Policy</a>
                      </li>
                      <li class="flex items-center">
                          <i class="fas fa-file-contract me-2"></i>
                          <a href="#terms" class="hover:text-[#E7CCCC]">Terms & Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-300 sm:mx-auto" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-gray-700 sm:text-center">© 2025 YourBrand. All Rights Reserved.</span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#facebook" class="text-gray-700 hover:text-[#E7CCCC] me-5">
                  <i class="fab fa-facebook-f text-xl"></i>
              </a>
              <a href="#instagram" class="text-gray-700 hover:text-[#E7CCCC] me-5">
                  <i class="fab fa-instagram text-xl"></i>
              </a>
              <a href="#whatsapp" class="text-gray-700 hover:text-[#E7CCCC]">
                  <i class="fab fa-whatsapp text-xl"></i>
              </a>
          </div>
      </div>
    </div>
</footer>



  );
};

export default Footer;
