import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Player.css";

const Player = ({ player, addToCart }) => {
  return (
    <div className="mb-4">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={player.picture} />
        <Card.Body>
          <Card.Title>{player.name}</Card.Title>
          <Card.Text>{player.salary}</Card.Text>
          <Button
            onClick={() => {
              addToCart(player);
            }}
            className="btn bg-dark btn-outline-warning"
          >
            Go somewhere
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Player;
