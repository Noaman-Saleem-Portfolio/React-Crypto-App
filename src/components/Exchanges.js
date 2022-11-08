import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import ExchangeCard from "./ExchangeCard";

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`${server}/exchanges`);
        // console.log(data);
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCoins();
  }, []);

  return (
    <>
      {loading ? (
        <Container>
          <h1>Loading....</h1>
        </Container>
      ) : (
        <Container>
          <Row>
            {exchanges.map((item, index) => {
              // console.log(index);
              return (
                <ExchangeCard
                  id={item.id}
                  key={item.id}
                  name={item.name}
                  img={item.image}
                  symbol={item.symbol}
                  trust_score={item.trust_score}
                  url={item.url}></ExchangeCard>
              );
            })}
          </Row>
        </Container>
      )}
    </>
  );
};

export default Exchanges;
