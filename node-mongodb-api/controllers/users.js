const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const UserModel = mongoose.model("User")

router.get("/add", (req, res)=>{
	res.render("add-user");

})

router.post("/add", (req, res) => {
	
	var user = new UserModel();
	user.userName = req.body.userName;
	user.userID = Math.ceil(Math.random() *1000);
	user.save((err,doc)=>{
		if(!err)
			{
				res.redirect("/user/list")
				
				//For rest API
				//res.json({ message : "successfull", status : "OK" })
			}
		else
			{
				res.send("Error");
			}
	})
})

router.get("/list", (req, res) => {
	
	UserModel.find((err, docs)=>{
		if(!err)
			{
				console.log(docs);
				res.render("list", {data : docs})
			}
		else
			{
				res.send("Error")
			}
	});
});


module.exports = router;
