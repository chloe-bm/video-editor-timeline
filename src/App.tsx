import Canvas from "./Canvas";
import Timeline from "./Timeline";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Canvas />
      <Timeline />
    </div>
  );
}

export default App;
