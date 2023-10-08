const express = require('express');
const {blogStats,blogSearch}=require('../controllers/controller.js');


const Router=express.Router();

Router.get('/blog-stats',blogStats);
Router.get('/blog-search',blogSearch);

module.exports =Router;