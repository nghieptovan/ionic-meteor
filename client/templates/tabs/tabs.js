Template.tabs.rendered = function () {
	$('.tabs-remove-class').removeClass("tabs-icon-top");
};
Template.tabs.events({
    'click .tab-sidemenu': function(e){
    	var user = Meteor.user();
    	if(user){
    		IonSideMenu.snapper.open('right');    		
    	}
    	else{
    		Router.go('signin');
    	}	
    }
	
});