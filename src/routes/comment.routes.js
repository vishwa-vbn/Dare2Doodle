// src/routes/comment.routes.js
const express = require('express');
const {
  listComments,
  addComment,
  removeComment,
  updateComment,
} = require('../controllers/comment.controller');
const {
  addLike,
  removeLike,
  getLikeInfo,
} = require('../controllers/likes.controller');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/:challengeId', listComments);
router.post('/', authMiddleware, addComment);
router.put('/:id', authMiddleware, updateComment);
router.delete('/:id', authMiddleware, removeComment);

// 👇 Like routes nested under comments
router.post('/:id/like', authMiddleware, addLike);
router.delete('/:id/like', authMiddleware, removeLike);
router.get('/:id/like', getLikeInfo);

module.exports = router;
