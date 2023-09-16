// pages/api/movies.js

import axios from 'axios';

export default async (req, res) => {
  try {
    const options = {
      method: 'GET',
      url: 'https://imdb8.p.rapidapi.com/auto-complete',
      params: {
        q: 'trending movies',
      },
      headers: {
        'X-RapidAPI-Key': '2ea876294emsh3e70597448d70cep19717ajsn15c595af811e',
        'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
      },
    };

    const response = await axios.request(options);
    const movies = response.data;
    
    res.status(200).json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching movies' });
  }
};
