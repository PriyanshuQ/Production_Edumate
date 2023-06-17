const express = require("express");
const courseController = require("../controllers/course-controller");
const router = express.Router();

const userCntroller = require("../controllers/user-controller");
const authMiddleware = require("../middlewares/authMiddleware");

// add/get courses
router.get("/getcourses", courseController.getAllCourses);
router.post("/addcourse", courseController.addCourse);

// register/login user
router.post("/register",userCntroller.register);
router.post("/login",userCntroller.login);

router.post("/get-user-info-by-id", authMiddleware, userCntroller.info)


module.exports = router;
