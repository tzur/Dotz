Template.superShareModal.onCreated(function(){
  Session.set('spinnerOn', false);
})
Template.superShareModal.helpers({
  isSpinnerOn: function(){
   return Session.get('spinnerOn');
  }
});
Template.superShareModal.events({
  'click #_exitBtnSuperShare': function(event){
    event.preventDefault();
    Modal.hide();
  },
  'submit #superShareForm': function(event){
    event.preventDefault();
    Session.set('spinnerOn',true);
    let formFields = $(event.currentTarget).serializeArray();
    let nameAndEmailArray = [];
    let emailDescription = "";
    let emailSubject = "NOTHING";
    let name;
    let nameIndex;
    for (var i=0; i< formFields.length;i++){
      //getting subject
      if (formFields[i].name === "subject" && formFields[i].value != ""){
        emailSubject = formFields[i].value;
      }
      //splitting description
      else if(formFields[i].name === "description" && formFields[i].value != ""){
        emailDescription = formFields[i].value
      }
      //Getting emails and names:
      else if (formFields[i].name === "emails"){
        //splitting spaces and commas
        let emailArray = formFields[i].value.split(/[\s,]+/);
        emailArray.forEach(function(email){
          nameIndex = email.indexOf('@');
          name = email.substring(0,nameIndex);
          nameAndEmailArray.push({
            email: email,
            name: name
          })
        })
      }
    }
    let profilePic = Meteor.user().profile.profileImage;
    let coverImg = Meteor.user().profile.coverImage;
    let userSlug = Meteor.user().profile.userSlug;
    let hotelName = Meteor.user().username;
    Meteor.call('superShare',nameAndEmailArray, userSlug, hotelName, profilePic, emailDescription,
                  coverImg, emailSubject, function(error,result){
        if (error){
          Bert.alert("Something went wrong, please try again", 'danger');
          Session.set('spinnerOn', false);
        }
        else{
          Modal.hide();
          Bert.alert("Mail sent!", 'success');
          Session.set('spinnerOn', false);
        }
      })
  }
});
