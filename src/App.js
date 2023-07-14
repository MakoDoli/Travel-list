function App() {
  return (
    <div className="App">
      <Logo />
      <Form />
      <PackingLIst />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴Far Away🎒</h1>;
}
function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your trip</h3>
    </div>
  );
}
function PackingLIst() {
  return <div className="list">LIST</div>;
}
function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list, You've already packed x</em>
    </footer>
  );
}
export default App;
