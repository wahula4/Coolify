

const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({

    username:{
        type:String
    },

    password:{
        type:String
    }



});

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};


const User = mongoose.model('User', userSchema);

module.exports = User;