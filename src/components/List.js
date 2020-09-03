import React from "react";
import Item from "./Item";

const List = ({ list }) => {
  return (
    <div>
      {list.map((item) => (
        <Item key={item.objectID} item={item} />
      ))}
    </div>
  );
};

export default List;
