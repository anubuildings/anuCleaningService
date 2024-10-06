import React from "react";
import OdometerItem from "../Odometer/OdometerItem";

const CounterAreaOneItem = ({ item }) => {
  return (
    <div className="counter-item">
      <div className="icon">{item.icon}</div>
      <div className="content">
        <h2 className="count">
          <span
            className="odometer counter-one-odometer"
            data-count={item.amount}
          >
            <OdometerItem amount={item.amount} /> +
          </span>
        </h2>
        <p>{item.title}</p>
      </div>
    </div>
  );
};

export default CounterAreaOneItem;
