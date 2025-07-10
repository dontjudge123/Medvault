const express = require('express');
const router = express.Router();

// Get all patients
router.get('/', (req, res) => {
    // TODO: Implement logic to fetch patients
    res.json({ patients: [] });
});

// Add a patient
router.post('/', (req, res) => {
    // TODO: Implement logic to add a patient
    res.json({ message: 'Patient added' });
});

module.exports = router;
