import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "./store/counter";
import { toggleCounter } from "./store/toggleCounter";

function App() {
  const value = useSelector((state) => state.counter.value);
  const showCounter = useSelector((state) => state.toggleCounter.showCounter);
  const dispatch = useDispatch();

  return (
    <main className="App">
      {showCounter && (
        <>
          <h1>Counter: {value}</h1>
          <div>
            <button onClick={() => dispatch(increase(2))}>increase</button>
            <button onClick={() => dispatch(decrease(2))}>decrease</button>
          </div>
        </>
      )}
      <button onClick={() => dispatch(toggleCounter())}>
        {showCounter ? "Hide Counter" : "Show Counter"}
      </button>
    </main>
  );
}

export default App;
