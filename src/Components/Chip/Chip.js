import React from "react";
import { X } from "react-feather";
import './Chip.css'

function Chip(props) {
  return (
    <div className="chip" style={{ background: props.color }}>
      {props.text}
      {props.close && <X onClick={props.onclose ? props.onclose() : ""} />}
    </div>
  );
}

export default Chip;
