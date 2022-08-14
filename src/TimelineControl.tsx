import PlaySolid from "./components/Icons/PlaySolid";

export default function () {
  return (
    <div style={{ padding: "1rem" }}>
      <div
        style={{
          height: "56px",
          width: "56px",
          background: "#ffffff",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow:
            "0 0 0 1px rgba(64,87,109,0.07),0 2px 12px rgba(53,71,90,0.2)",
        }}
      >
        <PlaySolid size={24} />
      </div>
    </div>
  );
}
