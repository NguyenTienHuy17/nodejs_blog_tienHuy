const Course = require('../models/Course');
const mongoose = require('mongoose');
const {multipleMongooseToObject} = require('../../util/mongoose')

class SiteController {

    // [Get] /home
    index(req, res, next) {

        Course.find({})
        .then(courses => {
            res.render('home', {
                courses: multipleMongooseToObject(courses)
            });
        })
        .catch(next);
    }

}

module.exports = new SiteController;