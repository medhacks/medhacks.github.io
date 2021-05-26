import React, { useState, useEffect } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import SpeakerArea from "./SpeakerArea";

const Carousel = (props) => {
  const [direction, setDirection] = useState("");
  const [active, setActive] = useState(props.active);
  useEffect(() => {
    const timer = setTimeout(() => {
      moveRight();
    }, 7500);
    return () => clearTimeout(timer);
  }, [active]);

  const generateItems = () => {
    let items = [];
    let level;
    // console.log("active is ", active);
    for (let i = active - 1; i < active + 2; i++) {
      let index = i;
      if (i < 0) {
        index = props.items.length + i;
      } else if (i >= props.items.length) {
        index = i % props.items.length;
      }
      level = active - i;
      // console.log(
      //   level,
      //   level === -1 ? "left" : level === 1 ? "right" : "middle"
      // );
      items.push(
        <CSSTransition
          key={index}
          // classNames={direction}
          timeOut={1000}
          onEnter={() => console.log("entering", props.items[index])}
          onExit={() => console.log("exiting", props.items[index])}
        >
          <Item
            id={props.items[index]}
            level={level}
            key={index}
            speaker={props.items[index]}
            onClickFunc={move}
          />
        </CSSTransition>
      );
    }
    return items;
  };

  const move = (level) => {
    console.log("moving", level);
    if (level === -1) {
      moveLeft();
    } else if (level === 1) {
      moveRight();
    }
  };

  const moveLeft = () => {
    let newActive = active - 1 < 0 ? props.items.length - 1 : active - 1;
    props.setIndex(newActive);
    setActive(newActive);
    setDirection("goleft");
  };

  const moveRight = () => {
    let newActive = (active + 1) % props.items.length;
    props.setIndex(newActive);
    setActive(newActive);
    setDirection("goright");
  };

  return (
    <div style={{ position: "absolute" }}>
      <TransitionGroup>{generateItems()}</TransitionGroup>
    </div>
  );
};

const Item = (props) => {
  const className = "item level" + props.level;
  return (
    <div
      className={"item speaker_" + (props.level + 2) + " level" + props.level}
      style={{
        position: "absolute",
        width: 30 - Math.abs(props.level) * 2 + "vw",
        height: 30 - Math.abs(props.level) * 5 + "vw",
        left: 35 + props.level * 29 + (props.level < 0 ? 2 : 0) + "vw",
        // right: 100 - 35 + props.level * 25 + (props.level < 0 ? 5 : 0) + "vw",
        // marginTop: Math.abs(props.level * 4) + "rem",
        zIndex: 1 - Math.abs(props.level),
      }}
      onClick={() => props.onClickFunc(props.level)}
    >
      {/* {props.speaker.name} */}
      <SpeakerArea speaker={props.speaker} />
    </div>
  );
};

export default Carousel;
//<Carousel items={items} active={0}/>, document.getElementById('app'))
