import { StudentModel } from "../models/Student.js";
class StudentController {
  index(req, res) {
    StudentModel.find({}).then((data) => {
      res.json(data);
    });
  }

  findById(req, res) {
    const studentId = req.params.id;
    StudentModel.find({ _id: studentId }).then((data) => {
      res.json(data);
    });
  }
  add(req, res) {
    const { id, gender, firstName, lastName, email, registeredCourses } =
      req.body; // Thay req.query thành req.body để lấy dữ liệu từ body, thay vì query string
    console.log(req.body);
    if (
      !id ||
      !gender ||
      !firstName ||
      !lastName ||
      !email ||
      !registeredCourses
    ) {
      // Kiểm tra xem tất cả các thông tin cần thiết có được cung cấp hay không
      return res.status(400).json({ message: "Thiếu thông tin yêu cầu." });
    }

    // Tạo một đối tượng sinh viên mới
    const newStudent = new StudentModel({
      _id: id,
      gender: gender,
      firstName: firstName,
      lastName: lastName,
      email: email,
      registeredCourse: registeredCourses,
    });

    // Thêm sinh viên vào cơ sở dữ liệu
    newStudent
      .save()
      .then(() => {
        res.status(201).json({ message: "Sinh viên đã được thêm thành công!" });
      })
      .catch((err) => {
        console.error(err);
        res
          .status(500)
          .json({ message: "Lỗi khi thêm sinh viên vào cơ sở dữ liệu." });
      });
  }
}

const Student = new StudentController();
export { Student };
