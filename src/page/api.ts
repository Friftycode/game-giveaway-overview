import type { GameGiveaway } from "./Card";

export const fetchGiveaways = async (): Promise<GameGiveaway[]> => {
  const url =
    "https://gamerpower.p.rapidapi.com/api/filter?platform=epic-games-store.steam.android&type=game.loot";

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "gamerpower.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
};
