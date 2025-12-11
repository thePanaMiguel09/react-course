import type { FC } from "react";

interface PreviosSearchesProps {
  searches: string[];
  onClick: (term: string) => void;
}

export const PreviewsSearches: FC<PreviosSearchesProps> = ({ searches, onClick }) => {
  return (
    <div className="previous-searches">
      <h2>Previos Searches</h2>
      <ul className="previous-searches-list">
        {searches.map((term) => (
          <li onClick={() => onClick(term)} key={term}>{term}</li>
        ))}
      </ul>
    </div>
  );
};
