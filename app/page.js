"use client";
import React, { useEffect, useState } from "react";
import Cocktail from "../components/Cocktail";

export default function Home() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    async function fetchCocktails() {
      try {
        const response = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
        );
        const data = await response.json();

        if (data && data.drinks && Array.isArray(data.drinks)) {
          setCocktails(data.drinks);
        } else {
          console.error("Dados da API não estão no formato esperado.");
        }
      } catch (error) {
        console.error("Erro ao buscar cocktails:", error);
      }
    }
    fetchCocktails();
  }, []);
  console.log(JSON.stringify(cocktails));

  return (
    <div className="font-sans bg-gray-100 m-0 p-0">
      <div className="max-w-screen-xl mx-auto p-4 flex flex-wrap justify-between">
        {cocktails.map((cocktail) => (
          <Cocktail
            key={cocktail.idDrink}       
            drinkId={cocktail.idDrink}    
            name={cocktail.strDrink}
            image={cocktail.strDrinkThumb}
            description={cocktail.strInstructions}
          />
        ))}
      </div>
    </div>
  );
}
