import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="flex items-center justify-center">
        <a href="#" className="text-white mr-4 hover:text-gray-500">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="text-white mr-4 hover:text-gray-500">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="text-white mr-4 hover:text-gray-500">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="text-white hover:text-gray-500">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
