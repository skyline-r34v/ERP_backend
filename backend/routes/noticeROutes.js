// notice.routes.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/noticeController');

// routes:
// GET    /notices          -> list (supports ?q= & limit & skip)
// POST   /notices          -> create
// GET    /notices/:id      -> get by id (mongo _id or noticeId)
// PUT    /notices/:id      -> update
// DELETE /notices/:id      -> delete

router.get('/', controller.getAllNotices);
router.post('/', controller.createNotice);
router.get('/:id', controller.getNoticeById);
router.put('/:id', controller.updateNotice);
router.delete('/:id', controller.deleteNotice);

module.exports = router;
