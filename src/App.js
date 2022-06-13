import "./styles.css";
import { MdOutlineClear } from "react-icons/md";
import { useState } from "react";
const listOptions = [
  "Treeview",
  "new view",
  "list view",
  "improvements",
  "Treeview Improvements",
  "new view",
  "kanban list view",
  "new improvements"
];
export default function App() {
  const [lists, setLists] = useState(listOptions);
  function handleDelete(idx) {
    setLists(lists.filter((list, id) => id !== idx));
  }
  return (
    <div className="App">
      {lists.map((list, idx) => {
        return (
          <div className="list-item" key={idx}>
            <div className="list">{list}</div>
            <div className="delete" onClick={(e) => handleDelete(idx)}>
              <MdOutlineClear size={15} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
