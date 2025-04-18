import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const state = useSelector((state) => state.value);
  const dispatch = useDispatch();

  const increase = () => {
    const action = { type: "increase" };
    dispatch(action);
  };

  const decrease = () => {
    const action = { type: "decrease" };
    dispatch(action);
  };
  return (
    <main className="App">
      <h1>Counter: {state}</h1>
      <div>
        <button onClick={increase}>increase</button>
        <button onClick={decrease}>decrease</button>
      </div>
    </main>
  );
}

export default App;
