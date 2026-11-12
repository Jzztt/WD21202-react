import Home from "./components/Home";
import Product from "./components/Product";

function App() {
  const name: string = "Hien";

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world! </h1>
      <p>Welcome, {name}!</p>
      <Home />
      <Product/>
    </>
  );
}

export default App;
