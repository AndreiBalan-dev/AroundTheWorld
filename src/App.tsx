import ListGroup from "./components/ListGroup";

function App() {
  const itemsCities = [
    "New York",
    "Paris",
    "Tokyo",
    "San Francisco",
    "Bucharest",
  ];
  const itemsColors = ["Blue", "White", "Black", "Red"];

  return (
    <div>
      <ListGroup items={itemsCities} heading="Cities"></ListGroup>
      <ListGroup items={itemsColors} heading="Colors"></ListGroup>
    </div>
  );
}

export default App;
