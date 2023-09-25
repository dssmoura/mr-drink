'use client'
import React, { useEffect, useState } from 'react';

export default function Page(props) {
  const { params } = props;
  const { drink } = params;
  const [drinkData, setDrinkData] = useState(null);

  useEffect(() => {
    const fetchDrinkData = async () => {
      try {        
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink}`);
        const data = await response.json();
        if (data.drinks) {
          const drinkInfo = data.drinks[0];
          setDrinkData(drinkInfo);
        } else {
          console.error('Drink não encontrado');
        }
      } catch (error) {
        console.error('Erro ao buscar dados do drink:', error);
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
            <div>
              <p className="text-sm md:text-base text-green-500 font-bold">
                Drink: {drinkData.strDrink}
              </p>
              <h1 className="font-bold break-normal text-3xl md:text-5xl">{drinkData.strDrink}</h1>
              <img src={drinkData.strDrinkThumb} alt={drinkData.strDrink} />
              {/* Adicione outros elementos para exibir mais informações sobre o drink */}
            </div>
          ) : (
            <p>Carregando...</p>
          )}
        </div>
      </div>
    </>
  );
}
