const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const CompanyController = require('../controllers/company.controller');

// Handle incoming GET requests to /company
router.get('/', CompanyController.company_get_all);
router.post('/', checkAuth, CompanyController.company_create_company);
router.get('/:id', CompanyController.company_get_company);
router.delete('/:id', CompanyController.company_delete_company);
router.put('/:id', CompanyController.company_update_company);

module.exports = router;