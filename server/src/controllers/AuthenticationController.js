// handles data endpoints

const { User } = require('../models')

module.exports = {
  // async/await simply pauses the method until promise is returned
  // async code in a sync style
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON()) // send back user object to client requesting endpoint
      console.log('Sent user object')
    } catch (err) {
      res.status(400).send({
        error: 'This email is already in use >:|'
      })
    }
  }
}
