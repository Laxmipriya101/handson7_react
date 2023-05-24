import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { studentAdded } from "./StudentSlicer";
import { useDispatch, useSelector } from "react-redux";

export default function NewStudent() {
  const Navi = useNavigate();
  const data = useSelector((state) => state.student);
  const dispatch = useDispatch();

  const [Name, setName] = useState("");
  const [Age, setAge] = useState("");
  const [Course, setCourse] = useState("");
  const [Batch, setBatch] = useState("");

  const handleSubmit = () => {
    if (Name && Age && Course && Batch) {
      dispatch(
        studentAdded({
          id: data.length,
          Name: Name,
          Age: Age,
          Course: Course,
          Batch: Batch,
        })
      );
    }
    Navi("/Student");
  };
  return (
    <>
      <h1>New Student Data</h1>
      <div className="add">
        <div className="input">
          <input
            type="text"
            placeholder="Enter Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            type="text"
            placeholder="Enter Age"
            value={Age}
            onChange={(e) => setAge(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Enter Course"
            value={Course}
            onChange={(e) => setCourse(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Batch"
            value={Batch}
            onChange={(e) => setBatch(e.target.value)}
          />
        </div>
      </div>
      <div className="btnName">
        <button onClick={() => Navi("/Student")}>Cancel</button>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </>
  );
}
