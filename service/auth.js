import {CreateUser, VerifyUser} from './../repository/user_repository.js'
import RegisterSchema from './../validation/register_schema.js'
import LoginSchema from './../validation/login_schema.js'

export const registerUser = async (req, res) => {
    const {name, password} = RegisterSchema.validate(req.body)

    const data = {
        name: name || "",
        password: password || ""
    }

    const result = CreateUser(data)

    return res.status(201).json({
        
    })
}

export const loginUser = async (req, res) => {
    const {name, password} = req.body;


}