import { useState } from "react";
interface IProduct {
  id: number;
  name: string;
}

const ListRender = () => {
  //  const [state, setState] = useState(initialState)
  const [food, setFood] = useState<string[]>([
    "Pizza",
    "Burger",
    "Pasta",
    "Sushi",
  ]);
  const [products, setProducts] = useState<IProduct[]>([
    {
      id: 1,
      name: "Product 1",
    },
    {
      id: 2,
      name: "Product 2",
    },
  ]);
  return (
    <>
      <div>ListRender</div>
      <ul>
        {food.map(
          (item, index) => (<li key={index}>{item}</li>),
        )}
      </ul>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </>
  );
};

export default ListRender;
