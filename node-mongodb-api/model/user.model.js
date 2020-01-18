const mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
	userName : {
		type: String,
		required: "Required"
	},
	userID : {
		type: String
	}
});

mongoose.model("User", UserSchema)
