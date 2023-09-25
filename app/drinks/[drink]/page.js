"use client";
import React, { useEffect, useState } from "react";

export default function Page(props) {
  const { params } = props;
  const { drink } = params;
  const [drinkData, setDrinkData] = useState(null);

  useEffect(() => {
    const fetchDrinkData = async () => {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink}`
        );
        const data = await response.json();
        if (data.drinks) {
          const drinkInfo = data.drinks[0];
          setDrinkData(drinkInfo);
        } else {
          console.error("Drink não encontrado");
        }
      } catch (error) {
        console.error("Erro ao buscar dados do drink:", error);
      }
    };

    fetchDrinkData();
  }, [drink]);

  console.log(drinkData);

  return (
    <>
      <div className="font-sans bg-gray-100 m-0 p-0">
        <div className="max-w-screen-xl mx-auto p-4 flex flex-wrap justify-between">
          {drinkData ? (
            <div className="max-w-screen-xl mx-auto">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-4">
                  <img
                    src={drinkData.strDrinkThumb}
                    alt={drinkData.strDrink}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="md:w-1/2 p-4 text-black mx-auto">
                  <h1 className="text-3xl md:text-5xl font-bold mb-2">
                    {" "}
                    {drinkData.strDrink}
                  </h1>
                  <p className="text-lg mb-2">
                    Category: {drinkData.strCategory}
                  </p>
                  <p className="text-lg mb-4">{drinkData.strInstructions}</p>
                  <p className="text-lg">{drinkData.strInstructionsIT}</p>
                </div>
              </div>
            </div>
          ) : (
            <p>Carregando...</p>
          )}
        </div>
      </div>
    </>
  );
}
