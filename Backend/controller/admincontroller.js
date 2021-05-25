
const admincopy = require('../models/adminmodel');

const categorycopy = require('../models/categorymodel');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//register the details
exports.signUp =(req,res)=>{
    var adminname= req.body.email


    admincopy.findOne({email:adminname})
    .then(admin=>{
        if(admin){
            res.json({
                message : "admin already exsist, Please try with other email"
            })
        }else{
    bcrypt.hash(req.body.password, 10, function(err,hashedPass){
        if(err){
            res.json({
               
                message:"error occured in encyrption"
            })
        }
        let admin = new admincopy({
            aname:req.body.aname,
            phoneNo:req.body.phoneNo,
            email: req.body.email,
            password: hashedPass
    })
    admin.save()
    .then(admin=>{
        res.json({
            message:'admin added succesfully, You can sign In now!'
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



// login admin
exports.login =(req,res)=>{
    var adminname= req.body.aemail
    var password= req.body.password

    admincopy.findOne({email:adminname})
    .then(admin=>{
        if(admin)
        {
         bcrypt.compare(password, admin.password, function(err,result) {
             if(err){
                 res.json({
                     error:err
                 })
             }
             if(result){
          
                 let token =jwt.sign({name:admin.name}, "jh",{expiresIn : "30min"})
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

//get categories...

exports.getCategory =async(req,res)=>{
    try{
        const newcategory = await categorycopy.find()
        res.status(200).send(newcategory)
    }
    catch(error){
      res.send(error);
    }
}

//add category..

exports.addCategory =(req,res)=>{
    const newcategory = new categorycopy({
        name: req.body.name,
    })
    newcategory.save()
    .then(data=>{
        res.json({message:"unique name"})
    })
    .catch(error=>{
        res.json({ message:"Category name should be unique"})
    })
}



//delete category by name
exports.deleteCategory= (req,res)=> {
    categorycopy.remove({name:req.params.name})
    .then((result)=>{
     res.status(200).json(result)
})
.catch((err)=>{
    res.status(500).json({
    error:err
})
})
}