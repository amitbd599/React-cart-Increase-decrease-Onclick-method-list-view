import React, { useState } from "react";
import "./App.css";
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

const UpdateData = ({ value }: any) => {
  const [hold, setHold] = useState(0);

  const hendelIncrease = () => {
    setHold(hold + 1);
  };
  const hendelDecrease = () => {
    if (hold > 0) {
      setHold(hold - 1);
    }
  };

  return (
    <div className="UpdateData">
      <span className="item">{value.title} </span>
      <button className="item" onClick={hendelDecrease}>
        -
      </button>
      <span className="item">{hold}</span>
      <button className="item" onClick={hendelIncrease}>
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
