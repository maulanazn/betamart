import Joi from "joi"

const LoginSchema = Joi.object({
    username: Joi.string().pattern(new RegExp(/^[a-zA-Z0-9]{3,20}$/)).messages({
        "string.min": "Name must be at least 9 character",
        "string.max": "Name must be at maximum of 20 character",
        "any.required": "Must filled"
    }),
    password: Joi.string().pattern(new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{3,20}$/)).messages({
        "any.required": "Must include special character"
    }),
})

export default LoginSchema