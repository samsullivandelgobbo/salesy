class BaseService {
  constructor(model) {
    this.model = model
  }

  async add(objects) {
    return await this.model.save(objects)
  }

  async loadList() {
    return await this.model.find()
  }

  async loadOne(id) {
    return await this.model.findBy(id)
  }

  async update(id, object) {
    return await this.model.findByIdAndUpdate(id, object)
  }
}

module.exports = BaseService