interface CustomeHeaderProps {
  title: string;
  leading?: string;
}

export const CustomeHeader = ({ title, leading }: CustomeHeaderProps) => {
  return (
    <header className="content-center">
      <div>
        <h1>{title}</h1>
        {leading && <p>{leading}</p>}
      </div>
    </header>
  );
};
