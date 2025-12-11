import { CustomeHeader } from "./shared/components/CustomeHeader";
import { CustomeInput } from "./shared/components/CustomeInput";

import { GifsList } from "./gifs/components/GifsList";
import { PreviewsSearches } from "./gifs/components/PreviewsSearches";
import { useGifs } from "./gifs/hooks/useGifs";

export const GifsApp = () => {
  const { gifs, previousSearch, handleSerch, handleTermClick } = useGifs();

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
