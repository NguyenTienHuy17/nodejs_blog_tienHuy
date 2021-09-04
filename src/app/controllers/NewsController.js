class NewsController {

    // [Get] /news
    index(req, res) {
        res.render('news');
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send('đây là trang chi tiết');
    }
}

module.exports = new NewsController;