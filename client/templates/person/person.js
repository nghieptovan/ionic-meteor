Template.person.rendered = function () {
	console.log("sssssss");
	var user222 = Meteor.user();
	if(user222){
		console.log(JSON.stringify(user222));		
	}
};

Template.person.events({
    'click .item': function(e){
    	IonSideMenu.snapper.close();	
    }
	
});