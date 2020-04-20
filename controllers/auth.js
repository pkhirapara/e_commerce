var dbModal=require('../model/registration.model');
var bcrypt=require('bcryptjs');
var jsonwebtoken=require('jsonwebtoken');
module.exports={
    login:(req,res)=>{
      dbModal.findOne({username:req.body.username}).then(data=>{
          console.log(data,"=======")
          var user=data;
          // console.log(user..password,"======")
      if (user) console.log('user exists')
      var password= bcrypt.compareSync(req.body.password,user.password);
      console.log(password,'============')
      if (password){
        var token=jsonwebtoken.sign({_id:user._id},process.env.SECREAT,{expiresIn:'24h'})
        res.json({status:true,toke:token,message:"Login successfully"})
      }else{
        res.json({status:false,message:"password is not matched"})
      }
      })
      
      }
          }