require('dotenv').config();
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// User schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    trim: true,
    unique: true,
    lowercase: true,
  },
  email: {
    type: String,
    require: true,
    trim: true,
    unique: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is invalid');
      }
    },
  },
  password: {
    type: String,
    trim: true,
    minlength: 8,
    validate(value) {
      if (value.toLowerCase().includes('password')) {
        throw new Error('Password cannot contains "password');
      }
    },
  },
  organasationName: {
    type: String,
    trim: true,
    unique: true,
  },
  organasationLogo: {
    type: String,
  },
  gender: {
    type: String,
    strim: true,
    require: true,
  },
  status: {
    type: String,
    trim: true,
    required: true,
    enum: ['active', 'inactive'],
    default: 'active',
  },
  firstName: {
    type: String,
    trim: true,
    required: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
