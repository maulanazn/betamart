import Joi from "joi"

const PayProductSchema = Joi.object({
    user_id: Joi.string().min(1).messages({
        "any.required": "Must filled"
    }),
    product_id: Joi.string().min(1).messages({
        "any.required": "Must filled"
    }),
    status: Joi.string().lowercase().min(3).messages({
        "any.required": "Must lowercase"
    }),
    quantity: Joi.number().min(1).messages({
        "any.required": "Must number"
    }),
})

export default PayProductSchema