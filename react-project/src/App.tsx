import Home from "./components/Home";
import Product from "./components/Product";
import StateComponent from "./components/StateComponent";

function App() {
  const name: string = "Hien";

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world! </h1>
      <p>Welcome, {name}!</p>
      {/* <Home /> */}
      {/* <Product/> */}
      <StateComponent />
    </>
  );
}

export default App;
