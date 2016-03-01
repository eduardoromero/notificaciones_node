var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    global.calls++;

    res.render('index', {calls: global.calls});
});

module.exports = router;
