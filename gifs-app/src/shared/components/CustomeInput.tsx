import React, { useEffect, useState } from "react";

interface CustomeInputProps {
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
  placeHolder: string;
  text: string;
  onSearchQuery: (query: string) => void;
}

export const CustomeInput = ({
  type = "text",
  placeHolder,
  text,
  onSearchQuery,
}: CustomeInputProps) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      onSearchQuery(query);
    }, 700);

    return () => {
      clearTimeout(timeOutId);
    };

  }, [query, onSearchQuery]);

  const handleSearch = () => {
    onSearchQuery(query);
    setQuery("");
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-container">
      <input
        type={type}
        placeholder={placeHolder}
        value={query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setQuery(e.target.value)
        }
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSearch}>{text}</button>
    </div>
  );
};
