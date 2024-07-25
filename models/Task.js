// // models/Task.js

// const mongoose = require('mongoose');

// const TaskSchema = new mongoose.Schema({
//     title: {
//         type: String,
//         required: true,
//     },
//     description: {
//         type: String,
//     },
//     column: {
//         type: String,
//         enum: ['todo', 'inProgress', 'done'],
//         default: 'todo'
//     },
//     dueDate: {
//         type: Date,
//         required: true,
//     },
//     userId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//         required: true,
//     },
// }, { timestamps: true });

// module.exports = mongoose.model('Task', TaskSchema);

// models/Task.js

const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    dueDate: {
        type: Date,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Task', TaskSchema);
