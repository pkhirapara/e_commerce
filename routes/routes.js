//router helps in creating api
const express=require('express');
const router=express.Router();
const registerfile=require('../controllers/register')
	
router.post('/register',registerfile.register);
module.exports=router;