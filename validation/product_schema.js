import Joi from "joi"

const ProductSchema = Joi.object({
    user_id: Joi.number().min(1).message({
        "any.required": "Must filled"
    }),
    name: Joi.string().pattern(new RegExp(/^[a-zA-Z0-9 ]{3,80}$/)).message({
        "string.min": "Name must be at least 9 character",
        "any.required": "Must filled"
    }),
    stock: Joi.number().min(1).message({
        "any.required": "Must number"
    }),
    category: Joi.string().lowercase().min(3).message({
        "any.required": "Must lowercase"
    }),
    rack: Joi.number().min(1).message({
        "any.required": "Must number"
    }),
    location: Joi.string().pattern(new RegExp(/^[a-zA-Z0-9]{3,80}$/)).message({
        "any.required": "Must number"
    }),
    price: Joi.number().min(1).message({
        "any.required": "Must number"
    }),
})

export default ProductSchema