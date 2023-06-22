const { validationResult} = require('express-validator');

validatorErrorHandler = (req, res) => {
    const errorFormater = ({msg, param, location}) => {
        return {
            "message": msg,
            "location": `[${param}] in ${location}`
        }

    };

    const errors = validationResult(req).formatWith(errorFormater);
    // console.log(errors)
    if(!errors.isEmpty()){
        return res.status(422).json({ 
            error: errors.array() 
        });
    }

}

module.exports = validatorErrorHandler