export default function Card({ name, emoji }) {
  return (
    <>
      <div>
        <p>{emoji}</p>
        <p>{name}</p>
      </div>
    </>
  );
}
