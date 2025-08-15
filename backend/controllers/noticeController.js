// notice.controller.js
const Notice = require('../models/Notice.js');

/**
 * Controller for Notice CRUD
 */

exports.createNotice = async (req, res) => {
  try {
    const { noticeId, header, body, date, place, forWhom, by } = req.body;

    // basic check
    if (!noticeId || !header || !body || !by) {
      return res.status(400).json({ message: 'noticeId, header, body and by are required' });
    }

    // ensure unique noticeId
    const exists = await Notice.findOne({ noticeId });
    if (exists) {
      return res.status(409).json({ message: 'noticeId already exists' });
    }

    const notice = new Notice({
      noticeId, header, body, date, place, forWhom, by
    });

    const saved = await notice.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error('createNotice error', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.getAllNotices = async (req, res) => {
  try {
    // optional query params: ?q=keyword or ?limit=10&skip=0
    const q = req.query.q;
    const filter = q ? {
      $or: [
        { header: new RegExp(q, 'i') },
        { body: new RegExp(q, 'i') },
        { place: new RegExp(q, 'i') },
        { forWhom: new RegExp(q, 'i') },
        { by: new RegExp(q, 'i') }
      ]
    } : {};

    const limit = Math.min(parseInt(req.query.limit) || 50, 200);
    const skip = parseInt(req.query.skip) || 0;

    const notices = await Notice.find(filter).sort({ date: -1 }).skip(skip).limit(limit);
    res.json(notices);
  } catch (err) {
    console.error('getAllNotices error', err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getNoticeById = async (req, res) => {
  try {
    const id = req.params.id; // can be mongo _id or noticeId
    let notice = null;

    if (mongooseIsObjectId(id)) {
      notice = await Notice.findById(id);
    }
    if (!notice) {
      notice = await Notice.findOne({ noticeId: id });
    }

    if (!notice) return res.status(404).json({ message: 'Notice not found' });
    res.json(notice);
  } catch (err) {
    console.error('getNoticeById error', err);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateNotice = async (req, res) => {
  try {
    const id = req.params.id;
    const update = req.body;

    // find by _id or noticeId
    let notice = null;
    if (mongooseIsObjectId(id)) {
      notice = await Notice.findByIdAndUpdate(id, update, { new: true, runValidators: true });
    }
    if (!notice) {
      notice = await Notice.findOneAndUpdate({ noticeId: id }, update, { new: true, runValidators: true });
    }
    if (!notice) return res.status(404).json({ message: 'Notice not found to update' });

    res.json(notice);
  } catch (err) {
    console.error('updateNotice error', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.deleteNotice = async (req, res) => {
  try {
    const id = req.params.id;
    let deleted = null;

    if (mongooseIsObjectId(id)) {
      deleted = await Notice.findByIdAndDelete(id);
    }
    if (!deleted) {
      deleted = await Notice.findOneAndDelete({ noticeId: id });
    }

    if (!deleted) return res.status(404).json({ message: 'Notice not found to delete' });
    res.json({ message: 'Deleted', deleted });
  } catch (err) {
    console.error('deleteNotice error', err);
    res.status(500).json({ message: 'Server error' });
  }
};

/* helper */
const mongooseIsObjectId = (id) => {
  const mongoose = require('mongoose');
  return mongoose.Types.ObjectId.isValid(id);
};
