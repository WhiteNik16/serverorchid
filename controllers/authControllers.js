const User = require("../models/users");
const jwt =require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {secret} =require('../config/secret')

const generateAccessToken = (id, name) =>{
    const payload={
        id, name
    }
    return jwt.sign(payload,secret,{expiresIn:'12h'})
}

class authControllers{
    async registration (req,res)  {
        console.log(req.body)
        try{
            const username=req.body.username
            const password=req.body.password
            const candidate=await User.findOne({username})
            if(candidate){
                return res.status(208).send('Пользователь с таким ником уже существует')

            }
            const hashPassword=bcrypt.hashSync(password,7)
            const user =new User({username,password: hashPassword,name:req.body.name,
                surname:req.body.surname,
                email:req.body.email,
                male:req.body.male})
            await user.save()
            return res.status(201).send('Registration done')
        }
        catch (e){

            console.log(e)
            res.send('Registrations error')
        }

        }
    async login(req, res) {
                console.log(req.body)

        try {
            const username=req.body.username
            const password=req.body.password
            const user=await User.findOne({username})
            if(!user){
                res.status(208).send('Пользователь не найден')
            }
            const validPassword=bcrypt.compareSync(password,user.password)
            if(!validPassword){
                res.send('Неверный пароль').status(412)
            }
            const token=generateAccessToken(user._id,user.name)

            return res.status(202).send(token)


        } catch (e) {
            console.log(req.body.username)
            console.log(e)
            res.status(400).send('logining is failed')
        }

    }

    async getusers(req,res){
        try{
            const users =await User.find()
            res.status(200).send(users)

        }
        catch (e){
            console.log(e)
            res.status(400).send('error')
        }
    }


}
module.exports=new authControllers()