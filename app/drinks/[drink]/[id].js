

export default async (req, res) => {
  const { id } = req.query;

  try {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const drinkInfo = response.data.drinks[0];
    res.status(200).json(drinkInfo);
  } catch (error) {
    console.error('Erro ao buscar dados do drink:', error);
    res.status(500).json({ error: 'Erro ao buscar dados do drink' });
  }
};
