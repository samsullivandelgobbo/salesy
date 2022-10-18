const BaseService = require('./baseService')
const User = require('../models/userModel')
const Bcrypt = require('bcryptjs')

class UserService extends BaseService {
  async addUser(email, password) {
    let object = {
      email: email,
      password: Bcrypt.hashSync(password, 10)
    }
    return this.add(object)
  }
  async validUsername(id) {
    return this.findOne('email', id)
  }
  async validPassword(id) {
    return this.loadByField(id)
  }
}

const userService = new UserService(User)
module.exports = userService