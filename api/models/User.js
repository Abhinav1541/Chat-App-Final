import mongoose  from "mongoose";

const UserSchema = new mongoose.Schema({

      username: {type:String, unique:true},
      password: String,

}, {timestamps:true});

//  const userModel = mongoose.model('User',UserSchema);

// module.exports = userModel;
export const Usermodel = mongoose.model("User", UserSchema);