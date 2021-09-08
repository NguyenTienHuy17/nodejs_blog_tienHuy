const express = require('express');
const router = express.Router();
const courseController = require('../app/controllers/CourseController');

router.get('/all', courseController.all);
router.get('/recycleBin', courseController.recycleBin);
router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/update/:id', courseController.update);
router.put('/restore/:id', courseController.fix);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id', courseController.delete);
router.delete('/:id/deletepermanently', courseController.deletepermanently);
router.get('/:slug', courseController.detail);


module.exports = router;