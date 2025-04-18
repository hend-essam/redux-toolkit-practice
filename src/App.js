import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: "increase", payload: 2 });
  };

  const decrease = () => {
    dispatch({ type: "decrease", payload: 2 });
  };

  const toggleCounter = () => {
    dispatch({ type: "toggleCounter" });
  };

  return (
    <main className="App">
      {globalState.showCounter && (
        <>
          <h1>Counter: {globalState.value}</h1>
          <div>
            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
          </div>
        </>
      )}
      <button onClick={toggleCounter}>
        {globalState.showCounter ? "Hide Counter" : "Show Counter"}
      </button>
    </main>
  );
}

export default App;
