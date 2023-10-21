import Joi from "joi"

const LoginSchema = Joi.object({
    name: Joi.string().pattern(new RegExp(/^[a-zA-Z0-9]{9,20}$/)).message({
        "string.min": "Name must be at least 9 character",
        "string.max": "Name must be at maximum of 20 character",
        "any.required": "Must filled"
    }),
    password: Joi.string().pattern(new RegExp(/^[a-zA-Z0-9][!@#\\$%^\\&*+0]{9,20}$/)).message({
        "any.required": "Must include special character"
    }),
})

export default LoginSchema