import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import ActivityForm from "./components/ActivityForm";
import ActivityList from "./components/ActivityList";

const App = () => {
  // Hämta aktiviteter från localStorage vid sidstart
  const [activities, setActivities] = useState(() => {
    const savedActivities = JSON.parse(localStorage.getItem("activities"));
    return savedActivities ? savedActivities : [];
  });

  // Spara aktiviteter till localStorage när de ändras
  useEffect(() => {
    if (activities.length > 0) {
      localStorage.setItem("activities", JSON.stringify(activities));
    }
  }, [activities]);

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
