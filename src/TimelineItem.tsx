import React from "react";
import VerticalLine from "./components/Icons/VerticalLine";
import { Resizable } from "./components/Resizable";

const BottomRightHandle = ({
  isHover,
  setControlHover,
}: {
  isHover: boolean;
  setControlHover: (v: boolean) => void;
}) => (
  <div
    onMouseEnter={() => setControlHover(true)}
    onMouseLeave={() => setControlHover(false)}
    style={{
      background: "rgba(0,0,0,0.25)",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      opacity: isHover ? 1 : 0,
      cursor: "col-resize",
    }}
  >
    <VerticalLine size={24} />
  </div>
);

interface TimelineItemProps {
  id: string;
  makeResizeTimelineItem: (id: string, props: any) => void;
  width: number;
  height: number;
}
export default function ({
  makeResizeTimelineItem,
  id,
  width,
  height,
}: TimelineItemProps) {
  const [options, setOptions] = React.useState({
    isControlHover: false,
    isResizing: false,
  });

  const setControlHover = React.useCallback(
    (isHover: boolean) => {
      setOptions({ ...options, isControlHover: isHover });
    },
    [options]
  );

  return (
    <Resizable
      onResizeStart={() => setOptions({ ...options, isResizing: true })}
      onResizeStop={(e, direction, ref, d) => {
        setOptions({
          ...options,
          isResizing: false,
        });
        makeResizeTimelineItem(id, {
          width: width + d.width,
          height: height + d.height,
        });
      }}
      enable={{
        left: true,
        right: true,
      }}
      style={{
        overflow: "hidden",
        borderRadius: "10px",
        border: "1px solid rgba(0,0,0,.15)",
      }}
      size={{ width: width, height: height }}
      handleComponent={{
        right: (
          <BottomRightHandle
            setControlHover={setControlHover}
            isHover={options.isControlHover || options.isResizing}
          />
        ),
        left: (
          <BottomRightHandle
            setControlHover={setControlHover}
            isHover={options.isControlHover || options.isResizing}
          />
        ),
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
        }}
      ></div>
    </Resizable>
  );
}
