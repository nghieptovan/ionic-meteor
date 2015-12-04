Template.message.events({
  'click [data-action=share-product]': function (event, template) {
    IonActionSheet.show({
      titleText: 'What would you like to do?',
      buttons: [
        { text: '<h4>Camera</h4>' },
        { text: '<h4>Media Library</h4>' },
      ],
      cancelText: 'Cancel',
      buttonClicked: function(index) {
        if (index === 0) {
          console.log('Tweet!');
        }
        if (index === 1) {
          console.log('Email!');
        }
        return true;
      }
    });
  }
});