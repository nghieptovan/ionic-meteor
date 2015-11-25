Template.tabs.rendered = function () {
	$('.tabs-remove-class').removeClass("tabs-icon-top");
};
Template.tabs.events({
    'click .tab-sidemenu': function(e){
    	IonSideMenu.snapper.open('right');
    	}
	
});