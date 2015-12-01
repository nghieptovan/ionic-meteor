Template.person.rendered = function () {
	console.log("sssssss");
	var user222 = Meteor.user();
	if(user222){
		console.log(JSON.stringify(user222));		
	}
};
