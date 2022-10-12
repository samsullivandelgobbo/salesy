class BaseService {
  constructor(model) {
    this.model = model
  }

  async add(objects) {
    return await this.model.create(objects)
  }
  async addMultiple(objects) {
    return await this.model.insertMany(objects)
  }

  async loadList() {
    return await this.model.find()
  }

  async loadByField(field, id) {
    return await this.model.find({ [field]: id })
  }
  

  async update(id, field, update) {
    return await this.model.findByIdAndUpdate(id, {[field]: update})
  }

  async delete(id) {
    return await this.model.findOneAndDelete(id)
  }
  
}


module.exports = BaseService
