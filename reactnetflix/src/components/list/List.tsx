/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { useRef, useState } from "react";
import ListItem from "../listItem/ListItem";
import "./list.scss";

export default function List() {
  const [isMoved, setIsMoved] = useState<boolean>(false);
  const [slideNumber, setSlideNumber] = useState<number>(0);

  const listRef = useRef<HTMLDivElement | null >(null);

  const handleClick = (direction: any) => {
    setIsMoved(true);

    if( listRef.current !== null && (direction === "left" && slideNumber - 1)) {
      const distance = listRef.current.getBoundingClientRect().x - 50;
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
    }

    if ( listRef.current !== null && (direction === "right" && slideNumber < 5)) {
       const distance = listRef.current.getBoundingClientRect().x - 50;
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    }

    // const distance = listRef.current.getBoundingClientRect().x - 50;
    // if (direction === "left" && slideNumber > 0) {
    //   setSlideNumber(slideNumber - 1);
    //   listRef.current.style.transform = `translateX(${230 + distance}px)`;
    // }


    // if (direction === "right" && slideNumber < 5) {
    //   setSlideNumber(slideNumber + 1);
    //   listRef.current.style.transform = `translateX(${-230 + distance}px)`;
    // }
  };
  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
}
