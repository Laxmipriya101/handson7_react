import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { studentUpdated } from "./StudentSlicer";
import { useSelector, useDispatch } from "react-redux";

export default function EditStudent() {
  const Navi = useNavigate();
  const data = useLocation();
  const dispatch = useDispatch();
  const dataId = data.state.data;
  const StdDetail = useSelector((state) =>
    state.student.Student.filter((item) => item.id === dataId)
  );

  const stdName = StdDetail[0].Name;
  const stdAge = StdDetail[0].Age;
  const stdCourse = StdDetail[0].Course;
  const stdBatch = StdDetail[0].Batch;

  const [Name, setName] = useState(stdName);
  const [Age, setAge] = useState(stdAge);
  const [Course, setCourse] = useState(stdCourse);
  const [Batch, setBatch] = useState(stdBatch);

  const handleSubmit = () => {
    if (Name && Age && Course && Batch) {
      dispatch(
        studentUpdated({
          id: dataId,
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
      <h1>Edit Student Details</h1>

      <input
        type="text"
        name="Name"
        value={Name}
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Age"
        value={Age}
        onChange={(e) => setAge(e.target.value)}
      />
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

      <button onClick={() => Navi("/Student")}>Cancel</button>
      <button onClick={handleSubmit}>Update</button>
    </>
  );
}
