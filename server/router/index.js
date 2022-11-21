const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.get('/users', controller.getUserTable);
router.get('/discover', controller.getDiscoverTable);
router.get('/country', controller.getCountryTable);
router.get('/disease', controller.getDiseaseTable);
router.get('/doctor', controller.getDoctorTable);
router.get('/public-servant', controller.getPublicServantTable);
router.get('/record', controller.getRecordTable);
router.get('/specialize', controller.getSpecializeTable);
router.get('/disease-type', controller.getDiseaseTypeTable);

router.post('/users', controller.addUserRow);
router.post('/discover', controller.addDiscoverRow);
router.post('/country', controller.addCountryRow);
router.post('/disease', controller.addDiseaseRow);
router.post('/doctor', controller.addDoctorRow);
router.post('/public-servant', controller.addPublicServantRow);
router.post('/record', controller.addRecordRow);
router.post('/specialize', controller.addSpecializeRow);
router.post('/disease-type', controller.addDiseaseTypeRow);

router.put('/users/:email', controller.updateUserRow);
router.put('/discover/:disease-code', controller.updateDiscoverRow);
router.put('/disease/:id', controller.updateDiseaseRow);
router.put('/disease-type/:id', controller.updateDiseaseTypeRow);
router.put('/doctor/:email', controller.updateDoctorRow);
router.put('/public-servant/:email', controller.updatePublicServantRow);
router.put('/record/:email', controller.updateRecordRow);
router.put('/country/:cname', controller.updateCountryRow);
router.put('/specialize/:id', controller.updateSpecializeRow);

router.delete('/users/:email', controller.deleteUserRow);
router.delete('/discover/:disease-code', controller.deleteDiscoverRow);
router.delete('/disease/:id', controller.deleteDiseaseRow);
router.delete('/disease-type/:id', controller.deleteDiseaseTypeRow);
router.delete('/doctor/:email', controller.deleteDoctorRow);
router.delete('/public-servant/:email', controller.deletePublicServantRow);
router.delete('/record/:email', controller.deleteRecordRow);
router.delete('/country/:cname', controller.deleteCountryRow);
router.delete('/specialize/:id', controller.deleteSpecializeRow);

module.exports = router;