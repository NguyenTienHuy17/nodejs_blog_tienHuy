const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CourseController');

router.get('/all', courseController.all);
router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/update/:id', courseController.update);
router.put('/restore/:id', courseController.restore);
router.get('/:slug', courseController.detail);


module.exports = router;