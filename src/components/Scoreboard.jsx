export default function Scoreboard({ score }) {
  return (
    <>
      <header className="scoreboard">
        <h1>
          Score: <span>{score}</span>
        </h1>
        <h1>
          Best Score: <span>12</span>
        </h1>
      </header>
    </>
  );
}
