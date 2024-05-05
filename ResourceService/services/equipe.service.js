const { models } = require('../config/sequelize');

class EquipeService { 
  
    constructor() {}

    async find() {
      const res = await models.Equipe.findAll();
      return res;
    }

    async findOne(id) {
      const res = await models.Equipe.findByPk(id);
      return res;
    }

    async create(data) {
      const res = await models.Equipe.create(data);
      return res;
    }

    async update(id, data) {
      const model = await this.findOne(id);
      const res = await model.update(data);
      return res;
    }

    async delete(id) {
      const model = await this.findOne(id);
      await model.destroy();
      return { deleted: true };
    }

    async findPending(){
      let status='Pending'
      const res = await models.Equipe.find ({where:status});
      return res;
    }
  
  }
  
  module.exports = EquipeService;