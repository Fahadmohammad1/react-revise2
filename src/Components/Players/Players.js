import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Player from "../Player/Player";

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (person) => {
    const newCart = [...cart, person];
    setCart(newCart);
  };

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data.slice(0, 20)));
  }, []);
  return (
    <div className="row w-100">
      <div className="players col-lg-9 card-container">
        <div className="container mx-auto row row-cols-3 ">
          {players.map((player) => (
            <Player
              player={player}
              key={player.id}
              addToCart={addToCart}
            ></Player>
          ))}
        </div>
      </div>
      <div className="cart col-lg-3 bg-success">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Players;
