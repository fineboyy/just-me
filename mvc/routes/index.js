var express = require('express');
var router = express.Router();


const indexCtrl = require("../controllers/indexController")

/* GET home page. */
router.get('/', indexCtrl.getHomePage)

router.get('/about', indexCtrl.getAboutPage)
router.get('/contact', indexCtrl.getContactPage)
router.get('/posts/:postid', indexCtrl.getBlogPost)

router.get('/404', indexCtrl.get404)
router.get('*', indexCtrl.redirectTo404)

module.exports = router;
