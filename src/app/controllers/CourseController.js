const Course = require('../models/Course');
const {mongooseToObject} = require('../../util/mongoose')
const {multipleMongooseToObject} = require('../../util/mongoose')

class CourseController {

    // [Get] /courses/detail
    detail(req, res, next) {
        Course.findOne({ slug: req.params.slug})
            .then(course => {
                res.render('courses/detail', {
                    course: mongooseToObject(course)
                });
            })
            .catch(next);
    }
     // [Get] /courses/create
    create(req, res, next){
        res.render('courses/create');
    }

    // [Post] /courses/store
    store(req, res, next){
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${formData.video}/sddefault.jpg`;
        const course = new Course(req.body);
        course.save()
            .then(() => res.redirect('/'))
            .catch(next)
    }


    all(req, res, next){
        Course.find({})
        .then(courses => {
            res.render('courses/all', {
                courses: multipleMongooseToObject(courses)
            });
        })
        .catch(next);
    }

    // [Get] /courses/update
    update(req, res, next){
        Course.findById(req.params.id)
        .then(course => {
            res.render('courses/update', {
                course: mongooseToObject(course)
            });
        })
        .catch(next);
    }

    //[Put] /courses:/id
    restore(req, res, next){
        Course.updateOne({_id: req.params.id}, req.body)
            .then(() => res.redirect('/courses/all'))
            .catch(next)
    }
}

module.exports = new CourseController;