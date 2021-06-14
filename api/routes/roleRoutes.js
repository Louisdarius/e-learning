const router = require('express').Router();
const roleController = require('../controllers/roleController');
// const auth = require('../middleware/auth');
// const { adminAuth } = require('../middleware/adminAuth');

router.get('/', roleController.getAllRoles);
router.get('/:id', roleController.getEachRole);
router.post('/', roleController.addRole);
router.put('/:id', roleController.updateRole);
router.delete('/:id', roleController.deleteRole);

module.exports = router;
