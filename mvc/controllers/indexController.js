let data = require('../../postData')


let postData = data.postData

const recentPostsAmount = 6

const defaultData = {
    categoryData: data.categoryData,
    author: data.author,
    uniqueTags: data.uniqueTags,
}

const getHomePage = function(req, res) {

    let data = {
        ...defaultData,
        title:  "Just Me - The Blog Made Just For You",
        posts: postData,
        active: "index"
    }

    res.render("index", data)
}


const getBlogPost = function({params}, res) {
    let post = postData.find((val) =>  val.id == params.postid)

    if(!post) {
        return res.redirect("/404")
    }

    let data = {
        ...defaultData,
        title:  post.title,
        post: post,
        recentPosts: postData.slice(0, recentPostsAmount),
    }
    res.render("post", data)
}


const getAboutPage = function (req, res) {

    let data = {
        ...defaultData,
        title:  "About Us | Just Me",
        active: "about",
        recentPosts: postData.slice(0, recentPostsAmount),
    }

    res.render("about", data)
}
const getContactPage = function (req, res) {

    let data = {
        ...defaultData,
        title:  "Contact Us | Just Me",
        active: "contact"
    }
    res.render("contact", data)
}

const getFilteredPosts = function({query}, res) {

    let filteredPosts = postData.filter((val) => {
        return val.category == query.category || val.tags.includes(query.tag)
    })


    let data = {
        ...defaultData,
        title:  "Just Me - Filtered",
        active: query.category,
        posts: filteredPosts,
    }

    res.render('filter', data)
}

const get404 = function(req, res) {

    let data = {
        ...defaultData,
        title: '404 - The Page You Requested Could Not Be Found',
        recentPosts: postData.slice(0, recentPostsAmount),
    }
    res.render('404', data)
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