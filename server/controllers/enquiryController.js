const { validationResult } = require('express-validator');
const Enquiry = require('../models/Enquiry');

// @desc    Register a new workshop enquiry
// @route   POST /api/enquiry
// @access  Public
exports.createEnquiry = async (req, res) => {
  // Check for express-validator errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation Failed',
      errors: errors.array().map(err => ({ field: err.path, msg: err.msg }))
    });
  }

  const { name, email, phone } = req.body;

  try {
    // Save to database
    const newEnquiry = new Enquiry({
      name,
      email,
      phone
    });

    await newEnquiry.save();

    res.status(201).json({
      success: true,
      message: 'Registration Successful'
    });
  } catch (error) {
    console.error('Error in createEnquiry:', error);
    
    // Check for duplicate key error (if mongodb unique index is configured)
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'This email is already registered.'
      });
    }

    res.status(500).json({
      success: false,
      message: 'Server Error. Please try again later.'
    });
  }
};
