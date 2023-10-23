import Joi from "joi"

const RackSchema = Joi.object({
    user_id: Joi.string().min(1).messages({
        "any.required": "Must filled"
    }),
    product_id: Joi.string().min(1).messages({
        "any.required": "Must filled"
    }),
    quantity: Joi.number().min(1).messages({
        "any.required": "Must number"
    }),
    location: Joi.string().lowercase().min(3).messages({
        "any.required": "Must lowercase"
    })
})

export default RackSchema