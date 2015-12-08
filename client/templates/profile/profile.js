Template.profile.events({
	'click .ion-close-round': function(e){
		IonSideMenu.snapper.open('right'); 
    },
	'click .open-content': function(e){
		IonSideMenu.snapper.close();
	}
	
});