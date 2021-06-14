const ApiRouter = require('express').Router();

ApiRouter.use('/roles', require('./routes/roleRoutes'));

ApiRouter.get('/', function (req, res, next) {
  res.json({ name: 'Cyrille Senami Hounvio', email: 'cyrisenahoun@gmail.com' });
});

module.exports = ApiRouter;
