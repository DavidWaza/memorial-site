import React from "react";
import { Conatiner, Row, Col } from "react-bootstrap";

export const UserCommentCard = (props) => {
  return (
    <div className="bg-white">
      <Row>
        <div>
          <img src={props.src} alt="photo" className="h-[18rem] cutomHeight" />
        </div>
      </Row>
      <Row>
        <p className="p-2 px-4">
          Zephyr moonlit dance cast a spell upon enchanted forest. Whispering
          leaves pirouetted through the night,while starlight painted a
          celestial tapestry overhead. Mystical creatures gathered in the
          glen,their eyes shimmering with ethereal magic. The ancient trees
          stood as silent witnesses, their branches swaying to the rhythm of a
          secret melody.
        </p>
      </Row>
      <Row>
        <div className="flex justify-end">
          <p className="font-extrabold capitalize px-4">{props.name}</p>
        </div>
      </Row>
    </div>
  );
};
