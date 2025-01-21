import React, { useState } from "react";
import Header from "./components/Header";
import ActivityForm from "./components/ActivityForm";
import ActivityList from "./components/ActivityList";

const App = () => {
  const [activities, setActivities] = useState([]);

  const addActivity = (newActivity) => {
    setActivities([...activities, newActivity]);
  };

  const removeActivity = (index) => {
    setActivities(activities.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Header />
      <ActivityForm addActivity={addActivity} />
      <ActivityList activities={activities} onRemoveActivity={removeActivity} />
    </div>
  );
};

export default App;
