const Footer = () => {
    return (
      <footer className="bg-[#DAC3BC]">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center">
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 me-3"
                  alt="Healthy Treats Logo"
                />
                <span className="self-center text-2xl font-semibold whitespace-nowrap">
                  Sweet Nature
                </span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              {[
                {
                  title: "Our Treats",
                  links: [
                    { name: "All Products", href: "#" },
                    { name: "Seasonal Specials", href: "#" },
                  ],
                },
                {
                  title: "Follow us",
                  links: [
                    { name: "Instagram", href: "#" },
                    { name: "Pinterest", href: "#" },
                  ],
                },
                {
                  title: "Information",
                  links: [
                    { name: "Nutrition Facts", href: "#" },
                    { name: "Allergen Info", href: "#" },
                  ],
                },
              ].map((section, index) => (
                <div key={index}>
                  <h2 className="mb-6 text-sm font-semibold text-gray-800 uppercase">
                    {section.title}
                  </h2>
                  <ul className="text-gray-600 font-medium">
                    {section.links.map((link, i) => (
                      <li key={i} className="mb-4">
                        <a href={link.href} className="hover:text-[#99BC85] hover:underline">
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <hr className="my-6 border-gray-300 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-600 sm:text-center">
              © 2025 <a href="#" className="hover:text-[#99BC85] hover:underline">Sweet Nature</a>. All Rights Reserved.
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              {[
                { name: "Facebook", icon: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" },
                { name: "Instagram", icon: "M10 0C7.283 0 6.944.012 5.877.06 2.246.227.227 2.242.06 5.877.01 6.944 0 7.283 0 10s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.123C19.777 2.249 17.76.228 14.124.06 13.057.01 12.716 0 10 0zm0 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.718-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058z M10 13.333a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm6.5-6.916a.833.833 0 10-1.667 0 .833.833 0 001.667 0zM10 12a2 2 0 100-4 2 2 0 000 4z" },
                { name: "Pinterest", icon: "M10 0C4.478 0 0 4.477 0 10c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.522 0 10-4.477 10-10S15.522 0 10 0z" },
                { name: "YouTube", icon: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" },
                { name: "TikTok", icon: "M9.024 8v2.193c0 1.473-1.137 2.67-2.55 2.746C5.099 12.99 4 11.944 4 10.65l-.001-4.5h2c0 1.005.822 1.827 1.825 1.833V6C7.824 4.897 6.928 4 5.825 4H4v2.143L4 10.5C4 13.53 6.47 16 9.5 16c3.03 0 5.5-2.47 5.5-5.5V7.7c1.015.625 2.19.975 3.5.975V6.675c-1.925 0-3.5-1.575-3.5-3.5V3h-2c0 2.485-2.015 4.5-4.5 4.5V10" }
              ].map((platform, index) => (
                <a 
                  key={index} 
                  href="#" 
                  className="text-gray-600 hover:text-[#99BC85] ms-5"
                  aria-label={`Visit our ${platform.name} page`}
                >
                  <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                    <path d={platform.icon}></path>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;