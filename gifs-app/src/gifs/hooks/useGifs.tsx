import { useRef, useState } from "react";

import type { Gif } from "../interfaces/gif.interface";

import { getGifByQuery } from "../actions/getGifByQuery";


export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [previousSearch, setPreviousSearch] = useState<string[]>([]);

  const gifsCache = useRef<Record<string, Gif[]>>({});

  const handleTermClick = async (term: string) => {
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term]);
      return;
    }

    const gifs = await getGifByQuery(term);
    setGifs(gifs);
  };

  const handleSerch = async (query: string = "") => {
    query = query.trim().toLowerCase();

    if (query.length === 0) return;

    if (previousSearch.includes(query)) return;

    setPreviousSearch([query, ...previousSearch].slice(0, 7));

    const gifs = await getGifByQuery(query);

    setGifs(gifs);

    gifsCache.current[query] = gifs;
  };

  return {
    previousSearch,
    gifs,
    handleTermClick,
    handleSerch,
  };
};
