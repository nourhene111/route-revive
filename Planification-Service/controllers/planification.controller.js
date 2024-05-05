
const axios=require('axios')
const updatePriorite = async (req, res) => {
    try {
        console.log(req.body);
            const response = await axios.patch(`http://localhost:8000/demande/api/demande/updatePriorite/${req.params.id}`,req.body);
        console.log(response.data);
            res.json(response.data);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

module.exports={updatePriorite}