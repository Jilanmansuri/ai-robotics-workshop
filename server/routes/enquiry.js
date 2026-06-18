const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const enquiryController = require('../controllers/enquiryController');

// @route   POST /api/enquiry
// @desc    Submit registration enquiry
// @access  Public
router.post(
  '/enquiry',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty()
      .trim(),
    check('email', 'Please include a valid email')
      .isEmail()
      .normalizeEmail(),
    check('phone', 'Phone number must be exactly 10 digits')
      .isLength({ min: 10, max: 10 })
      .isNumeric()
  ],
  enquiryController.createEnquiry
);

module.exports = router;
