import React, { useState } from "react";
import "./App.css";

const UpdateData = ({ value }: any) => {
  const [hold, setHold] = useState(0);

  const handelIncrease = () => {
    setHold(hold + 1);
  };
  const handelDecrease = () => {
    if (hold > 0) {
      setHold(hold - 1);
    }
  };

  return (
    <div className="UpdateData">
      <span className="item">{value.title} </span>
      <button className="item" onClick={handelDecrease}>
        -
      </button>
      <span className="item">{hold}</span>
      <button className="item" onClick={handelIncrease}>
        +
      </button>
    </div>
  );
};

const productData = [
  { id: 1, title: "Product One", price: 50 },
  { id: 2, title: "Product Two", price: 150 },
];

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="main">
        <h2>React Increase Decrease value List View</h2>
        <div>
          {productData.map((value) => {
            return <UpdateData value={value} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
