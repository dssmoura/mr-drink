import React from "react";

function Header() {
  return (
    <header className="bg-gray-800 text-white py-2">
      <div className="flex items-center justify-center">
        <a href="/">
          <img src="/logo.png" alt="Logo" className="w-15 h-15 mr-2" />
        </a>
      </div>
    </header>
  );
}

export default Header;
