const { Schema, model, Types } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const ChoreSchema = new Schema (
    {
        choreId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        choreName: {
            type: String,
            required: true,
            trim: true,
            minlength: 1,
            maxlength: 120,
        },
        choreAssigned: {
            type: String,
            required: true
        },
        completeByDate: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 24,
        },
        createAt: {
            type: Date,
            default: Date.now
        }
    },
    {
        toJSON: {
            getters: true
        },
        id: false
    }
);

const Chore = model('Chore', ChoreSchema);

module.exports = Chore;