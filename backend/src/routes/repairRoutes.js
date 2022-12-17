const express = require('express');
const router = new express.Router();
const { createRepair, getRepairs, getRepairById, deleteRepair } = require('../controllers/repairController');
const upload = require('../middleware/multerUpload')


router.post('/createRepair',upload.single('img'),createRepair);
router.get('/getRapairs',getRepairs);
router.get('/getRepair/:id',getRepairById);
router.post('/deleteRepair/:id',deleteRepair);



module.exports = router;