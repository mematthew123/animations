import { useState } from "react";
import { LayoutGroup } from "framer-motion";
import ListItem from "./ListItem";

const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

const List: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleItemClick = (id: number) => {
    setSelectedId(selectedId === id ? null : id);
  };

  return (
    <LayoutGroup>
      <ul className="list-none">
        {items.map((item, i) => (
          <ListItem
            key={i}
            isSelected={selectedId === i}
            onClick={() => handleItemClick(i)}
          >
            {item}
          </ListItem>
        ))}
      </ul>
    </LayoutGroup>
  );
};

export default List;
