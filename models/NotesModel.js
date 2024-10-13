const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

const NoteSchema = mongoose.Schema({
    "noteTitle": String,
    "noteDescription": String,
    "priority": {
        type: String,
        enum: ['HIGH', 'LOW', 'MEDIUM']
    },
    "dateAdded": {
        type: Date,
        default: Date.now
    },
    "dateUpdated": Date
});

const Notes = mongoose.model('Notes', NoteSchema);

module.exports = Notes;