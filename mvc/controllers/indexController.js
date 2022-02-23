let data = require('../../postData')


let postAuthor = data.author
const uniqueTags = data.uniqueTags
let categoryData = data.categoryData
postData = data.postData

const recentPostsAmount = 6


const getHomePage = function(req, res) {
    res.render("index", 
    {
        title: "JustMe - The Blog Made Just For You", 
        posts: postData, 
        active: "index",
        categoryData: categoryData
    })
}


const getBlogPost = function({params}, res) {
    let post = postData.find((val) =>  val.id == params.postid)

    if(!post) {
        return res.redirect("/404")
    }
    res.render("post", 
    {
        title: post.title, 
        post: post, 
        author: postAuthor, 
        uniqueTags: uniqueTags, 
        recentPosts: postData.slice(0, recentPostsAmount),
        categoryData: categoryData
    })
}


const getAboutPage = function (req, res) {
    res.render("about", {
        title: "About Us | Just Me", 
        active: "about",
        categoryData: categoryData
    })
}
const getContactPage = function (req, res) {
    res.render("contact", {
        title: "About Us | Just Me", 
        active: "contact",
        categoryData: categoryData
    })
}

const getFilteredPosts = function({query}, res) {

    let filteredPosts = postData.filter((val) => val.category == query.category)

    res.render('filter', {
        title: "Just Me - Filtered",
        active: query.category,
        categoryData: categoryData,
        posts:  filteredPosts,
        author: postAuthor
    })
}

const get404 = function(req, res) {
    res.render('404', 
    {
        title: '404 - The Page You Requested Could Not Be Found', 
        author: postAuthor, uniqueTags: uniqueTags, 
        recentPosts: postData.slice(0, recentPostsAmount),
        categoryData: categoryData
    })
}
const redirectTo404 = function(req, res) {
    res.redirect("/404")
}



module.exports = {
    getHomePage,
    getBlogPost,
    getAboutPage,
    getContactPage,
    getFilteredPosts,
    get404,
    redirectTo404
}