import React from "react";
import ActivityItem from "./ActivityItem";

const ActivityList = ({ activities, onRemoveActivity, onChangeActivity }) => {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {activities.map((activity, index) => (
        <ActivityItem
          key={index}
          activity={activity}
          index={index}
          removeActivity={() => onRemoveActivity(index)}
          changeActivity={onChangeActivity}
        />
      ))}
    </ul>
  );
};

export default ActivityList;