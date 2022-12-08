import React, { useState } from "react";
import { X } from "react-feather";
import "./Editable.css";

function Editable(props) {
  const [showEdit, setShowEdit] = useState(false);
  return (
    <div>
      <div className="editable">
        {showEdit ? (
          <form
            className="editable_edit"
            onSubmit={(event) => {
              event.preventDefault();
              if (props.onsubmit) props.onsubmit();
            }}
          >
            <input
              autoFocus
              type="text"
              // i manually changed here
              // defaultValue={props.text}
              placeholder={props.text}
            />
            <div className="editable_edit_footer">
              <button type="submit">{props.buttonText || "Add"}</button>
              <X onClick={() => setShowEdit(false)} />
            </div>
          </form>
        ) : (
          <p
            onClick={() => {
              setShowEdit(true);
            }}
            className={`editable_display ${props.displayClass | ""}`}
          >
            {props.text || "Add item"}
          </p>
        )}
      </div>
    </div>
  );
}

export default Editable;
