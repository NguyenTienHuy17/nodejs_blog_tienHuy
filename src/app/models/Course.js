const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Course = new Schema({
  name: { type: String, default: 'hahaha', maxlength:255 },
  description: { type: String, maxlength:600 },
  image: { type: String, maxlength:255 },
  slug: { type: String, maxlength:255 },
  video: { type: String, maxlength:255 },
  slug: { type: String, slug: "name", unique: true}
}, {
  timestamps: true,
});

mongoose.plugin(slug);

Course.plugin(mongooseDelete, {
  deletedAt : true,
  overrideMethods: 'all',
})


module.exports = mongoose.model('Course', Course);
