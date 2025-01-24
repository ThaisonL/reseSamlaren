import React, {useState} from "react";

const ActivityItem = ({ activity, removeActivity, changeActivity }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedActivity, setEditedActivity] = useState(activity);

  const handleEditChange = (e) => {
    const { name, value} = e.target;
    setEditedActivity({ ...editedActivity, [name]: value});
  };

    const saveChanges = () => {
      changeActivity(editedActivity.index, editedActivity);
      setIsEditing(false);
    };

  return (
    <li>
      {isEditing ? (
        <div>
        <input
        type="text"
        name="name"
        value={editiedActivity.name}
        onChange={handleEditChange}
        />
        <input
        type="text"
        name="place"
        value={editedActivity.place}
        onChange={handleEditChange}
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
