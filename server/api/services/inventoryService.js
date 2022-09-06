const BaseService = require('./baseService')
const Vehicle = require('../models/vehicleModel')

class InventoryService extends BaseService {
  async getAll() {
    return this.loadList()
  }
  async addVehicle(object) {
    return this.add(object)
  }
  async deleteVehicle(id) {
    return this.delete(id)
  }
  async updateVehicle(id, object) {
    return this.update(id, object)
  }
  async getVehicle(id) {
    return this.loadOne(id)
  }
}


const inventoryService = new InventoryService(Vehicle)
module.exports = inventoryService