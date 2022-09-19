import { FC } from "react";
import { Card } from "../domain/card";

export const CardComponent: FC<Card> = (props) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={props.image} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <h1 className="subtitle">{props.title}</h1>
      </div>
    </div>
  )
}