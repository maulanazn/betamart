import Joi from "joi"

const RackSchema = Joi.object({
    user_id: Joi.string().min(1).message({
        "any.required": "Must filled"
    }),
    product_id: Joi.string().min(1).message({
        "any.required": "Must filled"
    }),
    quantity: Joi.number().min(1).message({
        "any.required": "Must number"
    }),
    location: Joi.string().lowercase().min(3).message({
        "any.required": "Must lowercase"
    })
})

export default RackSchema