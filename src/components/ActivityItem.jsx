import React from "react";

const ActivityItem = ({ activity, removeActivity }) => {
  return (
    <li>
      <div>
        <strong>{activity.name}</strong>
        <p>Datum: {activity.date}</p>
        <p>Plats: {activity.place}</p>
      </div>
      <button onClick={removeActivity}>Ta bort</button>
    </li>
  );
};

export default ActivityItem;
