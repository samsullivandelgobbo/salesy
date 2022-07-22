const BaseService = require('./base-service ')
const Vehicle = require('../models/vehicleModel')

class InventoryService extends BaseService {
  async getAll() {
    return this.loadList()
  }
  async addVehicle(objects) {
    return this.add(objects)
  }

  
}

module.exports = new InventoryService(Vehicle)