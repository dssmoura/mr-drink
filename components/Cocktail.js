import React from "react";

function Cocktail({ name, image, description }) {
  return (
    <div className="bg-white p-4 my-4 rounded-lg shadow-md w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 transition-transform hover:scale-105 hover:bg-slate-400 cursor-pointer text-white">
      <a href="#" className="no-underline">
        <h2 className="text-gray-950 text-center">{name}</h2>
        <img
          className="block mx-auto max-w-full h-auto rounded-lg"
          src={image}
          alt={name}
        />
        <p className="text-black line-clamp-10 truncate">{description}</p>
      </a>
    </div>
  );
}

export default Cocktail;
