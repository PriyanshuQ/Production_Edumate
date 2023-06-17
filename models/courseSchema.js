const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    credit: String,
    name: String,
    code: String,
    category: String,
    data_link: String,
    syllabus_link: String,
});

module.exports = mongoose.model('Course', courseSchema);
