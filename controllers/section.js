const mongoose = require('mongoose');
const section = mongoose.model('section');


const GetSections = function (req, res) {
    section.find({}).exec((err, sections) => {
        if (!sections) {
            return res.status(404).json({ "message": "Sections Not Found !" })
        } else if (err) {
            return res.status(404).json(err)
        }
        res.status(200).json(sections)
    })
}

const CreateSection = function (req, res) {
    section.create(req.body, (err, sectiondata) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(201).json(sectiondata);
        }
    })
}

module.exports = {
    GetSections,
    CreateSection
}