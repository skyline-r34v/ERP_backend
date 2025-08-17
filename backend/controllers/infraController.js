const Infrastructure = require('../models/Infrastructure');

// Create infrastructure
exports.createInfrastructure = async (req, res) => {
  try {
    const infra = new Infrastructure(req.body);
    const savedInfra = await infra.save();
    res.status(201).json("Infra Added");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all infrastructure
exports.getAllInfrastructure = async (req, res) => {
  try {
    const infraList = await Infrastructure.find();
    res.status(200).json(infraList);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get single infrastructure by _id
exports.getInfrastructureById = async (req, res) => {
  try {
    const { id } = req.params;
    const infra = await Infrastructure.findById(id);
    if (!infra) {
      return res.status(404).json({ message: 'Infrastructure not found' });
    }
    res.status(200).json(infra);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update infrastructure using POST and _id in body
exports.updateInfrastructure = async (req, res) => {
  try {
    const { _id, ...updateData } = req.body;
    const updatedInfra = await Infrastructure.findByIdAndUpdate(
      _id,
      updateData,
      { new: true, runValidators: true }
    );
    if (!updatedInfra) {
      return res.status(404).json({ message: 'Infrastructure not found' });
    }
    res.status(200).json("Updated Infra");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete infrastructure by _id
exports.deleteInfrastructure = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedInfra = await Infrastructure.findByIdAndDelete(id);
    if (!deletedInfra) {
      return res.status(404).json({ message: 'Infrastructure not found' });
    }
    res.status(200).json({ message: 'Infrastructure deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};