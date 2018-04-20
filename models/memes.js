
var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var ArticleSchema = new Schema ({
	title: {
		type: String,
		trim: true,
		unique: true,
		required: "title is required"
	},
	date: {
		type: String,
		trim: true
	},
	link: {
		type: String,
		trim: true,
		unique: true
	},
	notes: [{
    type: Schema.Types.ObjectId
  }]
});



var Article = mongoose.model('Article', ArticleSchema);


module.exports = Article;