const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');


const User = model('User', UserSchema);

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    color: {
        type: String,
        allowNull: false,
        defaultValue: "#ff9acd"
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/]
    },
    password: {
        type: String,
        allowNull: false
    }
});
User.associate = function (models) {
    User.belongsTo(models.Household, {
        foreignKey: { allowNull: false }
    }
    )};
    User.hasMany(models.Chore);

    // how to use bcrypt to make a password hash and verify password
    User.addHook.beforeCreate(user) {
        newUser.password = brcypt.hash(newUser.password, 10);

        return newUser;
    }




module.exports = User;