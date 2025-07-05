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

  return response.json().then((r) =>
    r.map(
      (giveaway: GiveawayResponse): GameGiveaway => ({
        id: giveaway.id,
        title: giveaway.title,
        status: giveaway.status,
        worth: giveaway.worth,
        image: giveaway.image,
        openGiveAwayUrl: giveaway.open_giveaway_url,
        platforms: giveaway.platforms.split(', '),
      })
    )
  );
};

export type GiveawayResponse = {
  id: number;
  title: string;
  platforms: string;
  status: string;
  worth: string;
  open_giveaway_url: string;
  image: string;
};

export type GameGiveaway = {
  id: number;
  title: string;
  platforms: string[];
  status: string;
  worth: string;
  openGiveAwayUrl: string;
  image: string;
};
