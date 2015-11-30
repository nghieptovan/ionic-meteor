Router.configure({
  layoutTemplate: 'layout',
  yieldTemplates: {
        nav: {to: 'nav'}

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

//Routes
AccountsTemplates.configureRoute('changePwd');
AccountsTemplates.configureRoute('enrollAccount');
AccountsTemplates.configureRoute('forgotPwd');
AccountsTemplates.configureRoute('resetPwd');
AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('verifyEmail');