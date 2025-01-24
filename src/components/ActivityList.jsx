import React from "react";
import ActivityItem from "./ActivityItem";

const ActivityList = ({ activities, onRemoveActivity, onChangeActivity }) => {
  return (
    <ul>
      {activities.map((activity, index) => (
        <ActivityItem
          key={index}
          activity={activity}
          removeActivity={() => onRemoveActivity(index)}
          changeActivity={(updatedActivity) => onChangeActivity(index, updatedActivity)}
        />
      ))}
    </ul>
  );
};

export default ActivityList;
