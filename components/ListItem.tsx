import { motion } from "framer-motion";

interface ListItemProps {
  children: React.ReactNode;
  isSelected: boolean;
  onClick: () => void;
}

const ListItem: React.FC<ListItemProps> = ({
  children,
  isSelected,
  onClick,
}) => (
  <motion.div
    layout
    className={`p-4 m-2 rounded cursor-pointer ${
      isSelected ? "bg-blue-400" : "bg-blue-200"
    }`}
    initial={{ borderRadius: 10 }}
    animate={{ scale: isSelected ? 1.2 : 1 }} // Scale is increased when the item is selected
    transition={{ duration: 0.3 }} // Smooth transition for the scale change
    onClick={onClick}
  >
    {children}
  </motion.div>
);

export default ListItem;
