Router.configure({
  layoutTemplate: 'masterLayout',
  yieldTemplates: {
        nav: {to: 'nav'},
		tabs: {to: 'tabs'}
    }
});


Router.route('/', {
  name: 'search'
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
Router.route('/message/:userID?', {
	name: 'message'
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

AccountsTemplates.addFields([
  {
      _id: "username",
      type: "text",
      displayName: "username",
      required: true,
      minLength: 5,
      maxLength: 20,
  }
]);
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

