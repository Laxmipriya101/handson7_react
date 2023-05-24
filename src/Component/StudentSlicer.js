import { createSlice } from "@reduxjs/toolkit";
export const StudentSlicer = createSlice({
  name: "StudentData",
  initialState: {
    Student: [
      {
        id: 0,
        Name: "John",
        Age: "24",
        Course: "MERN",
        Batch: "October",
      },
      {
        id: 1,
        Name: "Doe",
        Age: "25",
        Course: "MERN",
        Batch: "November",
      },
      {
        id: 2,
        Name: "Biden",
        Age: "26",
        Course: "MERN",
        Batch: "September",
      },
      {
        id: 3,
        Name: "Barar",
        Age: "22",
        Course: "MERN",
        Batch: "September",
      },
      {
        id: 4,
        Name: "Christ",
        Age: 23,
        Course: "MERN",
        Batch: "October",
      },
      {
        id: 5,
        Name: "Elent",
        Age: 24,
        Course: "MERN",
        Batch: "November",
      },
    ],
  },
  reducers: {
    studentAdded: (state, action) => {
      state.Student.push(action.payload);
    },
    studentUpdated: (state, action) => {
      const { id, Name, Age, Course, Batch } = action.payload;

      const existingStudent = state.Student.find(
        (Student) => Student.id === id
      );
      existingStudent.Name = Name;
      existingStudent.Age = Age;
      existingStudent.Course = Course;
      existingStudent.Batch = Batch;
    },
  },
});
export const { studentAdded, studentUpdated } = StudentSlicer.actions;
export default StudentSlicer.reducer;
