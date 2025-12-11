import type { Gif } from "../../mock/gifs.mock";
import { GifCard } from "./GifCard";

interface GifListProps {
  gifs: Gif[];
}

export const GifsList = ({ gifs }: GifListProps) => {
  return (
    <div className="gifs-container">
      {gifs.map(({ id, title, url, width, height }) => (
        <GifCard
          key={id}
          gifId={id}
          gifTitle={title}
          gifUrl={url}
          gifWidth={width}
          gifHeight={height}
        />
      ))}
    </div>
  );
};
