import { useState } from "react";

export default function WorkHistory() {
  const [history, setHistory] = useState([
    { employer: "", job: "", startDate: "", endDate: "", description: "" },
  ]);

  const addWork = () => {
    setHistory((prev) => [
      ...prev,
      { employer: "", job: "", startDate: "", endDate: "", description: "" },
    ]);
  };

  const changeWork = (index, field, value) => {
    setHistory((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [field]: value } : item))
    );
  };

  const removeWork = (indexToRemove) => {
    setHistory((prev) => prev.filter((_, i) => i !== indexToRemove));
  };

  return (
    <form>
      <h2>Work History</h2>

      {history.map((item, index) => (
        <div
          key={index}
          style={{ display: "flex", flexDirection: "column", marginBottom: 20 }}
        >
          <label htmlFor={`employer-${index}`}>Employer Name</label>
          <input
            id={`employer-${index}`}
            type="text"
            placeholder="Tesla"
            value={item.employer}
            onChange={(e) => changeWork(index, "employer", e.target.value)}
          />

          <label htmlFor={`job-${index}`}>Job Title</label>
          <input
            id={`job-${index}`}
            type="text"
            placeholder="Engineer"
            value={item.job}
            onChange={(e) => changeWork(index, "job", e.target.value)}
          />

          <label htmlFor={`start-${index}`}>Start Date</label>
          <input
            id={`start-${index}`}
            type="date"
            value={item.startDate}
            onChange={(e) => changeWork(index, "startDate", e.target.value)}
          />

          <label htmlFor={`end-${index}`}>End Date</label>
          <input
            id={`end-${index}`}
            type="date"
            value={item.endDate}
            onChange={(e) => changeWork(index, "endDate", e.target.value)}
          />

          <label htmlFor={`desc-${index}`}>Role Description</label>
          <textarea
            id={`desc-${index}`}
            value={item.description}
            onChange={(e) => changeWork(index, "description", e.target.value)}
          />

          <button
            type="button"
            onClick={() => removeWork(index)}
            style={{
              alignSelf: "center",
              marginTop: 10,
              padding: "5px 10px",
              border: "1px solid #ccc",
              background: "#fff",
            }}
          >
            Remove
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={addWork}
        style={{
          display: "block",
          margin: "0 auto",
          padding: "8px 16px",
          background: "blueviolet",
          color: "#fff",
          border: "none",
        }}
      >
        Add Work Field
      </button>
    </form>
  );
}
