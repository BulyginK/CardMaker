import React from "react";
import { ArtObjectType } from "../../../model/type";

type artObjectProps = {
  artObject: ArtObjectType;
};

function TextBlock({ artObject }: artObjectProps) {
  return (
    <div id={artObject.id}>
      <p></p>
    </div>
  );
}

export default TextBlock;
