Router.configure({
  layoutTemplate: 'masterLayout',
  yieldTemplates: {
        nav: {to: 'nav'},
		tabs: {to: 'tabs'}
    }
});


/*Router.route('/', {
  name: 'search',
  data: function() {
	  	templateData = [
	  	    {name:'ToNghiep',first_text:'<p>I am the manager of Toys R in Times Square with an MBA from Cornell University. I enjoy all kind of
            sports and coach my son's track team.</p>
		  	<p>I have experience training and coaching people of all ages on staying fit and keeping a productive
                workout routine. I personally have a blog documenting my own habits and ways I am improving own
                fitness.</p>'},
		  	{name:'ToNghiep2',first_text:'<p>Hi threrr</p>'}];
	    return templateData;
	  }
});*/


Router.route('/', {
	  name: 'search',
	  data: function() {
		  	templateData = [
		  	    {name:'ToNghiep',first_text:'I am the manager of Toys R in Times Square with an MBA from Cornell University. ',avatar:'avatar.jpg'},
			  	{name:'ToNghiep2',first_text:'Hi threrr',avatar:'avt.png'}];
		    return templateData;
		  }
	});
Router.route('/messages', {
	  name: 'messages'
});
Router.route('/person', {
	  name: 'person'
});
Router.route('/payment', {
	  name: 'payment'
});
Router.route('/profile', {
	  name: 'profile'
});
Router.route('/settings', {
	  name: 'settings'
});
Router.route('/message', {
	name: 'message'
});
Router.route('/message2', {
	name: 'message2'
});
Router.route('/carousel', {
	name: 'carousel'
});
Router.route('/sign-out', {
    name: 'signOut',
    onBeforeAction: function () {
        AccountsTemplates.logout();
        IonSideMenu.snapper.close();
        this.redirect('/');
    }
});

//Routes

Router.plugin('ensureSignedIn', {
    only: ['messages']
});

AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('enrollAccount');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn', {
    name: 'signin',
    path: '/sign-in'
});

AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');

