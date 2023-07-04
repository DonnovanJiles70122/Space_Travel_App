import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import mars from "../images/mars.jpg";
import moon from "../images/moon.jpg";
import mw from "../images/mw.jpg";
import saturn from "../images/saturn.jpg";
import sl from "../images/space-lounge.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these planets</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={moon}
              text="Explore the Moon. Earth's natural satellite, a desolate and cratered world, bathing our nights in gentle lunar glow."
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={mars}
              text="Explore Mars. Red planet with a thin atmosphere, known for its dust storms and potential for extraterrestrial life."
              label="Adventure"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={mw}
              text="Explore the galaxy. Sprawling spiral galaxy, home to billions of stars, including our sun, amidst a cosmic tapestry."
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={saturn}
              text="Visit the Saturn. Giant gas planet with stunning rings, adorned with swirling storms and captivating beauty."
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={sl}
              text="Space Lounge is a futuristic haven in space, offering relaxation, breathtaking views, and cosmic ambiance for interstellar travelers."
              label="Adventure"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
