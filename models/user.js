const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    Password: { type: String },
    Phone: { type: String, required: true },
    Email: { type: String, required: false },
    UserType: { type: String, required: true }
});

mongoose.model('user', UserSchema, 'users')
