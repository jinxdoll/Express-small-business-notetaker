// Dependencies
const express = require('express');

// EXPRESS Server
const app = express();

const PORT = process.env.PORT || 8080;

// Set up for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));