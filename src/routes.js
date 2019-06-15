const express = require('express');
const routes = new express.Router();
const PostController = require('../controllers/PostController');
const multer = require('multer');
const uploadConfig = require('../config/upload');
const LikeController = require('../controllers/LikeController');

const upload = multer(uploadConfig);

routes.post('/posts', upload.single('image'), PostController.store) ;
routes.get('/posts', PostController.index) ;
routes.post('/posts/:id/like', LikeController.store) ;
routes.get('/', (req, res)=>{
    return res.send({status: "ok"})
})

module.exports = routes;