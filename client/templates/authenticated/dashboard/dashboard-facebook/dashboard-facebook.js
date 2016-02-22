


Template.dashboardFacebook.helpers({
  isUserFBGroupAdmin: function() {
    return true;    //TODO add login for FB admin @zur
  },
  isSpinnerOn: function(){
    return Session.get('FBSpinnerOn');
  }
});
Template.dashboardFacebook.events({
  'click #_userFbGroupAdmin': function(event){
    event.preventDefault();
    let currentText = event.currentTarget.textContent;
    if (currentText === "I will add my group later..."){
      //$("#btnAddProfile").attr('value', 'Save');
      $('#_userFbGroupAdmin').html("Get your facebook group posts!");
      $('#_FBGroupForm').hide();
    }
    else{
      $('#_userFbGroupAdmin').html("I will add my group later...");
      $('#_FBGroupForm').show();
    }
  },
  'click #_getFBData': function(event){
    event.preventDefault();
    Session.set('FBSpinnerOn', true);



    //Dates (will convert to UNIX timestamp on the server) :
    let startRangeDate = $('#startDate').val();
    let endRangeDate = $('#endDate').val();
    console.log("startDate  >>> " + startRangeDate)

    Modules.client.facebook.groupUrlToID($('#_fbGroupIdInput').val(), function(groupID){
      Meteor.call('createGroupList', groupID, startRangeDate, endRangeDate, function(error, result) {
        if (error){
          console.log("ERROR createGroupList : " + error)
          Session.set('FBSpinnerOn', false);
          Bert.alert("Sorry something went Wrong, try again", 'danger');
        } else {
          Meteor.call('tagFacebookDotz', result, function(error, result){
            if (error){
              console.log(error);
            }
            Bert.alert("Everything is ready! Go ahead!", 'success');
            $('#_fbGroupIdInput').val('');
            Session.set('FBSpinnerOn', false);
          })
        }
      })
    })
  }
});
