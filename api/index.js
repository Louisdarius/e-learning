const ApiRouter = require('express').Router();

// Calling api from ApiRoutes page
ApiRouter.use('/api/elearning', require('./apiRoutes'));

// Landing page api
ApiRouter.get('/', function (req, res, next) {
  res.send('Welcome to our elarning platform');
});
ApiRouter.get('/api', function (req, res, next) {
  res.json({ name: 'Cyrille Senami Hounvio', email: 'cyrisenahoun@gmail.com' });
});

module.exports = ApiRouter;
