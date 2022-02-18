let postData = require('../../postData')

postData = postData.postData

const getHomePage = function(req, res) {
    console.log(postData.length)
    res.render("index", {title: "Just Me", posts: postData})
}


const getBlogPost = function({params}, res) {
    let post = postData.find((val) =>  val.id == params.postid)
    res.render("post", {title: post.title, post: post})
}



module.exports = {
    getHomePage,
    getBlogPost
}