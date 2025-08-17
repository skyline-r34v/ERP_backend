const Department = require('../models/Department');

// Create a new department
exports.createDepartment = async (req, res) => {
  try {
    const department = new Department(req.body);
    const savedDept = await department.save();
    res.status(201).json(savedDept);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all departments
exports.getAllDepartments = async (req, res) => {
  try {
    const departments = await Department.find();
    res.status(200).json(departments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single department by MongoDB _id
exports.getDepartmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const department = await Department.findById(id);
    if (!department) {
      return res.status(404).json({ message: 'Department not found' });
    }
    res.status(200).json(department);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update department using POST and _id in body
exports.updateDepartment = async (req, res) => {
  try {
    const { _id, ...updateData } = req.body;
    const updatedDept = await Department.findByIdAndUpdate(
      _id,
      updateData,
      { new: true, runValidators: true }
    );
    if (!updatedDept) {
      return res.status(404).json({ message: 'Department not found' });
    }
    res.status(200).json("Updated The Department");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete department by MongoDB _id
exports.deleteDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedDept = await Department.findByIdAndDelete(id);
    if (!deletedDept) {
      return res.status(404).json({ message: 'Department not found' });
    }
    res.status(200).json({ message: 'Department deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};