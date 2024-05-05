const { models } = require('../config/sequelize');

class DemandeService { 
  
    constructor() {}

    async find() {
      const res = await models.Demande.findAll();
      return res;
    }

    async findOne(id) {
      const res = await models.Demande.findByPk(id);
      return res;
    }

    async create(data) {
      const res = await models.Demande.create(data);
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
    async findByUserID(userID) {

      console.log(userID);
   
      const res = await models.Demande.findAll({ where: { userID } });
      console.log(res);
      return res;
    }
  async updatePriorite(id,priority){
  
  
    console.log("priority","preiority");
      const demande = await models.Demande.findByPk(id);
      if (demande) {
        console.log(demande.dataValues.priorite);
        demande.dataValues.priorite=priority.preiority
        console.log(demande);
        await demande.save();
        
        return demande;
  }
         
      }
  
      
  
      
 
 
}
  module.exports = DemandeService;