var data = {
  rsvp: ['ixd@ucsd.edu']
};

/*
 * GET tasks page.
 */
exports.adminView = function(request, response){
  response.render('rsvp', data);
};

/*
* handle POST request
*/
exports.addRSVP = function(request, response) {
	var rsvpEmail = request.body.rsvpEmail;
	// this will print to your terminal whenever the POST request is made
	console.log(rsvpEmail);

	data.rsvp.push(rsvpEmail); // add to current data

	//let us send back some data so that
	//broswer knows it worked!
	response.send(rsvpEmail);
};