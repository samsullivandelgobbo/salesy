const BaseService = require('./baseService')
const Message = require('../models/messageModel')

class MessageService extends BaseService {
  async addMessage(object) {
    return this.add(object)
  }
  async getMessage(id) {
    return this.findOne('_id', id)
  }
}