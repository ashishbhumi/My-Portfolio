import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="py-6 mt-auto text-white bg-gray-900">
      <div className="container flex flex-col items-center mx-auto">
        <div className="flex mb-4 space-x-6">
          <a
            href="https://github.com/ashishbhumi"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-gray-400"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ashish-singh-476640217/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-gray-400"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
        <p className="text-sm text-gray-500">
          &copy; 2024 Ashish Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
