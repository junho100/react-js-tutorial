import React from "react";

function Food({fav}){
  return(<h1>i like {fav}</h1>);
}

function App() {
  return (
    <div className="App"><h1>Hello world!</h1><Food fav = "kimchi" /></div>
  );
}

export default App;
