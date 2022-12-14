const mongoose = require('mongoose');
const user = mongoose.model('user');


const UserLogin = function (req, res) {
    user.find(req.body).exec((err, userData) => {
        if (!userData) {
            return res.status(404).json({ "message": "Logged In Successfully  !" })
        } else if (err) {
            return res.status(404).json(err)
        }
        res.status(200).json(userData[0])
    })
};

const UserRegister = function (req, res) {
    user.create(req.body, (err, userdata) => {
        if (err) {
            res.status(400).json(err);
        } else {
            res.status(201).json(userdata);
        }
    })
};

const GetUsers = function (req, res){
    user.find({}).exec((err, userData) => {
        if (!userData) {
            return res.status(404).json({ "message": "Users Not Found !" })
        } else if (err) {
            return res.status(404).json(err)
        }
        res.status(200).json(userData)
    })
}

module.exports = {
    UserLogin,
    UserRegister,
    GetUsers
}