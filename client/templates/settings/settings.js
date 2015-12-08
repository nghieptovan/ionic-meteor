Template.settings.events({
	'click .ion-chevron-left': function(e){
    	var user = Meteor.user();
    	if(user){
    		IonSideMenu.snapper.open('right');    		
    	}
    	else{
    		Router.go('signin');
    	}	
    },
	'click .open-content': function(e){
		IonSideMenu.snapper.close();
	}
	
});