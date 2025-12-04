import type { CSSProperties } from "react";

const titleStyles: CSSProperties = {
  backgroundColor: "red",
  color: "white",
  padding: 5,
  borderRadius: 20,
  display: "flex",
  justifyContent: "center",
};

const name = "Miguel";
const lastName = "Chávez";

const favoriteGames = ["Pubg Mobile", "Fornite", "Metal"];
const isActive = true;

const address = {
  zipCode: "Crra 29A",
  city: "Florencia",
};

export function MyAwesomeApp() {
  return (
    <div>
      <h1 data-testid= "first-name-title">{name}</h1>
      <h2>{lastName}</h2>
      <p>{favoriteGames.join(", ")}</p>
      <h1>{isActive ? "Activo" : "Inactivo"}</h1>
      <h1 style={titleStyles}>{JSON.stringify(address)}</h1>
    </div>
  );
}
