const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');
const { upload } = require('../middleware/upload-file')

const CandidacyController = require('../controllers/candidacy.controller');

// Handle incoming GET requests to /candidacy
router.get('/', CandidacyController.candidacy_get_all);
router.post('/:advertisementId', upload.single('cv_filename'), checkAuth, CandidacyController.candidacy_create_candidacy);
router.get('/:candidacyId', CandidacyController.candidacy_get_candidacy);
router.delete('/:candidacyId', CandidacyController.candidacy_delete_candidacy);
router.put('/:candidacyId', CandidacyController.candidacy_update_candidacy);
router.post('/search', CandidacyController.candidacy_search_candidacy);
router.get('/download/:id', CandidacyController.candidacy_download_cv);

module.exports = router;