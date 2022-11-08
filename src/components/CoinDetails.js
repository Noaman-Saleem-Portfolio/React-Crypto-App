import axios from "axios";
import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

import Image from "react-bootstrap/Image";
import Badge from "react-bootstrap/Badge";

import { useParams } from "react-router-dom";
import { server } from "../index";

const CoinDetails = () => {
  const params = useParams();
  // console.log(params);

  const [coin, setCoin] = useState({});
  const [loading, setLoading] = useState(true);
  const [currency, setCurrency] = useState("usd");

  const currencySymbol =
    currency === "jpy"
      ? "¥"
      : currency === "eur"
      ? "€"
      : currency === "usd"
      ? "$"
      : currency === "pkr"
      ? "Rs"
      : "Not-Set";

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);
        // console.log(params);
        setCoin(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCoin();
  }, [params.id]);

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
              onClick={(e) => {
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
              onClick={(e) => {
                setCurrency(e.target.value);
              }}
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              eur
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              value="jpy"
              onClick={(e) => {
                setCurrency(e.target.value);
              }}
            />
            <label className="form-check-label" htmlFor="inlineRadio3">
              jpy
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio4"
              value="pkr"
              onClick={(e) => {
                setCurrency(e.target.value);
              }}
            />
            <label className="form-check-label" htmlFor="inlineRadio4">
              pkr
            </label>
          </div>

          {/* Coin Details */}
          <Row>
            <Col>
              <Card className="text-center">
                <Card.Header>
                  Last Updated on {coin.market_data.last_updated}
                </Card.Header>
                <Card.Body>
                  <Card.Title>
                    <Image src={coin.image.large}></Image>
                  </Card.Title>
                  <Card.Title>{coin.name}</Card.Title>
                  <Card.Text>
                    {currencySymbol} {"  "}
                    {coin.market_data.current_price[currency]}
                  </Card.Text>
                  <Card.Text
                    className={
                      coin.market_data.price_change_percentage_24h > 0
                        ? "text-green"
                        : "text-red"
                    }>
                    {coin.market_data.price_change_percentage_24h}%
                  </Card.Text>
                  <h2>
                    <Badge bg="secondary">{`#${coin.market_cap_rank}`}</Badge>
                  </h2>

                  <ListGroup className="listGroup" horizontal>
                    <ListGroup.Item>Max Supply</ListGroup.Item>
                    <ListGroup.Item>
                      {coin.market_data.max_supply}
                    </ListGroup.Item>
                  </ListGroup>
                  <ListGroup className="listGroup" horizontal>
                    <ListGroup.Item>Circulating Supply</ListGroup.Item>
                    <ListGroup.Item>
                      {coin.market_data.circulating_supply}
                    </ListGroup.Item>
                  </ListGroup>
                  <ListGroup className="listGroup" horizontal>
                    <ListGroup.Item>Market Cap</ListGroup.Item>
                    <ListGroup.Item>
                      {`${currencySymbol} ${coin.market_data.market_cap[currency]}`}
                    </ListGroup.Item>
                  </ListGroup>
                  <ListGroup className="listGroup" horizontal>
                    <ListGroup.Item>All Time Low</ListGroup.Item>
                    <ListGroup.Item>
                      {`${currencySymbol} ${coin.market_data.atl[currency]}`}
                    </ListGroup.Item>
                  </ListGroup>
                  <ListGroup className="listGroup" horizontal>
                    <ListGroup.Item>All Time High</ListGroup.Item>
                    <ListGroup.Item>
                      {`${currencySymbol} ${coin.market_data.ath[currency]}`}
                    </ListGroup.Item>
                  </ListGroup>

                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default CoinDetails;
