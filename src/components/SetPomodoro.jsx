import React, { useState, useContext } from "react";

function SetPomodoro(props) {
  const [newTimer, setNewTimer] = useState({
    work: 0.2,
    short: 0.1,
    long: 0.5,
    active: "work",
  });

  const { updateExcute } = useContext(SettingsContext);

  const handleChange = (input) => {
    const { name, value } = input.target;
    switch (name) {
      case "work":
        setNewTimer({
          ...newTimer,
          work: parseInt(value),
        });
        break;
      case "shortBreak":
        setNewTimer({
          ...newTimer,
          short: parseInt(value),
        });
        break;
      case "longBreak":
        setNewTimer({
          ...newTimer,
          long: parseInt(value),
        });
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateExcute(newTimer);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            type="number"
            className="input"
            name="work"
            onChange={handleChange}
            value={newTimer.work}
          />
          <input
            type="number"
            className="input"
            name="shortbreak"
            onChange={handleChange}
            value={newTimer.short}
          />
          <input
            type="number"
            className="input"
            name="longbreak"
            onChange={handleChange}
            value={newTimer.long}
          />
        </div>
      </form>
    </div>
  );
}

export default SetPomodoro;
