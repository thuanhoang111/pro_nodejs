import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Student = new Schema({
  _id: String,
  gender: String,
  firstName: String,
  lastName: String,
  email: String,
  registeredCourses: Array,
});
const StudentModel = mongoose.model("Student", Student);
export { StudentModel };
