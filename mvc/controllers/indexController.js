let postData = require('../../postData')


let postAuthor = postData.author
postData = postData.postData



const getHomePage = function(req, res) {
    console.log(postData.length)
    res.render("index", {title: "JustMe - The Blog Made Just For You", posts: postData})
}


const getBlogPost = function({params}, res) {
    let post = postData.find((val) =>  val.id == params.postid)

    if(!post) {
        return res.redirect("/404")
    }
    res.render("post", {title: post.title, post: post, author: postAuthor})
}


const get404 = function(req, res) {
    res.render('404', {title: '404 - The Page You Requested Could Not Be Found'})
}


const redirectTo404 = function(req, res) {
    res.redirect("/404")
}



module.exports = {
    getHomePage,
    getBlogPost,
    get404,
    redirectTo404
}