const EquipementService = require('../services/equipe.service');
const service = new EquipementService();
const axios=require('axios')
const create = async ( req, res ) => {
    try { 
        const response = await service.create(req.body);
        res.json({ success: true, data: response});
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const get = async ( req, res ) => {
    try {
        const equipe = await service.find();
      
       const response=await Promise.all( 
        equipe.map(async(item)=>{

       console.log(JSON.parse(item.dataValues.membre));
        const membres = await Promise.all(JSON.parse(item.dataValues.membre).map( async (userId) => {
            const userDetails = await axios.get(`http://localhost:8000/security/api/user/${userId}`);
             return userDetails.data;
        }));
        console.log(membres);
return{
        createdAt: item.createdAt,
        description: item.description,
        id: item.id,
        membre: membres,
        name: item.name,
        status: item.status,
}
    }))

    console.log("response",response);
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const getById = async ( req, res ) => {
    try {
        const { id } = req.params;
        const response = await service.findOne(id);
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const update = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const response = await service.update(id,body);
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const _delete = async (req, res) => {
    try {
        const { id } = req.params; 
        const response = await service.delete(id);
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const getPending = async ( req, res ) => {
    try {
        const response = await service.findPending();
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

module.exports = {
    create, get, getById, update, _delete,getPending
};
