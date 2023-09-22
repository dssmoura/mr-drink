import React from "react";

function Cocktail({ name, image, description }) {
  return (
    <div className="bg-white p-4 my-4 rounded-lg shadow-md w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
      <h2 className="text-gray-950 text-center">{name}</h2>
      <img
        className="block mx-auto max-w-full h-auto rounded-lg"
        src={image}
        alt={name}
      />
      <p className="text-black line-clamp-10 truncate">{description}</p>
    </div>
  );
}

export default Cocktail;
