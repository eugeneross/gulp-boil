'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Numie &mdash; Digital Studio'
  });
});

module.exports = router;
