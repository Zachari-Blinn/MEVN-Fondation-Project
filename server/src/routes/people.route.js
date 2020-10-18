const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const {validateRegister, validateLogin} = require('../middleware/validation');

const PeopleController = require('../controllers/people.controller');

// Handle incoming GET requests to /people
router.get('/', PeopleController.people_get_all);
router.post('/', validateRegister, PeopleController.people_create_people);
router.get('/:id', PeopleController.people_get_people);
router.delete('/:id', PeopleController.people_delete_people);
router.put('/:id', PeopleController.people_update_people);
router.post('/login', validateLogin, PeopleController.people_login_people);
router.delete('/logout', PeopleController.people_logout_people);
router.post('/search', PeopleController.people_search_people);
router.get('/dashboard/:id', PeopleController.people_dashboard_people);

module.exports = router;