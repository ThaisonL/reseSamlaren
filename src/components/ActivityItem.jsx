import React, {useState, useEffect} from "react";

const ActivityItem = ({ activity, removeActivity, changeActivity, index }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedActivity, setEditedActivity] = useState(activity);

  useEffect(() => {
    setEditedActivity(activity);
  }, [activity]);

  const handleEditChange = (e) => {
    const { name, value} = e.target;
    setEditedActivity({ ...editedActivity, [name]: value});
  };

    const saveChanges = () => {
      changeActivity(index, editedActivity);
      setIsEditing(false);
    };

  return (
    <li>
      {isEditing ? (
        <div>
        <input
        type="text"
        name="name"
        value={editedActivity.name}
        onChange={handleEditChange}
        placeholder="Namn"
        />
        <input
        type="text"
        name="date"
        value={editedActivity.date}
        onChange={handleEditChange}
        placeholder="Datum"
        />
        <input
        type="text"
        name="place"
        value={editedActivity.place}
        onChange={handleEditChange}
        placeholder="Plats"
        />
        <button onClick={saveChanges}>Spara</button>
        <button onClick={() => setIsEditing(false)}>Avbryt</button>
        </div>
      ) : (
      <div>
        <strong>{activity.name}</strong>
        <p>Datum: {activity.date}</p>
        <p>Plats: {activity.place}</p>
      <button onClick={removeActivity}>Ta bort</button>
      <button onClick={() => setIsEditing(true)}>Redigera</button>
      </div>
      )}
    </li>
  );
};

export default ActivityItem;
