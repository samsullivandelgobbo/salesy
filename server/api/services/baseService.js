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
//default filter by
//figure out
  async loadList() {
    return await this.model.find()
  }

  async loadOne(id) {
    return await this.model.find({ stockNum: id })
  }

  async update(id, object) {
    return await this.model.findByIdAndUpdate(id, object)
  }

  async delete(id) {
    return await this.model.findOneAndDelete(id)
  }
}


module.exports = BaseService