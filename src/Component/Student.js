import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
export default function Student() {
  const data = useSelector((state) => state.student.Student);
  const Navi = useNavigate();
  // console.log(Student);
  return (
    <>
      <div className="student">
        <h1>Student Details</h1>
        <button onClick={() => Navi("/NewStudent")} className="btn">
          Add New Student
        </button>
      </div>

      <table border="1" align="center" width="70%">
        <thead>
          <tr className="table-head">
            <td>Name</td>
            <td>Age</td>
            <td>Course</td>
            <td>Batch</td>
            <td>Change</td>
          </tr>
        </thead>

        <tbody>
          {data &&
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.Name}</td>
                  <td>{item.Age}</td>
                  <td>{item.Course}</td>
                  <td>{item.Batch}</td>
                  <td>
                    <Link to={"/EditStudent"} state={item.id}>
                      edit
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}
