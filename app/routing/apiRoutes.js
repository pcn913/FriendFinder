var friends = require('../data/friends');

module.exports = function(app){

	app.get('/api/friends', (req, res) => {
	    res.json(friends);
	});


	app.post('/api/friends', (req, res) => {
		console.log(req.body);
	    friends.push(req.body);
	    //res.json(tables.length <= config[env].tableLimit);
	    res.json(friends);
	});

}


// exports.get = function(req, res){
// 	res.json(friends);
// }

// exports.post = function(req, res){
// 	console.log('****req****');
// 	console.log(req);
// 	console.log('****friends****');
// 	console.log(friends);
// 	friends.push(req.body);
// 	res.json(friends);

// }