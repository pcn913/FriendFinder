var friends = require('../data/friends');

module.exports = function(app){

	app.get('/api/friends', (req, res) => {
	    res.json(friends);
	});


	app.post('/api/friends', (req, res) => {
	    friends.push(req.body);

	    //compare against other friends
	    var bestMatch = compare(req.body);

	    //return the best match
	    res.json(bestMatch);
	});

}

//function to sell to okCupid!
function compare(me){

	var score = 0;
	var minscore = 0;
	var bestMatch;

	//if you are the only one, then return yourself (duh)
	if(friends.length == 1){
		return me;
	}

	//if you are the second one, then return the other person (duh again)
	if(friends.length == 2){
		return friends[0];
	}

    //< && not <= because you dont want to compare against yourself
	for(var i=0; i < friends.length-1; i++){
	
		for(var j=0; j <= friends[i].scores.length-1; j++){
			score += Math.abs(me.scores[j] - friends[i].scores[j]);
		}

		//first time through function the minscore and score should be same
		if(i == 0){
			minscore = score;
			bestMatch = friends[i];
		//if there is a new minscore then make that new friend the best match
		//if two scores are tied then return the first match (love at first sight!)
		}else if(score < minscore){
			minscore = score;
			bestMatch = bestMatch = friends[i];
		}

		//reset the score before looping to next one
		score = 0;
	}

	//return the bestmatch
	return bestMatch;
}
