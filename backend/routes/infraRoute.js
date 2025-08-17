const express = require('express');
const router = express.Router();
const infraController = require('../controllers/infraController');

router.post('/create', infraController.createInfrastructure);
router.get('/', infraController.getAllInfrastructure);
router.get('/:id', infraController.getInfrastructureById);
router.post('/update', infraController.updateInfrastructure); // _id in body
router.delete('/:id', infraController.deleteInfrastructure);

module.exports = router;