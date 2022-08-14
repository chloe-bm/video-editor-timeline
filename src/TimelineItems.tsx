import TimelineItem from "./TimelineItem";
import React from "react";

const TIMELINE_ITEMS = [
  {
    id: "a",
    width: 320,
    height: 60,
  },
  {
    id: "b",
    width: 320,
    height: 60,
  },
  {
    id: "c",
    width: 320,
    height: 60,
  },
];

interface TimelineItem {
  id: string;
  width: number;
  height: number;
}

export default function () {
  const [timelineItems, setTimelineItems] =
    React.useState<TimelineItem[]>(TIMELINE_ITEMS);

  const makeResizeTimelineItem = React.useCallback(
    (id: string, props: any) => {
      const updatedItems = timelineItems.map((timelineItem) => {
        if (timelineItem.id === id) {
          return {
            ...timelineItem,
            width: props.width,
            height: props.height,
          };
        }
        return timelineItem;
      });

      setTimelineItems(updatedItems);
    },
    [timelineItems]
  );

  return (
    <div style={{ display: "flex" }}>
      {timelineItems.map((item) => (
        <TimelineItem
          id={item.id}
          makeResizeTimelineItem={makeResizeTimelineItem}
          key={item.id}
          width={item.width}
          height={item.height}
        />
      ))}
    </div>
  );
}
