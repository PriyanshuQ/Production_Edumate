const Course = require("../models/courseSchema");

// get all Courses
exports.getAllCourses = async (req, res) => {
  
    var cate = req.query.cate
    // console.log(cate);
   const courses = await Course.find({ category: cate});

  res.status(200).json({
    success: true,
    courses,
  });
};

// add Course
exports.addCourse = async (req, res) => {

    const { category, code, credit, name, data_link , syllabus_link } = req.body;

    const course = await Course.create({
        category,
        code,
        credit,
        name,
        data_link, 
        syllabus_link,
      });

      res.status(201).json({
        success: true,
        course,
      });
};

exports.addUser = async (req, res) => {

  const { name, email, password } = req.body;

  const user = await User.create({
      name,
      email,
      password,
    });

    res.status(201).json({
      success: true,
      course,
    });
};


