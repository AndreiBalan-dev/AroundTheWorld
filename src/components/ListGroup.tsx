import { Fragment, useState } from "react";
import { MouseEvent } from "react";

interface Props {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  function handleClick(item: string, index: number) {
    return (event: MouseEvent) => {
      console.log(item + " " + event.clientX);
      setSelectedIndex(index);
      console.log(selectedIndex);
    };
  }
  function isSelected(index: number) {
    if (selectedIndex == index) {
      return "list-group-item active";
    } else {
      return "list-group-item";
    }
  }

  return (
    <Fragment>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={isSelected(index)}
            onClick={handleClick(item, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
