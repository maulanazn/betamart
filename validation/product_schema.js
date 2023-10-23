import Joi from "joi"

export const ProductSchema = Joi.object({
    user_id: Joi.number().min(1).messages({
        "any.required": "Must filled"
    }),
    name: Joi.string().pattern(new RegExp(/^[a-zA-Z0-9 ]{3,80}$/)).messages({
        "string.min": "Name must be at least 9 character",
        "any.required": "Must filled"
    }),
    stock: Joi.number().min(1).messages({
        "any.required": "Must number"
    }),
    category: Joi.string().lowercase().min(3).messages({
        "any.required": "Must lowercase"
    }),
    rack: Joi.number().min(1).messages({
        "any.required": "Must number"
    }),
    location: Joi.string().pattern(new RegExp(/^[a-zA-Z0-9]{3,80}$/)).messages({
        "any.required": "Must string"
    }),
    price: Joi.number().min(1).messages({
        "any.required": "Must number"
    }),
})
