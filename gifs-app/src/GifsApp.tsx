import { useState } from "react";

import { CustomeHeader } from "./shared/components/CustomeHeader";
import { CustomeInput } from "./shared/components/CustomeInput";

import { GifsList } from "./gifs/components/GifsList";
import { PreviewsSearches } from "./gifs/components/PreviewsSearches";

import { getGifByQuery } from "./gifs/actions/getGifByQuery";
import type { Gif } from "./gifs/interfaces/gif.interface";

export const GifsApp = () => {
  const [previousSearch, setPreviousSearch] = useState<string[]>([]);
  const [gifs, setGifs] = useState<Gif[] | []>([]);

  const handleTermClick = (term: string) => {
    console.log(term);
  };

  const handleSerch = async (query: string = "") => {
    query = query.trim().toLowerCase();

    if (query.length === 0) return;

    if (previousSearch.includes(query)) return;

    setPreviousSearch([query, ...previousSearch].slice(0, 7));

    const gifs = await getGifByQuery(query);

    setGifs(gifs);
  };

  return (
    <>
      <CustomeHeader
        title="My Gifs App"
        leading="Find and share the favorite gif"
      />

      <CustomeInput
        onSearchQuery={handleSerch}
        placeHolder="Search your perfect give"
        text="Search gif"
        type="text"
      />

      <PreviewsSearches onClick={handleTermClick} searches={previousSearch} />

      <GifsList gifs={gifs} />
    </>
  );
};
