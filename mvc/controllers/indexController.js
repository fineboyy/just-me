let postData = require('../../postData')

postData = postData.postData

const getHomePage = function(req, res) {
    console.log(postData.length)
    res.render("index", {title: "Just Me", posts: postData})
}



module.exports = {
    getHomePage
}