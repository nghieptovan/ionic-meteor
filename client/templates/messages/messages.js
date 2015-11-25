Template.messages.helpers({
  times: function () {
    var times = [];
    _(20).times(function(n){
      times.push(n);
    });
    return times;
  }
});
Template.messages.rendered = function () {
	  //alert("2333333333");
};
