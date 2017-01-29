'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _fmLog = require('fm-log');

var _fmLog2 = _interopRequireDefault(_fmLog);

var _UsersRoutes = require('./routes/UsersRoutes');

var _UsersRoutes2 = _interopRequireDefault(_UsersRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// use morgan for logging out requests to the console
// fetch dependencies
app.use((0, _morgan2.default)('tiny'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

app.get('/', function (req, res) {
  res.status(200).send('Welcome to cp3_document_management_system');
});

// set up User related routes
_UsersRoutes2.default.setUserRoutes(app);

var port = process.env.PORT || 3090;
app.listen(port, function () {
  _fmLog2.default.info('Server listenening on port ' + port);
});