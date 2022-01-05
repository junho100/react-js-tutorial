import { React, useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => {
    return setToDo(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") {
      return;
    }

    setToDos((current) => [toDo, ...current]);
    setToDo("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your todo"
        />
        <button>Submit</button>
      </form>
      <hr />
      <ul>
        {toDos.map((toDo, idx) => (
          <li key={idx}>{toDo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
