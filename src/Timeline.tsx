import TimelineControl from "./TimelineControl";
import TimelineItems from "./TimelineItems";

export default function () {
  return (
    <div style={{ display: "flex", height: "140px", alignItems: "center" }}>
      <TimelineControl />
      <TimelineItems />
    </div>
  );
}
