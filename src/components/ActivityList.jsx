import React from "react";
import ActivityItem from "./ActivityItem";

const ActivityList = ({ activities, onRemoveActivity }) => {
  return (
    <ul>
      {activities.map((activity, index) => (
        <ActivityItem
          key={index}
          activity={activity}
          onRemove={() => onRemoveActivity(index)}
        />
      ))}
    </ul>
  );
};

export default ActivityList;
