interface GifCardProps {
  gifId: string;
  gifUrl: string;
  gifTitle: string;
  gifWidth: number;
  gifHeight: number;
}

export const GifCard = ({
  gifId,
  gifTitle,
  gifUrl,
  gifWidth,
  gifHeight,
}: GifCardProps) => {
  return (
    <div key={gifId} className="gif-card">
      <img src={gifUrl} alt={gifTitle} />
      <h3>{gifTitle}</h3>
      <p>
        {gifWidth}x{gifHeight} (1.5mb)
      </p>
    </div>
  );
};
