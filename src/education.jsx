import { useState } from "react";


export default function Education() {
  
    const [education, setEducation] = useState([{ qualifications: "", date: "" }])
  

    const addHandler = () => {
        setEducation((prev)=>[...prev, {qualifications:"", date:""}])
    }

    const changeHandler = (index, field, value) => {
        setEducation((prev)=>prev.map((edu, i)=> i===index? {...edu, [field]:value}:edu))
    }

    const removeHandler = (indexToRemove) => {
        setEducation(prev=>prev.filter((_,index)=>index !==indexToRemove))
    }

    return (
      <form action="">
        <h2>Education</h2>

        {education.map((edu, index) => (
          <div style={{ display: "flex", flexDirection: "column" }} key={index}>
            <label htmlFor={`qualification-${index}`}>
              Qualification Title
            </label>
            <input
              id={`qualification-${index}`}
              type="text"
              placeholder="Master"
              value={edu.qualifications}
              onChange={(e) =>
                changeHandler(index, "qualifications", e.target.value)
              }
            />

            <label htmlFor={`date-${index}`}>Award Year</label>
            <input
              id={`date-${index}`}
              type="date"
              value={edu.date}
              onChange={(e) => changeHandler(index, "date", e.target.value)}
            />

            <button
              style={{
                backgroundColor: "withe",
                border: "solid 1px",
                color: "black",
                width: "20%",
                height: "30px",
                        alignSelf: "center",
                        margin: "10px",
              }}
              type="button"
              onClick={()=>removeHandler(index)}
            >
              Remove
            </button>
          </div>
        ))}

        <button
          style={{
            backgroundColor: "blueviolet",
            border: "none",
            color: "white",
            width: "20%",
            height: "30px",
            alignSelf: "center",
          }}
          type="button"
          onClick={addHandler}
        >
          Add education Field
        </button>
      </form>
    );
}