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
  async updateVehicleStockNum(id, update) {
    return this.update(id, 'stockNum', update)
  }
  async updateVehicleSoldState(id, update) {
    return this.update(id, 'sold', update)
  }
  async updateVehiclePrice(id, update) {
    return this.update(id, 'price', update)
  }
  async updateVehicleCustomer(id, update) {
    return this.update(id, 'customer', update)
  }
  async getVehicleByStockNum(id) {
    return this.loadByField('stockNum', id)
  }
  async getVehicleByYear(id) {
    return this.loadByField('year', id)
  }
  async getVehicleByMake(id) {
    return this.loadByField('make', id)
  }
  async getVehicleByModel(id) {
    return this.loadByField('model', id)
  }
  async getVehicleByPrice(id) {
    return this.loadByField('price', id)
  }
  async getVehicleByLocation(id) {
    return this.loadByField('location', id)
  }

}


const inventoryService = new InventoryService(Vehicle)
module.exports = inventoryService