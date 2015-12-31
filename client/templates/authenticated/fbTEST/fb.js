
Template.fb.events({
  'click #btn-fb': function(e){
    Meteor.call('getUserData', function(error, data){
      $('#result').text(JSON.stringify(data))
    })
  }
});
