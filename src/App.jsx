import React, { useState } from "react";
import Header from "./components/Header";
import ActivityForm from "./components/ActivityForm";
import ActivityList from "./components/ActivityList";

const App = () => {
  const [activities, setActivities] = useState([]);

  const addActivity = (newActivity) => {
    setActivities([...activities, newActivity]);
  };

  const removeActivity = (index,) => {
    setActivities(activities.filter((_, i) => i !== index));
  };

  const changeActivity = (index, updatedActivity) => {
    setActivities((prevActivities) =>
      prevActivities.map((activity, i) =>
        i === index ? updatedActivity : activity
      )
    );
  };

  return (
    <div>
      <Header />
      <ActivityForm addActivity={addActivity} />
      <ActivityList 
       activities={activities}
       onRemoveActivity={removeActivity}
       onChangeActivity={changeActivity}
        />
    </div>
  );
};

export default App;
