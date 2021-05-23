import React, { useState } from "react";
import { TransitionGroup } from "react-transition-group";
import SpeakerArea from "./SpeakerArea";

const Carousel = (props) => {
  const [direction, setDirection] = useState("");
  const [active, setActive] = useState(props.active);

  const generateItems = () => {
    let items = [];
    let level;
    console.log(active, active - 1);
    for (let i = active - 1; i < active + 2; i++) {
      let index = i;
      if (i < 0) {
        index = props.items.length + i;
      } else if (i >= props.items.length) {
        index = i % props.items.length;
      }
      level = active - i;
      items.push(
        <Item level={level} key={index} speaker={props.items[index]} />
      );
    }
    return items;
  };

  const moveLeft = () => {
    let newActive = active;
    newActive--;
    setActive(newActive < 0 ? props.items.length - 1 : newActive);
    setDirection("left");
  };

  const moveRight = () => {
    let newActive = active;
    setActive((newActive + 1) % props.items.length);
    setDirection("right");
  };

  return (
    <div
      id="carousel"
      className="noselect"
      style={{ position: "relative", width: "100%", height: "100%" }}
    >
      <div onClick={moveLeft}>
        {/* <i className="fi-arrow-left"></i> */}left
      </div>
      <TransitionGroup transitionName={direction}>
        {generateItems()}
      </TransitionGroup>
      <div onClick={moveRight} style={{ position: "absolute", right: "0rem" }}>
        {/* <i className="fi-arrow-right"></i> */}right
      </div>
    </div>
  );
};

const Item = (props) => {
  const className = "item level" + props.level;
  return (
    <div
      className="item"
      style={{
        // height: 100 - props.level * 10 + "%",
        width: 30 + "%",
        left: 35 + props.level * 30 + "%",
        marginTop: Math.abs(props.level * 5) + "rem",
      }}
    >
      {/* {props.speaker.name} */}
      <SpeakerArea speaker={props.speaker} />
    </div>
  );
};

export default Carousel;
//<Carousel items={items} active={0}/>, document.getElementById('app'))
