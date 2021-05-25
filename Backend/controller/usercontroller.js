
const usercopy = require('../models/usermodel');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//register the details
exports.signUp =(req,res)=>{
    var username= req.body.email


    usercopy.findOne({email:username})
    .then(user=>{
        if(user){
            res.json({
                message : "user already exsist, Please try with other email"
            })
        }else{
    bcrypt.hash(req.body.password, 10, function(err,hashedPass){
        if(err){
            res.json({
               
                message:"error occured in encyrption"
            })
        }
        let user = new usercopy({
            uname:req.body.uname,
            phoneNo:req.body.phoneNo,
            email: req.body.email,
            password: hashedPass
    })
    user.save()
    .then(user=>{
        res.json({
            message:'user added succesfully, You can sign In now!'
        })
    })
    .catch(error =>{
        res.json({
            message:'error'
        })
    })
})

}}
)}



// login user
exports.login =(req,res)=>{
    var username= req.body.email
    var password= req.body.password

    usercopy.findOne({email:username})
    .then(user=>{
        if(user)
        {
         bcrypt.compare(password, user.password, function(err,result) {
             if(err){
                 res.json({
                     error:err
                 })
             }
             if(result){
          
                 let token =jwt.sign({name:user.name}, "jh",{expiresIn : "30min"})
                 res.json({
                     message: "login successfull!",
                     token : token
                 })
                
                }else{
                    res.json({
                        message: "password doesnot match, Please fill the correct password!"
                    })
                }
    })
}else{
    res.json({
        message : "Invalid email, Please try with correct email"
    })
}
})
}


// login user with otp
exports.loginWithOtp =(req,res)=>{
    var moNumber= req.body.moNumber

    usercopy.findOne({phoneNo:moNumber})
    .then(result=>{
        if(result){
            res.status(200).json({
                     message: "registered Number"
                 })
        }else{
            res.json({
                message : "Not a registered Number"
                })}
})
.catch(error=>{
    error
})
}




