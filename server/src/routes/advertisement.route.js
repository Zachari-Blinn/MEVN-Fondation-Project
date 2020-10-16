const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const AdvertisementController = require('../controllers/advertisement.controller');

// Handle incoming GET requests to /advertisement
router.get('/', AdvertisementController.advertisement_get_all);
router.post('/', AdvertisementController.advertisement_create_advertisement);
router.get('/:advertisementId', AdvertisementController.advertisement_get_advertisement);
router.put('/:advertisementId', AdvertisementController.advertisement_update_advertisement);
router.delete('/:advertisementId', AdvertisementController.advertisement_delete_advertisement);

router.get('/company/:companyId', AdvertisementController.advertisement_get_advertisement_by_company);
router.post('/search', AdvertisementController.advertisement_search_advertisement);

module.exports = router;