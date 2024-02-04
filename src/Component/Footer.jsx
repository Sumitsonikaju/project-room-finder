import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold ml-20 mb-2">About Us</h2>
          <p className="text-sm ml-20">Discover the ideal living experience with Room Buddy. We specialize in connecting you with the perfect roommates, ensuring a harmonious and enjoyable shared living space.</p>
        </div>
        <div className="space-x-4">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 hover:text-purple-700"
          >
            Instagram
          </a>
          {/* <Link to="/services" className="text-green-500 hover:text-green-700">
            Services
          </Link> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

