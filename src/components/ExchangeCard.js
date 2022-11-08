import React from "react";

import Col from "react-bootstrap/Col";

const ExchangeCard = ({ name, img, symbol, trust_score, url }) => {
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

        <p>Trust Score : {trust_score}</p>
        <a
          href={url}
          style={{
            fontSize: "12px",
            textDecoration: "none",
            display: "block",
            margin: "0 auto",
            // backgroundColor: "pink",
            width: "80%",
          }}
          target="blank">
          Click for more Info
        </a>
      </div>
    </Col>
  );
};

export default ExchangeCard;
