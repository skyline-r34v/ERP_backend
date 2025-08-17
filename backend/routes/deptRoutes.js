const express = require('express');
const router = express.Router();
const departmentController = require('../controllers/deptController');

router.post('/create', departmentController.createDepartment);
router.get('/', departmentController.getAllDepartments);
router.get('/:id', departmentController.getDepartmentById); // uses MongoDB _id
router.post('/update', departmentController.updateDepartment); // _id in body
router.delete('/:id', departmentController.deleteDepartment); // uses MongoDB _id

module.exports = router;