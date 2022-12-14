const mongoose = require('mongoose');
const attendance = mongoose.model('attendance');


const GetAttendancesByDate = function (req, res) {
    attendance.find({ attendanceDate: req.body.attendanceDate }).exec((err, sections) => {
        if (!sections) {
            return res.status(404).json({ "message": "No Records Found !" })
        } else if (err) {
            return res.status(404).json(err)
        }
        res.status(200).json(sections)
    })
}

const CreateAttendance = function (req, res) {
    attendance.create(req.body, (err, sectiondata) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(200).json(sectiondata);
        }
    })
}

const GetAttendances = function (req, res) {
    attendance.find({}).exec((err, sections) => {
        if (!sections) {
            return res.status(404).json({ "message": "No Records Found !" })
        } else if (err) {
            return res.status(404).json(err)
        }
        res.status(200).json(sections)
    })
}

module.exports = {
    GetAttendancesByDate,
    CreateAttendance,
    GetAttendances
}