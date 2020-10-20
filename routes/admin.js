const router = require('express').Router();
const adminController = require('../Controller/adminController');


router.get('/dashboard', adminController.viewDashboard);

router.get('/members', adminController.viewMembers);

router.get('/users', adminController.viewUsers);
router.post('/users', adminController.addUsers);
router.put('/users', adminController.editUsers);
router.delete('/users/:id', adminController.deleteUsers);


module.exports = router;