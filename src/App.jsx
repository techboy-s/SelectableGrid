import "./App.css";
import SelectableGrid from "./components/SelectableGrid";

function App() {
  return (
    <>
      <div> Selectable grid</div>
      <SelectableGrid row={10} cols={10} />
    </>
  );
}

export default App;
