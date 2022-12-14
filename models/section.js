const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    Password: { type: String },
    Phone: { type: String, required: true },
    Email: { type: String, required: false },
    UserType: { type: String, required: true }
})

const SectionSchema = new mongoose.Schema({
    SectionName: { type: String, required: true },
    ProfessorDetails: UserSchema,
    Students: [UserSchema],
    ClassTime: { type: String, required: true }
})

mongoose.model('section', SectionSchema, 'sections')