import React, { useState } from "react";

const StateComponent = () => {
  // useState dùng để lưu trữ và quản lý trạng thái ( theo dõi và cập nhật ) trong một component React.
  // Nó trả về một mảng gồm hai phần tử: giá trị hiện tại của trạng thái và một hàm để cập nhật giá trị đó.
  // Khi giá trị trạng thái thay đổi, component sẽ được render lại với giá trị mới.
  const [count, setCount] = useState(0); // 0
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  console.log(count);
  // useState có thể dùng cho các kiểu dữ liệu khác nhau như số, chuỗi, mảng, đối tượng, v.v.
  const [name, setName] = useState("John"); // String
  const [isVisible, setIsVisible] = useState(true); // Boolean
  const [age, setAge] = useState(30); // Number
  const [items, setItems] = useState([]); // Array
  const [user, setUser] = useState({ name: "John", age: 30 }); // Object

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default StateComponent;
