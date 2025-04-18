import "./App.css";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();

  const counterOperation = (type, payload) => {
    dispatch({ type, payload });
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
            <button onClick={() => counterOperation("increase", 2)}>
              increase
            </button>
            <button onClick={() => counterOperation("decrease", 2)}>
              decrease
            </button>
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
