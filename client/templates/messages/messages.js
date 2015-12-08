Template.messages.rendered = function () {
	  //alert("2333333333");
};
Template.messages.events({
	'click .open-content': function(e){
		IonSideMenu.snapper.close();
	}
});