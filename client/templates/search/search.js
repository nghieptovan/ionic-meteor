Template.search.events({
	'click .open-content': function(e){
		IonSideMenu.snapper.close();
	},
	'click .request-chat': function (event, template) {
	    // increment the counter when button is clicked
		if(Template.instance().state.get('user').name =="ToNghiep2")
			template.state.set('user', templateData[0]);
		else
			template.state.set('user', templateData[1]);
	  }
	  
	  
});
Template.search.rendered = function() {
    $('#carousel').slick({
      dots: true,
      arrows: true
    });
    $('body').data('hammer').set({
        drag_min_distance:1,
        swipe_velocity:0.1
      });
};


Template.search.created = function () {
	  // counter starts at 0
	  this.state = new ReactiveDict();
	  this.state.set('user', templateData[1]);
}; 

Template.search.helpers({
	user: function () {
	    return Template.instance().state.get('user');
	  },
	templateGestures: {
		'tap .other-picture': function (event, templateInstance, template) {
			if(Template.instance().state.get('user').name =="ToNghiep2")
				Template.instance().state.set('user', templateData[0]);
			else
				Template.instance().state.set('user', templateData[1]);
		    }
	  }
});
