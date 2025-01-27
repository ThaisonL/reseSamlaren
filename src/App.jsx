import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import ActivityForm from "./components/ActivityForm";
import ActivityList from "./components/ActivityList";

const App = () => {
  // useState handles activities that is saved localy 
  const [activities, setActivities] = useState(() => {
    const savedActivities = JSON.parse(localStorage.getItem("activities"));
    return savedActivities ? savedActivities : [];
  });

  // useEffect updates localStorage eachtime activies changes
  useEffect(() => {
    if (activities.length > 0) {
      localStorage.setItem("activities", JSON.stringify(activities));
    }
  }, [activities]); // this runs when activiy changes

  // Add newActivity to state
  const addActivity = (newActivity) => {
    setActivities([...activities, newActivity]); 
  };
  // Remove activity from state based on index
  const removeActivity = (index,) => {
    setActivities(activities.filter((_, i) => i !== index));
  };
  // updates specific activity
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
