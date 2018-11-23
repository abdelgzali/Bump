// input validations using Joi package
const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{6,32}$')
      )
    }

    const { error } = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Email not valid'
          })
          break
        case 'password':
          res.status(400).send({
            error: 'Incorrect password, must be at least 6 characters; numbers & letters only'
          })
          break
        default:
          res.status(400).send({
            error: 'Something went wrong'
          })
      }
    } else {
      next()
    }
  }
}
