var express = require('express');
var app = express();
var router = express.Router();

const ctrlAttendance = require('../controllers/attendance')

router.post('/attendancebydate', ctrlAttendance.GetAttendancesByDate);
router.post('/addnewattendance', ctrlAttendance.CreateAttendance);
router.get('/fetchallattendances', ctrlAttendance.GetAttendances);

module.exports = router