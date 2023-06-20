const router = express.Router();
const express = require('express');
const studentControllers = require('../controllers/students');

router.get('/', studentControllers.listView);
router.get('/:id', studentControllers.detailedView);
router.post('/', studentControllers.createStudent);
router.put('/:id', studentControllers.updateStudent);
router.delete('/:id', studentControllers.deleteStudent);

module.exports = router;
