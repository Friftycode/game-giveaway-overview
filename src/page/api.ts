export const fetchGiveaways = async (): Promise<GameGiveaway[]> => {
  const url = 'https://gamerpower.p.rapidapi.com/api/giveaways';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'gamerpower.p.rapidapi.com',
    },
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
};

export type GameGiveaway = {
  id: number;
  title: string;
  platforms: string;
  status: string;
  worth: string;
  open_giveaway_url: string;
  image: string;
};
