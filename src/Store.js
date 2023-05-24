import { configureStore } from "@reduxjs/toolkit";
import StudentReducer from "./Component/StudentSlicer";
export default configureStore({
  reducer: {
    student: StudentReducer,
  },
});
