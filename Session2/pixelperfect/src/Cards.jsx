import React from "react";
import pricingData from "./pricingData";

function Cards() {
  return (
    <div className="cards">
      {pricingData.map((item) => {
        return (
          <div key={item.id} className="cardFrame">
            <h2 className="plan">{item.plan}</h2>
            <p className="description">{item.description}</p>
            <p className="price">
              {item.price} <span>/ month</span>
            </p>
            <div className="featureList">
              {item.features.map((feature, index) => {
                return (
                  <div key={index} className="feature">
                    <div className="tickFeature">
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/14025/14025310.png"
                        alt="Green Tick"
                      />
                      <p>{feature}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="bt">Get Started</button>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
