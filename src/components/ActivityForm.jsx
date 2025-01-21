import React, { useState } from "react";

const ActivityForm = ({ addActivity }) => {
  const [form, setForm] = useState({ name: "", date: "", place: "" });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    // Rensa felmeddelanden vid ändring
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleAddActivity = () => {
    const newErrors = {};

    if (!form.name) newErrors.name = "Namn är obligatoriskt.";
    if (!form.date) newErrors.date = "Datum är obligatoriskt.";
    if (!form.place) newErrors.place = "Plats är obligatoriskt.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      addActivity(form);
      setForm({ name: "", date: "", place: "" }); // Töm formuläret
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleInputChange}
          placeholder="Aktivitet"
        />
        {errors.name && <small style={{ color: "red" }}>{errors.name}</small>}
      </div>
      <div>
        <input
          type="text"
          name="date"
          value={form.date}
          onChange={handleInputChange}
          placeholder="Datum"
        />
        {errors.date && <small style={{ color: "red" }}>{errors.date}</small>}
      </div>
      <div>
        <input
          type="text"
          name="place"
          value={form.place}
          onChange={handleInputChange}
          placeholder="Plats"
        />
        {errors.place && <small style={{ color: "red" }}>{errors.place}</small>}
      </div>
      <button onClick={handleAddActivity}>Lägg till aktivitet</button>
    </div>
  );
};

export default ActivityForm;
