import Joi from "joi"

const RegisterSchema = Joi.object({
    username: Joi.string().alphanum().min(5).max(20).messages({
        "string.min": "Name must be at least 9 character",
        "string.max": "Name must be at maximum of 20 character",
        "any.required": "Must filled"
    }),
    password: Joi.string().pattern(new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,20}$/)).messages({
        "any.required": "Must include special character"
    }),
})

export default RegisterSchema