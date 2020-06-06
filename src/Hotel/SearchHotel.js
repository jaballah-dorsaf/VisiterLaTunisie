import React from "react";
import { InputGroup, Input } from "reactstrap";

export default function SearchHotel(props) {
  return (
    <div className="input-search">
      <InputGroup width="100%">
        <Input
          width="80%"
          placeholder="search by titre"
          onChange={event => props.searchHotelByTitre(event.target.value)}
        />

        <Input
          type="number"
          style={{ marginLeft: "1px" }}
          placeholder="search by rating"
          onChange={event => props.searchHotelByRating(event.target.value)}
        />
      </InputGroup>
    </div>
  );
}
