Router.configure({
  layoutTemplate: 'layout'
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