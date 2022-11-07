import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Pagination from "react-bootstrap/Pagination";

import CoinCard from "./CoinCard";

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currency, setCurrency] = useState("inr");
  const [page, setPage] = useState(1);
  const numberOfButtons = 250 / 50;

  let items = [];
  for (let number = 1; number <= numberOfButtons; number++) {
    items.push(number);
  }
  // console.log(items);
  function changePage(p) {
    // setLoading(true);
    setPage(p);
  }

  const currencySymbol =
    currency === "jpy" ? "₹" : currency === "eur" ? "€" : "$";

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=50&page=${page}&sparkline=false`
        );
        // console.log(page);
        setCoins(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCoins();
  }, [currency, page]);

  return (
    <>
      {loading ? (
        <Container>
          <h1>Loading....</h1>
        </Container>
      ) : (
        <Container>
          <div class="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="usd"
              onChange={(e) => {
                setCurrency(e.target.value);
              }}
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              usd
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="eur"
              onChange={(e) => {
                setCurrency(e.target.value);
              }}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              eur
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              value="jpy"
              onChange={(e) => {
                setCurrency(e.target.value);
              }}
            />
            <label className="form-check-label" htmlFor="inlineRadio3">
              jpy
            </label>
          </div>
          <Row>
            {coins.map((item, index) => {
              // console.log(index);
              return (
                <CoinCard
                  id={item.id}
                  key={item.id}
                  name={item.name}
                  price={item.current_price}
                  img={item.image}
                  symbol={item.symbol}
                  currencySymbol={currencySymbol}></CoinCard>
              );
            })}
          </Row>
          <Pagination style={{ margin: "0 auto", width: "60%" }}>
            <Pagination.First
              onClick={() => {
                setPage(1);
              }}
            />
            <Pagination.Prev
              onClick={() => {
                if (page > 1) {
                  setPage(page - 1);
                }
              }}
            />
            {items.map((item, index) => {
              return (
                <Pagination.Item
                  key={index}
                  onClick={() => {
                    changePage(index + 1);
                  }}>
                  {index + 1}
                </Pagination.Item>
              );
            })}

            <Pagination.Next
              onClick={() => {
                if (page < numberOfButtons) {
                  setPage(page + 1);
                }
              }}
            />
            <Pagination.Last
              onClick={() => {
                setPage(numberOfButtons);
              }}
            />
          </Pagination>
        </Container>
      )}
    </>
  );
};

export default Coins;
