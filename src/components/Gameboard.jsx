import Card from "./Card.jsx";

export default function Gameboard({
  countryData,
  clickedCountries,
  setClickedCountries,
}) {
  function updateList(name) {
    if (!clickedCountries.includes(name)) {
      setClickedCountries((prev) => [...prev, name]);
    } else {
      setClickedCountries([]);
    }
  }

  return (
    <>
      <section className="gameboard">
        {countryData.map((country, index) => (
          <Card
            key={index}
            name={country.name}
            emoji={country.emoji}
            onClick={() => updateList(country.name)}
          />
        ))}
      </section>
    </>
  );
}
