const path = require('path');

module.exports = function(app){

	// Routes
	app.get('/', (req, res) => {
	    res.sendFile(path.join(__dirname, '../public/home.html'));
	});


	app.get('/survey', (req, res) => {
	    res.sendFile(path.join(__dirname, '../public/survey.html'));
	});

}



// exports.home = function(req, res){
// 	res.sendFile(path.join(__dirname, '../public/home.html'));
// }

// exports.survey = function(req, res){
// 	res.sendFile(path.join(__dirname, '../public/survey.html'));
// }