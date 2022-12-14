const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    sectionId: { type: String, required: true },
    studentId: { type: String, required: true },
    attendanceDate: { type: String, required: true  }
});

mongoose.model('attendance', attendanceSchema, 'attendances')