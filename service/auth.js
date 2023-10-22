import {CreateUser, VerifyUser} from './../repository/user_repository.js'
import RegisterSchema from './../validation/register_schema.js'
import LoginSchema from './../validation/login_schema.js'
import { v4 as uuidv4 } from 'uuid';
import { generateToken } from '../helper/AuthAction.js';

export const registerUser = async (req, res) => {
    const id = uuidv4()
    const {username, password} = await RegisterSchema.validateAsync(req.body)

    const data = {
        id: id,
        username: username,
        password: password
    }

    await CreateUser(data)

    return res.status(201).json({
        status: 201, 
        message: "Success Register"
    })
}

export const loginUser = async (req, res) => {
    const {username, password} = await LoginSchema.validateAsync(req.body)

    VerifyUser(username, (err, row) => {
        let token = generateToken(row)
        if (err) {
            console.error(err.message)
        }

        if (username != row.username) {
            return res.status(400).json({
                status: 400, 
                message: "Failed Login, Register First!!"
            })
        } else {
            return res.status(201).json({
                status: 201, 
                message: "Success Login",
                access_token: token
            })
        }
    })

}