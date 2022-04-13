const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/]
    },
    chores: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Chore'
        }
    ],
}
{
    toJSON: {
        virtuals: true
    },
    id: false
}
);