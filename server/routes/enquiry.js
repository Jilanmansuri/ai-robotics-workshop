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
    check('name')
      .trim()
      .notEmpty().withMessage('Name is required')
      .isLength({ min: 2, max: 50 }).withMessage('Name must be between 2 and 50 characters')
      .matches(/^[a-zA-Z\s\-']+$/).withMessage('Name can only contain letters, spaces, hyphens, and apostrophes'),
    check('email')
      .trim()
      .notEmpty().withMessage('Email is required')
      .isEmail().withMessage('Please include a valid email address')
      .normalizeEmail({ gmail_remove_dots: false }),
    check('phone')
      .trim()
      .notEmpty().withMessage('Phone number is required')
      .matches(/^\d{10}$/).withMessage('Phone number must be exactly 10 digits')
  ],
  enquiryController.createEnquiry
);

module.exports = router;
