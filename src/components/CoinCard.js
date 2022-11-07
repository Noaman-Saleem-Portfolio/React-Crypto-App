import React from "react";

import Col from "react-bootstrap/Col";

const CoinCard = ({ name, img, price, symbol, currencySymbol }) => {
  return (
    <Col
      xs={6}
      sm={4}
      md={3}
      lg={2}
      className=""
      style={{ paddingTop: "10px" }}>
      <div className="coin-card">
        <img src={img} alt="" />
        <p>{symbol}</p>
        <h5>{name}</h5>
        <p>
          {currencySymbol} {price}
        </p>
      </div>
    </Col>
  );
};

export default CoinCard;
