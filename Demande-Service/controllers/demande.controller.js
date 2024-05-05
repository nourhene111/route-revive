const DemandeService = require('../services/demande.service');
const service = new DemandeService();
const axios = require('axios')
const create = async (req, res) => {
    try {
      

        let data;
        const file = req.file


        data = {
            localisation: req.body.localisation,
            description: req.body.description,
            userID: req.payload.id
        }

        console.log(data);
        const response = await service.create(data);
        console.log(response);
        res.json({ success: true, data: response });
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const get = async (req, res) => {
    try {
        const response = await service.find();
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}
const getMyDemande = async (req, res) => {
    try {
        console.log(req.payload)
        const demandes = await service.findByUserID(req.payload.id);
        const response = await Promise.all(demandes.map(async (item) => {


            const userDetails = await axios.get(`http://localhost:8000/security/api/user/${item.userID}`);

            return {
                createdAt: item.createdAt,
                description: item.description,
                id: item.id,
                localisation: item.localisation,
                status: item.status,
                picture: item.picture,
                updatedAt: item.updatedAt,
                user: userDetails.data
            };
        }));

        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

const getById = async (req, res) => {
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
        const response = await service.update(id, body);
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}


const updatePriorite = async (req, res) => {
    try {
        console.log("hello patch");
        const { id } = req.params;
        const body = req.body;
        console.log(body);
        const response = await service.updatePriorite(id, body);
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

module.exports = {
    create, get, getById, update, _delete, getMyDemande,updatePriorite
};
